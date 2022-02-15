const express = require("express");
const connectDB = require("./database/DB");
const dotenv = require("dotenv");
const cors = require("cors");
const categoryRouter = require("./api/category/categoryRoutes");
const recipeRouter = require("./api/recipe/recipeRoutes");
const ingredientRouter = require("./api/ingredient/ingredientRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/categories", categoryRouter);
// app.use("/recipes", recipeRouter);
// app.use("/ingredients", ingredientRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  connectDB();
});