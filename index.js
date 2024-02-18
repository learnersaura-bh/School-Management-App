const { initialiseDatabase } = require("./db/db.connection");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const studentRouter = require("./routes/student.route");
const teacherRouter = require("./routes/teacher.route");

initialiseDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Management API");
});

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.use("/", (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
