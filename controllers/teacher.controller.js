const Teacher = require("../models/teacher.model");

const addTeacher = async (teacherData) => {
  try {
    const newTeacher = new Teacher(teacherData);
    const savedTeacher = await newTeacher.save();

    if (savedTeacher) {
      return savedTeacher;
    } else {
      throw new Error("Error while saving new Teacher");
    }
  } catch (error) {
    console.error("Error in addTeacher:", error.message);
    throw new Error("Error while adding new Teacher");
  }
};

const getTeachers = async () => {
  try {
    const teacherList = await Teacher.find();
    if (teacherList.length !== 0) {
      return teacherList;
    } else {
      console.error("Error: Could not fetch teacher list");
      throw new Error("Error while fetching teacher list");
    }
  } catch (error) {
    console.error("Error while fetching teachers:", error.message);
    throw new Error("Error while fetching teachers");
  }
};

const editTeacher = async (teacherId, updatedData) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      updatedData,
      { new: true },
    );
    if (updatedTeacher) {
      console.log("Teacher updated successfully:", updatedTeacher);
      return updatedTeacher;
    } else {
      console.error("Error: Teacher not found");
      throw new Error("Teacher not found");
    }
  } catch (error) {
    console.error("Error while editing teacher:", error.message);
    throw new Error("Error while editing teacher");
  }
};

const deleteTeacher = async (teacherId) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

    if (deletedTeacher) {
      console.log("Teacher deleted successfully:", deletedTeacher);
      return deletedTeacher;
    } else {
      console.error("Error: Teacher not found");
      throw new Error("Teacher not found");
    }
  } catch (error) {
    console.error("Error while deleting teacher:", error.message);
    throw new Error("Error while deleting teacher");
  }
};

module.exports = {
  addTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher,
};
