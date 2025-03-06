import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves6Image from "../../Images/gatevalves6.jpg";

const GateValves6 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE COMPRESSION VALVES WITH PIPE CPVC - GVC 2 CPVC - GVC 3 CPVC
          ---
        </h2>
        <img src={GateVaves6Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves6;
