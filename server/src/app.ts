import express, { Request, Response, NextFunction } from "express";
import { PORT } from "@src/constant";
import http from "http";
import apiRouter from "@src/api";
import Loader from "@src/loader";

const app = express();
const server = http.createServer(app);

Loader({ server });

app.set("port", PORT);
app.use("/api", apiRouter);

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

server.listen(PORT, () => {
  console.log(`5000번 포트에 접속하셨습니다.`);
});
