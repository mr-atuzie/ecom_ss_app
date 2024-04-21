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
  getCatgeory,
  filter,
  filterVid,
  filterPhoto,
} = require("../controllers/jerry");

router.post("/category", addCategory);
router.post("/photo", addPhoto);
router.post("/video", addVideo);

router.get("/video", getVideos);
router.get("/photo", getPhotos);
router.get("/category", getCatgeory);

router.post("/filter-vid", filterVid);
router.post("/filter-photo", filterPhoto);

router.delete("/photo", deletePhoto);
router.delete("/video", deleteVideo);

router.patch("/password", changePassword);

module.exports = router;
