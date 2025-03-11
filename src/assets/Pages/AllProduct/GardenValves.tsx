import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import GardenValves1Image from "../../Images/153.jpg";
import GardenValves2Image from "../../Images/154.jpg";
import GardenValves3Image from "../../Images/155.jpg";
import GardenValves4Image from "../../Images/156.jpg";
import GardenValves5Image from "../../Images/157.jpg";
import GardenValves6Image from "../../Images/158.jpg";
import GardenValves7Image from "../../Images/159.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: GardenValves1Image,
    title:
      " 153 # BENT NOSE GARDEN VALVES HEAVY DUTY - HBH 34-37 - HBH 34K-37K ",
    description: "  ",
  },
  {
    image: GardenValves2Image,
    title:
      " 154  # BENT NOSE GARDEN VALVES HEAVY DUTY WITH FLOATING SEAT - HBH 34A-36A - HBH 34KA-36KA ",
    description: "  ",
  },
  {
    image: GardenValves3Image,
    title:
      " 155  # INVERTED GARDEN VALVES HEAVY DUTY - HBHI 34-36 - HBHI 34K-36K ",
    description: "  ",
  },
  {
    image: GardenValves4Image,
    title:
      " 156 # INVERTED GARDEN VALVES HEAVY DUTY WITH FLOATING SEAT - HBHI 34A-36A - HBHI 34KA-36KA ",
    description: "  ",
  },
  {
    image: GardenValves5Image,
    title:
      " 157  # BENT NOSE GARDEN VALVES HEAVY DUTY WITH VACUUM BREAKER - HBH 34 VB - HBH 36 VB ",
    description: "  ",
  },
  {
    image: GardenValves6Image,
    title: " 158  # GARDEN VALVES - MB 34 - MB 36 ",
    description: "  ",
  },
  {
    image: GardenValves7Image,
    title: " 159  # INVERTED GARDEN VALVES - MBI 34 - MBI 36 ",
    description: "  ",
  },
];

const GardenValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST GARDEN VALVES</h2>
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

export default GardenValves;
