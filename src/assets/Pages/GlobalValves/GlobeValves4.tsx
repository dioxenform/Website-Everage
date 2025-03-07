import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GlobeValves4Image from "../../Images/globevalves4.jpg";

const GlobeValves4 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          --- GLOBE VALVES WITH FLANGE - GBF 2 - GBF 10 ---
        </h2>
        <img src={GlobeValves4Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GlobeValves4;
