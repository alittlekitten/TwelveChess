import SetNickname from "./view/SetNickname";
import { useState } from "react";
import "./App.css";
import WaitingRoom from "./view/WaitingRoom";
import GameRoom from "./view/GameRoom";

function App() {
  const [tap, setTap] = useState("SetNickname");
  return (
    <div className="App">
    </div>
  );
}

export default App;
