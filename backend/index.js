import express from "express";
import logger from "morgan";
import cors from "cors";

const app = express();

// app.set();
app.use(logger("dev")); // мидлвап, который выводит все логи в консоль
app.use(cors()); // обходит политику безопасности браузера
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- запросы на сервер ---
// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

// ===>  http://localhost:3001/names

app.get("/", (req, res) => {
  console.log("ROOT");
  res.send("OKAY");
});

// http://localhost:3001 -- наш хост
app.listen(3001, () => {
  console.log("servak start");
});
