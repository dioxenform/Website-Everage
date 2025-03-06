import Dashboard from "./assets/Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import StrukturOrganisasi from "./assets/Pages/Profile/StrukturOrganisasi";
import VisiMisi from "./assets/Pages/Profile/VisiMisi";
import Sejarah from "./assets/Pages/Profile/Sejarah";

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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
