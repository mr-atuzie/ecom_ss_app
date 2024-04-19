const express = require("express");
const router = express.Router();
const {
  addCategory,
  addVideo,
  addPhoto,
  getVideos,
  getPhotos,
  deletePhoto,
  deleteVideo,
  changePassword,
} = require("../controllers/jerry");

router.post("/category", addCategory);
router.post("/photo", addPhoto);
router.post("/photo", addVideo);
router.get("/video", getVideos);
router.get("/photo", getPhotos);
router.delete("/photo", deletePhoto);
router.delete("/video", deleteVideo);
router.patch("/password", changePassword);

module.exports = router;
