const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
