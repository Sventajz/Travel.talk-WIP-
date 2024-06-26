const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      text: {
        type: String,
      },
      place: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   isAdmin: {
//     type: Bool,
//     required: true,
//   },
//   leave: [
//     {
//       startDate: {
//         default: Date.now,
//       },
//       EndDate: {
//         default: Date.now,
//       },
//       type: {
//         type: string,

//       },
//     },
//   ],
// });
