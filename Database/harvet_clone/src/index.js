const express = require("express");
const usersRouter = require("./Users/usersRouter");
const expensesRouter = require("./Expenses/expensesRouter");
const projectsRouter = require("./Projects/projectsRouter");
const dbConnect = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/expenses", expensesRouter);
app.use("/projects", projectsRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server start at port - http://localhost:${PORT}`);
});
