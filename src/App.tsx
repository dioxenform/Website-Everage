import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./assets/Components/LoadingPage";

// Lazy load semua komponen halaman
const Dashboard = lazy(() => import("./assets/Pages/Dashboard"));
const StrukturOrganisasi = lazy(
  () => import("./assets/Pages/Profile/StrukturOrganisasi")
);
const VisiMisi = lazy(() => import("./assets/Pages/Profile/VisiMisi"));
const Sejarah = lazy(() => import("./assets/Pages/Profile/Sejarah"));
const AllProduct = lazy(() => import("./assets/Pages/AllProduct"));
const GateValves = lazy(() => import("./assets/Pages/AllProduct/GateValves"));
const GlobeValves = lazy(() => import("./assets/Pages/AllProduct/GlobeValves"));
const CheckValves = lazy(() => import("./assets/Pages/AllProduct/CheckValves"));
const BallValves = lazy(() => import("./assets/Pages/AllProduct/BallValves"));
const LogValves = lazy(() => import("./assets/Pages/AllProduct/LogValves"));
const AngleMeter = lazy(() => import("./assets/Pages/AllProduct/AngleMeter"));
const RadiatorValves = lazy(
  () => import("./assets/Pages/AllProduct/RadiatorValves")
);
const StopWasteValves = lazy(
  () => import("./assets/Pages/AllProduct/StopWasteValves")
);
const StopWasteValvesWithRing = lazy(
  () => import("./assets/Pages/AllProduct/StopWasteValvesWithRing")
);
const BoilerDrains = lazy(
  () => import("./assets/Pages/AllProduct/BoilerDrains")
);
const WaterHeater = lazy(() => import("./assets/Pages/AllProduct/WaterHeater"));
const SillcockValves = lazy(
  () => import("./assets/Pages/AllProduct/SillcockValves")
);
const HouseBibb = lazy(() => import("./assets/Pages/AllProduct/HouseBibb"));
const QuarterTurn = lazy(() => import("./assets/Pages/AllProduct/QuarterTurn"));
const GardenValves = lazy(
  () => import("./assets/Pages/AllProduct/GardenValves")
);
const AngleValves = lazy(() => import("./assets/Pages/AllProduct/AngleValves"));
const FrostFree = lazy(() => import("./assets/Pages/AllProduct/FrostFree"));
const VacuumBreaker = lazy(
  () => import("./assets/Pages/AllProduct/VacuumBreaker")
);
const DMV = lazy(() => import("./assets/Pages/AllProduct/DMV"));
const Strainer = lazy(() => import("./assets/Pages/AllProduct/Strainer"));
const PopUpDrains = lazy(() => import("./assets/Pages/AllProduct/PopUpDRains"));
const PitlessAdapter = lazy(
  () => import("./assets/Pages/AllProduct/PitlessAdapter")
);
const Faucets = lazy(() => import("./assets/Pages/AllProduct/Faucets"));
const Fittings = lazy(() => import("./assets/Pages/AllProduct/Fittings"));
const Pirul = lazy(() => import("./assets/Pages/AllProduct/Pirul"));
const FireHose = lazy(() => import("./assets/Pages/AllProduct/FireHose"));
const Manifold = lazy(() => import("./assets/Pages/AllProduct/Manifold"));
const WaterServiceFittings = lazy(
  () => import("./assets/Pages/AllProduct/WaterServiceFittings")
);
const TeesCoupling = lazy(
  () => import("./assets/Pages/AllProduct/TeesCoupling")
);
const EllCouplings = lazy(
  () => import("./assets/Pages/AllProduct/EllCouplings")
);
const PackJoinGrip = lazy(
  () => import("./assets/Pages/AllProduct/PackJoinGrip")
);
const StiffenerFlange = lazy(
  () => import("./assets/Pages/AllProduct/StiffenerFlange")
);
const OilTankValves = lazy(
  () => import("./assets/Pages/AllProduct/OilTankValves")
);
const Miscellaneous = lazy(
  () => import("./assets/Pages/AllProduct/Miscellaneous")
);
const WaterHammer = lazy(() => import("./assets/Pages/AllProduct/WaterHammer"));
const PressFittings = lazy(
  () => import("./assets/Pages/AllProduct/PressFittings")
);
const ReliefValve = lazy(() => import("./assets/Pages/AllProduct/ReliefValve"));
const Accessories = lazy(() => import("./assets/Pages/AllProduct/Accessories"));
const Gallery = lazy(() => import("./assets/Pages/MediaInformasi/Gallery"));
const VideoMenu = lazy(() => import("./assets/Pages/MediaInformasi/VideoMenu"));
const AgendaMenu = lazy(
  () => import("./assets/Pages/MediaInformasi/AgendaMenu")
);
const CobaFocusCard = lazy(() => import("./assets/Pages/CobaFocusCard"));
const Contact = lazy(() => import("./assets/Pages/ContactUs/Contact"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/strukturorganisasi"
              element={<StrukturOrganisasi />}
            />
            <Route path="/sejarah" element={<Sejarah />} />
            <Route path="/visimisi" element={<VisiMisi />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/gatevalves" element={<GateValves />} />
            <Route path="/globevalves" element={<GlobeValves />} />
            <Route path="/checkvalves" element={<CheckValves />} />
            <Route path="/ballvalves" element={<BallValves />} />
            <Route path="/logvalves" element={<LogValves />} />
            <Route path="/anglemeter" element={<AngleMeter />} />
            <Route path="/radiatorvalves" element={<RadiatorValves />} />
            <Route path="/stopwastevalves" element={<StopWasteValves />} />
            <Route
              path="/stopwastevalveswithring"
              element={<StopWasteValvesWithRing />}
            />
            <Route path="/boilerdrains" element={<BoilerDrains />} />
            <Route path="/waterheater" element={<WaterHeater />} />
            <Route path="/sillcockvalves" element={<SillcockValves />} />
            <Route path="/housebibb" element={<HouseBibb />} />
            <Route path="/quarterturn" element={<QuarterTurn />} />
            <Route path="/gardenvalves" element={<GardenValves />} />
            <Route path="/anglevalves" element={<AngleValves />} />
            <Route path="/frostfree" element={<FrostFree />} />
            <Route path="/vacuumbreaker" element={<VacuumBreaker />} />
            <Route path="/dmv" element={<DMV />} />
            <Route path="/strainer" element={<Strainer />} />
            <Route path="/popupdrains" element={<PopUpDrains />} />
            <Route path="/pitlessadapter" element={<PitlessAdapter />} />
            <Route path="/faucets" element={<Faucets />} />
            <Route path="/fittings" element={<Fittings />} />
            <Route path="/pirul" element={<Pirul />} />
            <Route path="/firehose" element={<FireHose />} />
            <Route path="/manifold" element={<Manifold />} />
            <Route
              path="/waterservicefittings"
              element={<WaterServiceFittings />}
            />
            <Route path="/teescoupling" element={<TeesCoupling />} />
            <Route path="/ellcouplings" element={<EllCouplings />} />
            <Route path="/packjointgripcouplings" element={<PackJoinGrip />} />
            <Route path="/stiffenerflange" element={<StiffenerFlange />} />
            <Route path="/oiltankvalves" element={<OilTankValves />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path="/waterhammer" element={<WaterHammer />} />
            <Route path="/pressfittings" element={<PressFittings />} />
            <Route path="/reliefvalve" element={<ReliefValve />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videomenu" element={<VideoMenu />} />
            <Route path="/agendamenu" element={<AgendaMenu />} />
            <Route path="/cobafocuscard" element={<CobaFocusCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
