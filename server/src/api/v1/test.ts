import express from "express";
import { rooms } from "@src/loader/socket";
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("api 요청 테스트");
});

router.get("/rooms/:roomCode", function (req, res, next) {
  // 파라미터에서 roomCode를 빼옴
  const roomCode = req.params.roomCode;
  console.log(rooms[roomCode]);
  return res.status(200).json(rooms[roomCode]);
});

router.get("/error", function (req, res, next) {
  next({ message: "hi", status: 404 });
});

export default router;
