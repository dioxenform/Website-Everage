import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves1Image from "../../Images/gatevalves1.jpg";

const GateValves1 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES THREADED - GV 0 - GV 10 ---
        </h2>
        <img src={GateVaves1Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves1;
