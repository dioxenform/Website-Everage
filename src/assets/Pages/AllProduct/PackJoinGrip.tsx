import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import PackJoinGrip1Image from "../../Images/304.jpg";
import PackJoinGrip2Image from "../../Images/305.jpg";
import PackJoinGrip3Image from "../../Images/306.jpg";
import PackJoinGrip4Image from "../../Images/307.jpg";
import PackJoinGrip5Image from "../../Images/308.jpg";
import PackJoinGrip6Image from "../../Images/309.jpg";
import PackJoinGrip7Image from "../../Images/310.jpg";
import PackJoinGrip8Image from "../../Images/311.jpg";
import PackJoinGrip9Image from "../../Images/312.jpg";
import PackJoinGrip10Image from "../../Images/313.jpg";
import PackJoinGrip11Image from "../../Images/314.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: PackJoinGrip1Image,
    title: " 304 # ELL COUPLING - SMP 33G - SMP 44G ",
    description: "  ",
  },
  {
    image: PackJoinGrip2Image,
    title: " 305 # ELL COUPLING - SFC 33G - SFC 77G ",
    description: "  ",
  },
  {
    image: PackJoinGrip3Image,
    title: " 306 # ELL COUPLING - SFP 33G - SFP 44G ",
    description: "  ",
  },
  {
    image: PackJoinGrip4Image,
    title: " 307 # ELL COUPLING - SCC 33G - SCC 77G ",
    description: "  ",
  },
  {
    image: PackJoinGrip5Image,
    title: " 308 # ELL COUPLING - SMC 33G - SMC 77G ",
    description: "  ",
  },
  {
    image: PackJoinGrip6Image,
    title: " 309 # ELL COUPLING - LMC 33G - LMC 44G ",
    description: "  ",
  },
  {
    image: PackJoinGrip7Image,
    title: " 310 # ELL COUPLING - LCC 33G - LCC 4G ",
    description: "  ",
  },
  {
    image: PackJoinGrip8Image,
    title: " 311 # ELL COUPLING - LCP 33G ",
    description: "  ",
  },
  {
    image: PackJoinGrip9Image,
    title: " 312 # ELL COUPLING - TCCC 333G - TCCC 444G ",
    description: "  ",
  },
  {
    image: PackJoinGrip10Image,
    title: " 313 # ELL COUPLING - TPPP 333G ",
    description: "  ",
  },
  {
    image: PackJoinGrip11Image,
    title: " 314 # ELL COUPLING - TCCM 333G - TCCM 444G ",
    description: "  ",
  },
];

const PackJoinGrip = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST PACK JOINT GRIP COUPLINGS
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

export default PackJoinGrip;
