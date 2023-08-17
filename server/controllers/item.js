const express = require("express");
const { ObjectId } = require("mongodb");

const db = require("../db");
const asyncHandler = require("../middleware/async-handler");
const ItemSchema = require("../db/ItemSchema");

const router = express.Router();

const itemExists = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const resp = await db().findOne({ _id: new ObjectId(id) });

  if (!resp) {
    const err = new Error("Item not found");
    err.status = 404;
    throw err;
  }

  req.item = resp;
  next();
});

router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const title = req.body.title.trim();
    const details = req.body.details?.trim() || "";
    const resp = await db().insertOne({
      ...ItemSchema,
      title: title,
      details: details,
    });
    const created = await db().findOne({ _id: new ObjectId(resp.insertedId) });
    res.status(201).json(created);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const orderByQuery = { checked: -1, last_updated_at: -1 };
    const resp = await db().find().sort(orderByQuery).toArray();
    res.json(resp);
  })
);

// router.get(
//   "/:id",
//   itemExists,
//   asyncHandler(async (req, res) => {
//     res.json(req.item);
//   })
// );

router.put(
  "/:id",
  itemExists,
  asyncHandler(async (req, res) => {
    const { item: item } = req;
    const { id } = req.params;
    const title = req.body.title?.trim() || item.title;
    const checked =
      typeof req.body.checked !== "boolean" ? item.checked : req.body.checked;
    const details = req.body.details?.trim() || item.details;

    const resp = await db().findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          title: title,
          details: details,
          checked: checked,
          last_updated_at: new Date(),
        },
      },
      { includeResultMetadata: true }
    );
    if (!resp.ok) {
      const err = new Error("There was some error updating the document.");
      err.status(500);
      throw err;
    }
    const updated = await db().findOne({ _id: new ObjectId(id) });
    res.json(updated);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await db().deleteOne({ _id: new ObjectId(id) });
    res.status(204).send();
  })
);

module.exports = router;
