import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GateVaves12Image from "../../Images/gatevalves12.jpg";

const GateValves12 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- ATE VALVES SODER WITH STUFFING BOX - GVB 12 - GVB 17 ---
        </h2>
        <img src={GateVaves12Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GateValves12;
