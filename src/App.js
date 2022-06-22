import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hack1 from "./Pages/Hack1";
import Footer from "./Components/Footer";
import Hack2 from "./Pages/Hack2";
import Hack3 from "./Pages/Hack3";

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="hack1" element={<Hack1 />} />
        <Route path="hack2" element={<Hack2 />} />
        <Route path="hack3" element={<Hack3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
