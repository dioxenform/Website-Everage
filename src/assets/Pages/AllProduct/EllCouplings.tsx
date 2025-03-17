import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import EllCouplings1Image from "../../Images/globevalves1.jpg";
import EllCouplings2Image from "../../Images/globevalves2.jpg";
import EllCouplings3Image from "../../Images/globevalves3.jpg";
import EllCouplings4Image from "../../Images/globevalves4.jpg";
import EllCouplings5Image from "../../Images/globevalves5.jpg";
import EllCouplings6Image from "../../Images/globevalves6.jpg";
import EllCouplings7Image from "../../Images/globevalves7.jpg";
import EllCouplings8Image from "../../Images/globevalves8.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: EllCouplings1Image,
    title: " 296 # ELL COUPLING - LMR 33 - LMR 44 ",
    description: "  ",
  },
  {
    image: EllCouplings2Image,
    title: " 297 # ELL COUPLING - LMC 33 - LMC 44 ",
    description: "  ",
  },
  {
    image: EllCouplings3Image,
    title: " 298 # ELL COUPLING - LMP 33 - LMP 44 ",
    description: "  ",
  },
  {
    image: EllCouplings4Image,
    title: " 299 # ELL COUPLING - LRR 33 - LRR 44 ",
    description: "  ",
  },
  {
    image: EllCouplings5Image,
    title: " 300 # ELL COUPLING - LCC 33 - LCC 44 ",
    description: "  ",
  },
  {
    image: EllCouplings6Image,
    title: " 301 # ELL COUPLING - LPP 33 ",
    description: "  ",
  },
  {
    image: EllCouplings7Image,
    title: " 302 # ELL COUPLING - LCP 33 ",
    description: "  ",
  },
  {
    image: EllCouplings8Image,
    title: " 303 # ELL COUPLING - LFR 44 - LFR 77 ",
    description: "  ",
  },
];

const EllCouplings = () => {
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

export default EllCouplings;
