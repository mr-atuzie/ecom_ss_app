const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler((req, res) => {
  try {
    const token = res.cookies.token;
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, please login");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, please login");
  }
});
