import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves4Image from "../../Images/gatevalves4.jpg";

const GateValves4 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE & WATE VALVE - GVD 12 - GVD 14 ---
        </h2>
        <img src={GateVaves4Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves4;
