import SetNickname from "./view/SetNickname";
import { useState } from "react";
import "./App.css";
import WaitingRoom from "./view/WaitingRoom";
import GameRoom from "./view/GameRoom";
import { useSelector } from "react-redux";

function App() {
  const tap = useSelector((state) => state.user.tap);
  return (
    <div className="App">
      {tap === "SetNickname" && <SetNickname />}
      {tap === "WaitingRoom" && <WaitingRoom />}
      {tap === "GameRoom" && <GameRoom />}
    </div>
  );
}

export default App;
