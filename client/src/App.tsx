import SetNickname from '@pages/SetNickname';
import './App.css';
import WaitingRoom from '@pages/WaitingRoom';
import GameRoom from '@pages/GameRoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SetNickname />}></Route>
          <Route path="/waiting" element={<WaitingRoom />}></Route>
          <Route path="/game/:url" element={<GameRoom />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
