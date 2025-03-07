import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GlobeValves1Image from "../../Images/globevalves1.jpg";

const GlobeValves1 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GLOBE VALVES WITH HARD SEAT - GB 0 - GB 7 ---
        </h2>
        <img src={GlobeValves1Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GlobeValves1;
