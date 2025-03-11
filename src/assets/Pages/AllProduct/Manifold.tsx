import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Manifold1Image from "../../Images/263.jpg";
import Manifold2Image from "../../Images/264.jpg";
import Manifold3Image from "../../Images/265.jpg";
import Manifold4Image from "../../Images/266.jpg";
import Manifold5Image from "../../Images/267.jpg";
import Manifold6Image from "../../Images/268.jpg";
import Manifold7Image from "../../Images/269.jpg";
import Manifold8Image from "../../Images/270.jpg";
import Manifold9Image from "../../Images/271.jpg";
import Manifold10Image from "../../Images/272.jpg";
import Manifold11Image from "../../Images/273.jpg";
import Manifold12Image from "../../Images/274.jpg";
import Manifold13Image from "../../Images/275.jpg";
import Manifold14Image from "../../Images/276.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Manifold1Image,
    title: " 263 # MANIFOLD - MNF 3 - MNF 4 ",
    description: "  ",
  },
  {
    image: Manifold2Image,
    title: " 264 # TANK TEE WITH DOUBLE DRAIN - T 434.522 - T 5434.522 ",
    description: "  ",
  },
  {
    image: Manifold3Image,
    title: " 265 # TANK TEE WITH SINGLE DRAIN - T 434.52 - T 54143 ",
    description: "  ",
  },
  {
    image: Manifold4Image,
    title: " 266 # TANK TEE WITH SINGLE DRAIN - T 543.73 - T 442.52 ",
    description: "  ",
  },
  {
    image: Manifold5Image,
    title: " 267 # TANK TEE UNION WITH DOUBLE DRAIN - T 435.322U - T 541433U ",
    description: "  ",
  },
  {
    image: Manifold6Image,
    title: " 268 # TANK TEE UNION WITH SINGLE DRAIN - T 435.32U - T 54143U ",
    description: "  ",
  },
  {
    image: Manifold7Image,
    title:
      " 269 # TANK TEE SWIVEL NUT WITH DOUBLE DRAIN - T 433.522US - T 5433.922US ",
    description: "  ",
  },
  {
    image: Manifold8Image,
    title:
      " 270 # TANK TEE SWIVEL NUT WITH SINGLE DRAIN - T 433.52 US - T 5433.92 US ",
    description: "  ",
  },
  {
    image: Manifold9Image,
    title:
      " 271  # TANK TEE 0.5 TAPPING WITH SINGLE DRAIN - HT 544.33T2 - HT 434.82T2 ",
    description: "  ",
  },
  {
    image: Manifold10Image,
    title:
      " 272 # TANK TEE HARD UNION WITH SINGLE DRAIN - HT 438.52U - HT 54143U ",
    description: "  ",
  },
  {
    image: Manifold11Image,
    title:
      " 273 # TANK TEE HARD UNION WITH DOUBLE DRAIN - HT 435.522U - HT 545.533U ",
    description: "  ",
  },
  {
    image: Manifold12Image,
    title:
      " 274 # TANK TEE COPPER SHANK WITH DOUBLE DRAIN - TC 431122 - TC 541733 ",
    description: "  ",
  },
  {
    image: Manifold13Image,
    title:
      " 275 # TANK TEE COPPER SHANK WITH SINGLE DRAIN - TC 43112 - TC 54173 ",
    description: "  ",
  },
  {
    image: Manifold14Image,
    title:
      " 276 # TANK TEE DOUBLE DRAIN WITH QUICK CONNECTION ANTI SPIN - T 43522DQH - T 545333DQH ",
    description: "  ",
  },
];

const Manifold = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST MANIFOLD</h2>
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

export default Manifold;
