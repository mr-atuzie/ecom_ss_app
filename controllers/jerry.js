const asyncHandler = require("express-async-handler");
const Photo = require("../models/photo");
const Video = require("../models/vid");
const Category = require("../models/cat");
const Jerry = require("../models/jerry");

const addPhoto = asyncHandler(async (req, res) => {
  const { url, category } = req.body;

  if (!url || !category) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  const photo = await Photo.create({ url, category });

  res.status(201).json(photo);
});

const getPhotos = asyncHandler(async (req, res) => {
  const product = await Photo.find();

  res.status(200).json(product);
});

const deletePhoto = asyncHandler(async (req, res) => {
  const photoId = req.params.id;

  const photo = await Photo.findById(photoId);

  if (!photo) {
    res.status(404);
    throw new Error("Product not found");
  }

  await Photo.findByIdAndDelete(photoId);

  res.status(200).json("Product  deleted");
});

const addVideo = asyncHandler(async (req, res) => {
  const { url, category } = req.body;

  if (!url || !category) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  const video = await Video.create({ url, category });

  res.status(201).json(video);
});

const getVideos = asyncHandler(async (req, res) => {
  const product = await Video.find({});

  res.status(200).json(product);
});

const deleteVideo = asyncHandler(async (req, res) => {
  const vidId = req.params.id;

  const vid = await Video.findById(vidId);

  if (!vid) {
    res.status(404);
    throw new Error("Product not found");
  }

  await Video.findByIdAndDelete(vidId);

  res.status(200).json("Product  deleted");
});

const addCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;

  if (!category) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  const newCategory = await Category.create({ category });

  res.status(201).json(newCategory);
});

const getCatgeory = asyncHandler(async (req, res) => {
  const product = await Category.find({});

  res.status(200).json(product);
});

const changePassword = asyncHandler(async (req, res) => {
  const { newPassword } = req.body;

  const id = req.params.id;

  if (!newPassword) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  await Jerry.findByIdAndUpdate(
    { _id: id },
    {
      password: newPassword,
    },
    { new: true, runValidators: true }
  );
});

module.exports = {
  addPhoto,
  addVideo,
  addCategory,
  getVideos,
  getPhotos,
  deletePhoto,
  deleteVideo,
  changePassword,
  getCatgeory,
};
