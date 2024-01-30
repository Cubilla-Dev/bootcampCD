import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home"
import AddPirates from "./components/AddPirates/AddPirates";
import ViewPirate from "./components/pirates/ViewPirate";
import ContaiPirates from "./components/pirates/ContaiPirates";

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/pirate/new" element={<AddPirates/>} />
        <Route path="/pirates" element={<ContaiPirates/>} />
        <Route path="/pirate/:id" element={<ViewPirate />} />
    </Routes>
  );
}

export default App;
