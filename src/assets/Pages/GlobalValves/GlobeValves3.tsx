import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GlobeValves3Image from "../../Images/globevalves3.jpg";

const GlobeValves3 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GLOBE VALVES WITH STUFFING BOX - GBB 2 - GBB 7 ---
        </h2>
        <img src={GlobeValves3Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GlobeValves3;
