import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves3Image from "../../Images/gatevalves3.jpg";

const GateValves3 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GATE & WASTE VALVES - GVD 2 - GVD 4 ---
        </h2>
        <img src={GateVaves3Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves3;
