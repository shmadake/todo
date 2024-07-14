import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import env from "dotenv";

env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

db.connect();

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/:email", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM tasklist WHERE email=$1 ORDER BY id",
      [req.params.email]
    );
    //console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    //console.log(req.body.inputTask);
    await db.query("INSERT INTO tasklist (task,email) VALUES ($1,$2)", [
      req.body.inputTask,
      req.body.email,
    ]);
  } catch (error) {
    console.error(error.message);
  }
  res.redirect("/");
});

app.put("/edit/:id", async (req, res) => {
  //console.log(req.body);
  //console.log(req.params.id);
  try {
    await db.query("UPDATE tasklist SET task=$1 WHERE id=$2", [
      req.body.inputTask,
      req.params.id,
    ]);
  } catch (error) {
    console.error(error);
  }
  res.redirect("/");
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM tasklist WHERE id=$1", [req.params.id]);
    //console.log(req.params.id);
  } catch (error) {
    console.error(error);
  }
  res.redirect("/");
});

app.listen(port);
