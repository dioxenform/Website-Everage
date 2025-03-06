import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves9Image from "../../Images/gatevalves9.jpg";

const GateValves9 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES SOLDER WITH LONG BONNET - GVL 12 - GVL 17 ---
        </h2>
        <img src={GateVaves9Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves9;
