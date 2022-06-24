import express from "express";
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("api 요청 테스트");
});

router.get("/error", function (req, res, next) {
  next({ message: "hi", status: 404 });
});

export default router;
