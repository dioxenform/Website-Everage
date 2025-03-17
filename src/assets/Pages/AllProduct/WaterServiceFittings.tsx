import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import WaterServiceFittings1Image from "../../Images/277.jpg";
import WaterServiceFittings2Image from "../../Images/278.jpg";
import WaterServiceFittings3Image from "../../Images/279.jpg";
import WaterServiceFittings4Image from "../../Images/280.jpg";
import WaterServiceFittings5Image from "../../Images/281.jpg";
import WaterServiceFittings6Image from "../../Images/282.jpg";
import WaterServiceFittings7Image from "../../Images/283.jpg";
import WaterServiceFittings8Image from "../../Images/284.jpg";
import WaterServiceFittings9Image from "../../Images/285.jpg";
import WaterServiceFittings10Image from "../../Images/286.jpg";
import WaterServiceFittings11Image from "../../Images/287.jpg";
import WaterServiceFittings12Image from "../../Images/288.jpg";
import WaterServiceFittings13Image from "../../Images/289.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: WaterServiceFittings1Image,
    title: " 277 # STRAIGHT COUPLING - SCC 33 - SCC 77 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings2Image,
    title: " 278 # STRAIGHT COUPLING - SMC 33 - SMC 77 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings3Image,
    title: " 279 # STRAIGHT COUPLING - SFC 33 - SFC 77 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings4Image,
    title: " 280 # STRAIGHT COUPLING - SCR 33 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings5Image,
    title: " 281 # STRAIGHT COUPLING - SPP 33 - SPP 44 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings6Image,
    title: " 282 # STRAIGHT COUPLING - SMP 33 - SMP 54 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings7Image,
    title: " 283 # STRAIGHT COUPLING - SFP 33 - SFP 44 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings8Image,
    title: " 284 # STRAIGHT COUPLING - SCP 33 - SCP 43 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings9Image,
    title: " 285 # STRAIGHT COUPLING - SFR 33 - SFR 77 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings10Image,
    title: "286 # STRAIGHT COUPLING - SMR 33 - SMR 77  ",
    description: "  ",
  },
  {
    image: WaterServiceFittings11Image,
    title: " 287 # STRAIGHT COUPLING - SMR 33MC - SMR 77MC ",
    description: "  ",
  },
  {
    image: WaterServiceFittings12Image,
    title: " 288 # STRAIGHT COUPLING - SRR 33 - SRR 77 ",
    description: "  ",
  },
  {
    image: WaterServiceFittings13Image,
    title: " 289 # STRAIGHT COUPLING - SML 58 - SML 55 ",
    description: "  ",
  },
];

const WaterServiceFittings = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST WATER SERVICE FITTINGS
        </h2>
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

export default WaterServiceFittings;
