import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves7Image from "../../Images/gatevalves7.jpg";

const GateValves7 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES HEAVY DUTY - GVH 2 - GVH 9 ---
        </h2>
        <img src={GateVaves7Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves7;
