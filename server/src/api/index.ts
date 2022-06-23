import express from "express";
import v1Router from "./v1";
const router = express.Router();

router.use("/v1", v1Router);

router.use(function (err: any, req: any, res: any, next: any): void {
  const { status, message } = err;
  if (status < 400) next();
  res.status(status).send({ error: message });
});

export default router;
