import "./App.scss";
import { Routes, Route,} from "react-router-dom";

import Header from "./components/Header/Header";

import Work from "./components/Work/Work";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
