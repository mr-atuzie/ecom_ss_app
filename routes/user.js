const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  getLoginStatus,
  updateUser,
} = require("../controllers/user");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getUser", protect, getUser);
router.patch("/updateUser", protect, updateUser);
router.get("/loginStatus", getLoginStatus);

module.exports = router;
