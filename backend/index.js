import express from "express";
import logger from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();
dotenv.config();

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

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

// ===>  http://localhost:3001/

const runPrompt = async () => {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  });
};

app.get("/", (req, res) => {
  console.log("ROOT");
  res.send("OKAY");
});

app.get("/test", (req, res) => {
  runPrompt()
    .then((r) => {
      console.log(r.data, "test data");
      res.send(r.data);
    })
    .catch((e) => res.send(e));

  console.log("TEST");
});

// http://localhost:3001 -- наш хост
app.listen(3001, () => {
  console.log("servak start");
});
