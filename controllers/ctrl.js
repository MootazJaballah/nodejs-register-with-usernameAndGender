const express = require("express");
const User = require("../model/model");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.inscription = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    gender: req.body.gender,
  });
  await newUser
    .save()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json(error));
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.getNiveau = async (req, res) => {
  await User.findOne({ _id: req.body.id })
    .then((user) => res.status(200).json(user.niveau))
    .catch((error) => res.status(500).json(error));
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.setNiveau = async (req, res) => {
  let info = await User.findOne({ _id: req.body.id });
  const niv = info.niveau;

  await User.findOneAndUpdate({ _id: req.body.id }, { niveau: [...niv, 1] })
    .then(() => res.status(200).json("Niveau upgraded !"))
    .catch((error) => res.status(500).json(error));
};
