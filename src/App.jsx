import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Calculator from "./Projects/calculator";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
    </>
  );
}

export default App;
