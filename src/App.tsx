import Dashboard from "./assets/Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import StrukturOrganisasi from "./assets/Pages/Profile/StrukturOrganisasi";
import VisiMisi from "./assets/Pages/Profile/VisiMisi";
import Sejarah from "./assets/Pages/Profile/Sejarah";
import AllProduct from "./assets/Pages/AllProduct";
import GateValves from "./assets/Pages/AllProduct/GateValves";
import GlobeValves from "./assets/Pages/AllProduct/GlobeValves";

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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
