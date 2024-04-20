const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUser,
  updatePhoto,
  loginJerry,
} = require("../controllers/user");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/login-jerry", loginJerry);
router.get("/logout", logout);
router.get("/getUser", protect, getUser);
router.patch("/updateUser", protect, updateUser);
router.patch("/updatePhoto", protect, updatePhoto);
router.get("/loginStatus", getLoginStatus);

module.exports = router;
