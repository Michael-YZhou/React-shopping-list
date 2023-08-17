// import.meta.env.VITE_MONGO_DB_CONNECTION_STRING;
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(
  process.env.VITE_MONGO_DB_CONNECTION_STRING
);
// const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

const ItemSchema = require("./ItemSchema");

const defaultTitles = [
  "300g tomatos",
  "1 tray of eggs (12)",
  "2 pairs of socks",
  "check if protein is on special🤔",
  "sandwich for tomorrow's breakfast",
];

let itemColection;
mongoClient
  .connect()
  .then((_) => {
    db = mongoClient.db("EzyCart-app");
    // db.dropCollection("items");
    itemColection = db.collection("items");
    itemColection
      .find()
      .toArray()
      .then((arr) => {
        if (arr.length < 1) {
          itemColection.insertMany(
            defaultTitles.map((title) => {
              return { ...ItemSchema, title: title };
            })
          );
        }
      });
  })
  .catch((err) => console.log(err));

module.exports = () => itemColection;
