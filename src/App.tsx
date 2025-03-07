import Dashboard from "./assets/Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import StrukturOrganisasi from "./assets/Pages/Profile/StrukturOrganisasi";
import VisiMisi from "./assets/Pages/Profile/VisiMisi";
import Sejarah from "./assets/Pages/Profile/Sejarah";
import GateValves1 from "./assets/Pages/GateValves/GateValves1";
import GateValves2 from "./assets/Pages/GateValves/GateValves2";
import GateValves3 from "./assets/Pages/GateValves/GateValves3";
import GateValves4 from "./assets/Pages/GateValves/GateValves4";
import GateValves5 from "./assets/Pages/GateValves/GateValves5";
import GateValves6 from "./assets/Pages/GateValves/GateValves6";
import GateValves7 from "./assets/Pages/GateValves/GateValves7";
import GateValves8 from "./assets/Pages/GateValves/GateValves8";
import GateValves9 from "./assets/Pages/GateValves/GateValves9";
import GateValves10 from "./assets/Pages/GateValves/GateValves10";
import GateValves11 from "./assets/Pages/GateValves/GateValves11";
import GateValves12 from "./assets/Pages/GateValves/GateValves12";
import GateValves13 from "./assets/Pages/GateValves/GateValves13";
import GlobeValves1 from "./assets/Pages/GlobalValves/GlobeValves1";
import GlobeValves2 from "./assets/Pages/GlobalValves/GlobeValves2";
import GlobeValves3 from "./assets/Pages/GlobalValves/GlobeValves3";
import GlobeValves4 from "./assets/Pages/GlobalValves/GlobeValves4";

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
            <Route path="/gatevalves1" Component={GateValves1} />
            <Route path="/gatevalves2" Component={GateValves2} />
            <Route path="/gatevalves3" Component={GateValves3} />
            <Route path="/gatevalves4" Component={GateValves4} />
            <Route path="/gatevalves5" Component={GateValves5} />
            <Route path="/gatevalves6" Component={GateValves6} />
            <Route path="/gatevalves7" Component={GateValves7} />
            <Route path="/gatevalves8" Component={GateValves8} />
            <Route path="/gatevalves9" Component={GateValves9} />
            <Route path="/gatevalves10" Component={GateValves10} />
            <Route path="/gatevalves11" Component={GateValves11} />
            <Route path="/gatevalves12" Component={GateValves12} />
            <Route path="/gatevalves13" Component={GateValves13} />
            <Route path="/globevalves1" Component={GlobeValves1} />
            <Route path="/globevalves2" Component={GlobeValves2} />
            <Route path="/globevalves3" Component={GlobeValves3} />
            <Route path="/globevalves4" Component={GlobeValves4} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
