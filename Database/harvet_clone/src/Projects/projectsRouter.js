const express = require("express");
const projectsModel = require("./projectsModel");

const app = express.Router();

app.get("/projects", async (req, res) => {
  let {
    page = 1,
    limit = 5,
    sortBy = "id",
    order = "asc",
    project_name,
  } = req.query;

  if (project_name) {
    task = await projectsModel
      .find({ project_name })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 });
  } else {
    task = await projectsModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 });
  }
  let count = await projectsModel.find().count();
  res.send({ data: task, totalPages: Math.ceil(count / limit) });
});
// app.get("/projects", async (req, res) => {
//   let {
//     page = 1,
//     limit = 5,
//     sortBy = "client_name",
//     order = "asc",
//     client_name,
//   } = req.query;

//   if (client_name) {
//     task = await projectsModel
//       .find({ client_name })
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .sort({ [sortBy]: order === "asc" ? 1 : -1 });
//   } else {
//     task = await projectsModel
//       .find()
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .sort({ [sortBy]: order === "asc" ? 1 : -1 });
//   }
//   let count = await projectsModel.find().count();
//   res.send({ data: task, totalPages: Math.ceil(count / limit) });
// });

app.post("/projects", async (req, res) => {
  let { project_name, project_code } = await req.body;
  try {
    let task = await projectsModel.findOne({ project_name });

    if (task) {
      res.status(401).send("Task aready exists");
    } else {
      let newTask = await projectsModel.create({
        ...req.body,
        id: `${Date.now()}:${project_name}:${
          Math.random() * 999999
        }${project_code}${Math.random()}`,
      });
      res.send(newTask);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/projects/:id", async (req, res) => {
  let { id } = req.params;
  let projectUpdateOne = await projectsModel.updateOne(
    { id },
    { $set: req.body }
  );
  res.send(projectUpdateOne);
});

app.delete("/projects/:id", async (req, res) => {
  let { id } = req.params;
  let projectDelete = await projectsModel.deleteOne({ id });
  res.send(projectDelete);
});

app.delete("/projects", async (req, res) => {
  let AllProjectDelete = await projectsModel.remove({});
  res.send(AllProjectDelete);
});

module.exports = app;
