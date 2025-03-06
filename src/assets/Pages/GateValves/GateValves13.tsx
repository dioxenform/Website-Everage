import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves13Image from "../../Images/gatevalves13.jpg";

const GateValves13 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE VALVES WTH FLANGE - GVF 2 - GVF 10 ---
        </h2>
        <img src={GateVaves13Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves13;
