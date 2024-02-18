const express = require('express');
const {
  addTeacher,
  getTeachers,
  editTeacher,
  deleteTeacher,
} = require('../controllers/teacher.controller');

const teacherRouter = express.Router();

teacherRouter.post('/', async (req, res) => {
  try {
    const newTeacher = await addTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json(error);
  }
});

teacherRouter.get('/', async (req, res) => {
  try {
    const teachers = await getTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json(error);
  }
});

teacherRouter.put('/:teacherId', async (req, res) => {
  try {
    const updatedTeacher = await editTeacher(req.params.teacherId, req.body);
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json(error);
  }
});

teacherRouter.delete('/:teacherId', async (req, res) => {
  try {
    const deletedTeacher = await deleteTeacher(req.params.teacherId);
    res.status(200).json(deletedTeacher);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = teacherRouter;
