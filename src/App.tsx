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
import GardenValves from "./assets/Pages/AllProduct/GardenValves";
import AngleValves from "./assets/Pages/AllProduct/AngleValves";
import FrostFree from "./assets/Pages/AllProduct/FrostFree";
import VacuumBreaker from "./assets/Pages/AllProduct/VacuumBreaker";
import DMV from "./assets/Pages/AllProduct/DMV";
import Strainer from "./assets/Pages/AllProduct/Strainer";
import PopUpDrains from "./assets/Pages/AllProduct/PopUpDRains";
import PitlessAdapter from "./assets/Pages/AllProduct/PitlessAdapter";
import Faucets from "./assets/Pages/AllProduct/Faucets";
import Fittings from "./assets/Pages/AllProduct/Fittings";
import Pirul from "./assets/Pages/AllProduct/Pirul";
import FireHose from "./assets/Pages/AllProduct/FireHose";
import Manifold from "./assets/Pages/AllProduct/Manifold";
import WaterServiceFittings from "./assets/Pages/AllProduct/WaterServiceFittings";

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
            <Route path="/gardenvalves" Component={GardenValves} />
            <Route path="/anglevalves" Component={AngleValves} />
            <Route path="/frostfree" Component={FrostFree} />
            <Route path="/vacuumbreaker" Component={VacuumBreaker} />
            <Route path="/dmv" Component={DMV} />
            <Route path="/strainer" Component={Strainer} />
            <Route path="/popupdrains" Component={PopUpDrains} />
            <Route path="/pitlessadapter" Component={PitlessAdapter} />
            <Route path="/faucets" Component={Faucets} />
            <Route path="/fittings" Component={Fittings} />
            <Route path="/pirul" Component={Pirul} />
            <Route path="/firehose" Component={FireHose} />
            <Route path="/manifold" Component={Manifold} />
            <Route
              path="/waterservicefittings"
              Component={WaterServiceFittings}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
