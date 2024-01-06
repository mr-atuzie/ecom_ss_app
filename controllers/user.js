const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  //Validate email
  const checkEmail = await User.findOne({ email });

  if (checkEmail) {
    res.status(400);
    throw new Error("Email has already been register");
  }

  const user = await User.create({ name, email, password });

  // Generate token
  const token = generateToken(user._id);

  if (user) {
    const { _id, name, email, role } = user;

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //   sameSite: "none",
      //   secure: true,
    });

    res.status(201).json({ _id, name, email, role, token });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  //Validate user
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User does not exist, Please sign up.");
  }

  //Validate password
  const checkPassword = await bcrypt.compare(password, user.password);

  //Generate token
  const token = generateToken(user._id);

  if (user && checkPassword) {
    const newUser = await User.findOne({ email }).select("-password");

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      //   sameSite: "none",
      //   secure: true,
    });

    res.status(201).json(newUser);
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
});

//logout
const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    //   sameSite: "none",
    //   secure: true,
  });

  res.status(200).json("Successfully Logged Out");
});

//logout
const getUser = asyncHandler(async (req, res) => {
  const userid = req.user._id;

  res;
});

module.exports = { registerUser, loginUser, logout, getUser };
