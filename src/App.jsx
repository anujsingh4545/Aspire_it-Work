import {Route, Routes} from "react-router-dom";
import HeaderNav from "./Commom/HeaderNav";
import {Toaster} from "react-hot-toast";
import SimulationPage from "./Pages/SimulationPage";
import VisualisationPage from "./Pages/VisualisationPage";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* Default navbar for all routes */}
      <HeaderNav />

      {/* For all notfication based work */}
      <Toaster />

      {/* All routes defined here */}

      <div className=" mt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/visualisation" element={<VisualisationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
