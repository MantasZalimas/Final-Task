const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
    default: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zVy1JKrEn15kIO5ifS3PG15aC8D5A586nd-rbiY&s",
    ],
  },
  likesGot: {
    type: Array,
    required: true,
  },
  likesGiven: {
    type: Array,
    required: true,
  },
  filterCity: {
    type: String,
    required: true,
    default: "Vilnius",
  },
  filterGender: {
    type: String,
    required: true,
    default: "male",
  },
  filterAgeMax: {
    type: Number,
    required: true,
    default: 50,
  },
});

module.exports = {
  userSchema: mongoose.model("user", userSchema),
};
