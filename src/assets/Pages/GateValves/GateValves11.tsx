import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves11Image from "../../Images/gatevalves11.jpg";

const GateValves11 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES WITH STUFFING BOX - GVB 1 - GVB 7 ---
        </h2>
        <img src={GateVaves11Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves11;
