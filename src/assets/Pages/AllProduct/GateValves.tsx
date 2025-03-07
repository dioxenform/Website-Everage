import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import GateValves1Image from "../../Images/gatevalves1.jpg";
import GateValves2Image from "../../Images/gatevalves2.jpg";
import GateValves3Image from "../../Images/gatevalves3.jpg";
import GateValves4Image from "../../Images/gatevalves4.jpg";
import GateValves5Image from "../../Images/gatevalves5.jpg";
import GateValves6Image from "../../Images/gatevalves6.jpg";
import GateValves7Image from "../../Images/gatevalves7.jpg";
import GateValves8Image from "../../Images/gatevalves8.jpg";
import GateValves9Image from "../../Images/gatevalves9.jpg";
import GateValves10Image from "../../Images/gatevalves10.jpg";
import GateValves11Image from "../../Images/gatevalves11.jpg";
import GateValves12Image from "../../Images/gatevalves12.jpg";
import GateValves13Image from "../../Images/gatevalves13.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: GateValves1Image,
    title: ' 1 # GATE VALVES THREADED - GV 0 - GV 10" ',
    description: "  ",
  },
  {
    image: GateValves2Image,
    title: " 2 # GATE VALVE SOLDER - GV 11 - GV 20 ",
    description: "  ",
  },
  {
    image: GateValves3Image,
    title: " 3 # GATE & WASTE VALVES - GVD 2 - GVD 4 ",
    description: "  ",
  },
  {
    image: GateValves4Image,
    title: " 4 # GATE & WATE VALVE - GVD 12 - GVD 14 ",
    description: "  ",
  },
  {
    image: GateValves5Image,
    title: " 5 # GATE COMPRESSION VALVES - GVC 2 - GVC 4 ",
    description: "  ",
  },
  {
    image: GateValves6Image,
    title:
      " 6 # GATE COMPRESSION VALVES WITH PIPE CPVC - GVC 2 CPVC - GVC 3 CPVC ",
    description: "  ",
  },
  {
    image: GateValves7Image,
    title: " 7 # GATE VALVES HEAVY DUTY - GVH 2 - GVH 9 ",
    description: "  ",
  },
  {
    image: GateValves8Image,
    title: " 8 # GATE VALVES WITH LONG BONNET THREADED - GVL 2 - GVL 7 ",
    description: "  ",
  },
  {
    image: GateValves9Image,
    title: " 9 # GATE VALVES SOLDER WITH LONG BONNET - GVL 12 - GVL 17 ",
    description: "  ",
  },
  {
    image: GateValves10Image,
    title: " 10 # GATE VALVES QUICK OPENING - GVQ 2 - GVQ 10 ",
    description: "  ",
  },
  {
    image: GateValves11Image,
    title: " 11 # GATE VALVES WITH STUFFING BOX - GVB 1 - GVB 7 ",
    description: "  ",
  },
  {
    image: GateValves12Image,
    title: " 12 # GATE VALVES SODER WITH STUFFING BOX - GVB 12 - GVB 17 ",
    description: "  ",
  },
  {
    image: GateValves13Image,
    title: " 13 # GATE VALVES WTH FLANGE - GVF 2 - GVF 10 ",
    description: "  ",
  },
];

const GateValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST GATE VALVES</h2>
        <div className="flex-grow flex justify-center items-center mt-6 pb-20">
          <div className="carousel carousel-center max-w-[500px] -pb-30  ">
            {Products.map((Product, index) => (
              <div key={index} className="carousel-item ">
                <MainCard
                  image={Product.image}
                  title={Product.title}
                  description={Product.description}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GateValves;
