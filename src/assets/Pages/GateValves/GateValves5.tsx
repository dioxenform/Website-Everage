import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves5Image from "../../Images/gatevalves5.jpg";

const GateValves5 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE COMPRESSION VALVES - GVC 2 - GVC 4 ---
        </h2>
        <img src={GateVaves5Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves5;
