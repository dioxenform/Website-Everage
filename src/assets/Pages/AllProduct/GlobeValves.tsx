import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import GlobeValves1Image from "../../Images/globevalves1.jpg";
import GlobeValves2Image from "../../Images/globevalves2.jpg";
import GlobeValves3Image from "../../Images/globevalves3.jpg";
import GlobeValves4Image from "../../Images/globevalves4.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: GlobeValves1Image,
    title: " 14 # GLOBE VALVES WITH HARD SEAT - GB 0 - GB 7 ",
    description: "  ",
  },
  {
    image: GlobeValves2Image,
    title:
      " 15 # GLOBE VALVES WITH SOFT SEAT (RUBBER, TEFLON) - GBR, GBT 0 - 7 ",
    description: "  ",
  },
  {
    image: GlobeValves3Image,
    title: " 16 # GLOBE VALVES WITH STUFFING BOX - GBB 2 - GBB 7 ",
    description: "  ",
  },
  {
    image: GlobeValves4Image,
    title: " 17 # GLOBE VALVES WITH FLANGE - GBF 2 - GBF 10",
    description: "  ",
  },
];

const GlobeValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST GLOBE VALVES</h2>
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

export default GlobeValves;
