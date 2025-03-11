import Dashboard from "./assets/Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import StrukturOrganisasi from "./assets/Pages/Profile/StrukturOrganisasi";
import VisiMisi from "./assets/Pages/Profile/VisiMisi";
import Sejarah from "./assets/Pages/Profile/Sejarah";
import AllProduct from "./assets/Pages/AllProduct";
import GateValves from "./assets/Pages/AllProduct/GateValves";
import GlobeValves from "./assets/Pages/AllProduct/GlobeValves";
import CheckValves from "./assets/Pages/AllProduct/CheckValves";
import BallValves from "./assets/Pages/AllProduct/BallValves";
import LogValves from "./assets/Pages/AllProduct/LogValves";
import AngleMeter from "./assets/Pages/AllProduct/AngleMeter";
import RadiatorValves from "./assets/Pages/AllProduct/RadiatorValves";
import StopWasteValves from "./assets/Pages/AllProduct/StopWasteValves";
import StopWasteValvesWithRing from "./assets/Pages/AllProduct/StopWasteValvesWithRing";
import BoilerDrains from "./assets/Pages/AllProduct/BoilerDrains";
import WaterHeater from "./assets/Pages/AllProduct/WaterHeater";
import SillcockValves from "./assets/Pages/AllProduct/SillcockValves";
import HouseBibb from "./assets/Pages/AllProduct/HouseBibb";
import QuarterTurn from "./assets/Pages/AllProduct/QuarterTurn";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route path="/" Component={Dashboard} />
            <Route path="/strukturorganisasi" Component={StrukturOrganisasi} />
            <Route path="/sejarah" Component={Sejarah} />
            <Route path="/visimisi" Component={VisiMisi} />
            <Route path="/allproduct" Component={AllProduct} />
            <Route path="/gatevalves" Component={GateValves} />
            <Route path="/globevalves" Component={GlobeValves} />
            <Route path="/checkvalves" Component={CheckValves} />
            <Route path="/ballvalves" Component={BallValves} />
            <Route path="/logvalves" Component={LogValves} />
            <Route path="/anglemeter" Component={AngleMeter} />
            <Route path="/radiatorvalves" Component={RadiatorValves} />
            <Route path="/stopwastevalves" Component={StopWasteValves} />
            <Route
              path="/stopwastevalveswithring"
              Component={StopWasteValvesWithRing}
            />
            <Route path="/boilerdrains" Component={BoilerDrains} />
            <Route path="/waterheater" Component={WaterHeater} />
            <Route path="/sillcockvalves" Component={SillcockValves} />
            <Route path="/housebibb" Component={HouseBibb} />
            <Route path="/quarterturn" Component={QuarterTurn} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
