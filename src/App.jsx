import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Calculator from "./Projects/calculator";
import RandomNumberGenerator from "./Projects/Random-Number-genrator";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/random-number-generator" element={<RandomNumberGenerator/>}/>
      </Routes>
    </>
  );
}

export default App;
