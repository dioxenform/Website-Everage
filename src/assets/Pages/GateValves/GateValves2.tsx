import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves2Image from "../../Images/gatevalves2.jpg";

const GateValves2 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVE SOLDER - GV 11 - GV 20 ---
        </h2>
        <img src={GateVaves2Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves2;
