import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves10Image from "../../Images/gatevalves10.jpg";

const GateValves10 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES QUICK OPENING - GVQ 2 - GVQ 10 ---
        </h2>
        <img src={GateVaves10Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves10;
