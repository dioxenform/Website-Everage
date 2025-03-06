import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves8Image from "../../Images/gatevalves8.jpg";

const GateValves8 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES WITH LONG BONNET THREADED - GVL 2 - GVL 7 ---
        </h2>
        <img src={GateVaves8Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves8;
