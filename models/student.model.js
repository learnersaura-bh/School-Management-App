const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      enum: ["A", "B", "C", "D", "F"],
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "Male",
    },
    attendance: {
      type: Number,
      default: 0,
    },
    marks: {
      type: Number,
      default: 0,
    },
    class: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
