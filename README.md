# EzyCart (A shopping list app)

## About this app:

This is simple shopping list app that allows users add, remove and check items in their shopping list.

The app is deployed at: https://react-shopping-list-frontend.onrender.com

![alt text](/client/src/assets/demo_ui.png "Title")

## Technology used

This app uses React for frontend, Node.js and Express for backend and a Mongodb to store the shopping list data. It also uses React Bootstrap for some basic styling.

### Getting Started

1. `git clone` this repo to your computer
2. Follow the set up instructions below

---

## Set Up

### MongoDB

Make sure your mongodb is up and running `on port 27017`.

If you want to change the mongodb uri, you can do so in ./server/db/index.js file [here](./server/db/index.js).

### Express server

Run the API using the code in the [server](./server/) directory (all the code is there; you just need to run it). See [below](#api-endpoints) for documentation of the endpoints available.

```sh
cd server
npm i
npx nodemon app.js
```

### Vite + React

Open a new terminal window/tab for the vite server.

`cd` to the EzCart project root.

```sh
npm create vite@latest client -- --template react
cd client
npm i
npm run dev
```

### Directory Structure

Your yatodo directory should look like this:

```text
EzyCart
├── README.md
├── client
└── server
```

### A reminder of how to fix Express API CORS issues

```
app.use(
  cors({
    origin: "https://p4-static.onrender.com",
  })
);
app.options("*", cors());
```

install cors package first from npm

import cors from "cors";

(and replace origin with your own render api url ofc 😄 )

For more information: https://www.npmjs.com/package/cors
