const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const jerryRoute = require("./routes/jerry");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://jeremiah-mbinye.netlify.app", "http://localhost:3000", ,],
    credentials: true,
  })
);

//Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/jerry-portfolio", jerryRoute);

app.get("/", (req, res) => {
  res.send("HELLO WORLD :{)");
});

//Error Middleware
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port:${PORT}`.green.underline.bold);
});
