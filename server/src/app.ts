import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./constant";
import http from "http";
import apiRouter from "./api";

const app = express();
const server = http.createServer(app);
app.set("port", PORT);
app.use("/api", apiRouter);

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

server.listen("5000", () => {
  console.log(`5000번 포트에 접속하셨습니다.`);
});
