import express from "express";

const app = express();
const port = 8080;

app.get("/data", (req, res) => {
  const data = { message: "Привет от сервера!" };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
