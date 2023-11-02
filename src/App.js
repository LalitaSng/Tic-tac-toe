import "./styles.css";
import WelcomePage from "./Page/WelcomePage";
import GamePage from "./GamePage";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path='game-page' element={<GamePage/>}/>
      </Routes>
    </div>
  );
}
