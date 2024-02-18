const Student = require("../models/student.model");

const getAllStudents = async () => {
  try {
    const allStudents = await Student.find();
    console.log("All students:", allStudents);
    return allStudents;
  } catch (error) {
    console.error("Error fetching all students:", error.message);
    throw new Error("Error while fetching all students");
  }
};

const addStudent = async (student) => {
  try {
    const newStudent = new Student(student);
    const addedStudent = await newStudent.save();

    if (addedStudent) {
      console.log("New student added:", addedStudent);
      return addedStudent;
    } else {
      console.error(`Error: Couldn't add new student`);
      throw new Error(`Error while adding new student`);
    }
  } catch (error) {
    console.error("Error adding new student:", error.message);
    throw new Error("Error while adding new student");
  }
};

const editStudent = async (studentId, student) => {
  try {
    const editedStudent = await Student.findByIdAndUpdate(studentId, student, {
      new: true,
    });

    if (editedStudent) {
      console.log("Updated student:", editedStudent);
      return editedStudent;
    } else {
      console.error(`Error: Couldn't update student`);
      throw new Error(`Error while updating student`);
    }
  } catch (error) {
    console.error("Error updating student:", error.message);
    throw new Error("Error while updating student");
  }
};

const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (deletedStudent) {
      console.log("Student deleted successfully:", deletedStudent);
      return deletedStudent;
    } else {
      console.error("Error: Student not found");
      throw new Error("Student not found");
    }
  } catch (error) {
    console.error("Error deleting student:", error.message);
    throw new Error("Error while deleting student");
  }
};

const getStudent = async (studentName) => {
  try {
    const searchedStudent = await Student.findOne({ name: studentName });

    if (searchedStudent) {
      console.log("Student fetched successfully:", searchedStudent);
      return searchedStudent;
    } else {
      console.error("Error: Student not found");
      throw new Error("Student not found");
    }
  } catch (error) {
    console.error("Error fetching student:", error.message);
    throw new Error("Error while fetching student");
  }
};

module.exports = {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
  getStudent,
};
