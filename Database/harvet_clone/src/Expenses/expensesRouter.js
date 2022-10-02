const express = require("express");
const { collection } = require("./expensesModel");
const expensesModel = require("./expensesModel");

const app = express.Router();

app.get("/expenses", async (req, res) => {
  let {
    page = 1,
    limit = 5,
    sortBy = "id",
    order = "asc",
    project_name,
  } = req.query;

  if (project_name) {
    expense = await expensesModel
      .find({ project_name })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 });
  } else {
    expense = await expensesModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 });
  }
  let count = await expensesModel.find().count();
  res.send({ data: expense, totalPages: Math.ceil(count / limit) });
});

app.get("/expenses/:id", async (req, res) => {
  let { id } = req.params;
  let expenseOne = await expensesModel.findOne({ id });
  if (!expenseOne) {
    res.status(404).send(`Wrong id-${id}`);
  }
  res.send(expenseOne);
});

app.post("/expenses", async (req, res) => {
  let {
    id,
    project_name,
    category,
    notes,
    date,
    amount,
    attachReceipt,
    projects_name,
  } = req.body;
  try {
    let newExpense = await expensesModel.create({
      ...req.body,
      id: `${Date.now()}:${project_name}:${
        Math.random() * 999999
      }:${Math.random()}`,
    });
    res.send(newExpense);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/expenses/:id", async (req, res) => {
  let { id } = req.params;
  let expenseUpdateOne = await expensesModel.updateOne(
    { id },
    { $set: req.body }
  );
  res.send(expenseUpdateOne);
});

app.delete("/expenses/:id", async (req, res) => {
  let { id } = req.params;
  let expenseDelete = await expensesModel.deleteOne({ id });
  res.send(expenseDelete);
});

app.delete("/expenses", async (req, res) => {
  let AllExpenseDelete = await expensesModel.remove({});
  res.send(AllExpenseDelete);
});

module.exports = app;
