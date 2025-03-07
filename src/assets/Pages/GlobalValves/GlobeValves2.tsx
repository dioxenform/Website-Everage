import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GlobeValves2Image from "../../Images/globevalves2.jpg";

const GlobeValves2 = () => {
  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen pl-20 pt-20 font-roboto text-gray-600 text-center">
        <h2 className="text-5xl tracking-wide">
          {" "}
          --- 15 # GLOBE VALVES WITH SOFT SEAT (RUBBER, TEFLON) - GBR, GBT 0 - 7
          ---
        </h2>
        <img src={GlobeValves2Image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default GlobeValves2;
