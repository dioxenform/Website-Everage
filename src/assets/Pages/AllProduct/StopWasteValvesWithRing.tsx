import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import StopWasteValvesWithRing1Image from "../../Images/68.jpg";
import StopWasteValvesWithRing2Image from "../../Images/69.jpg";
import StopWasteValvesWithRing3Image from "../../Images/70.jpg";
import StopWasteValvesWithRing4Image from "../../Images/71.jpg";
import StopWasteValvesWithRing5Image from "../../Images/72.jpg";
import StopWasteValvesWithRing6Image from "../../Images/73.jpg";
import StopWasteValvesWithRing7Image from "../../Images/74.jpg";
import StopWasteValvesWithRing8Image from "../../Images/75.jpg";
import StopWasteValvesWithRing9Image from "../../Images/76.jpg";
import StopWasteValvesWithRing10Image from "../../Images/77.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: StopWasteValvesWithRing1Image,
    title: "68 # STOP & WASTE VALVES WITH O-RING - MVO - MVON 1 - 4 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing2Image,
    title: " 69 # STOP & WASTE VALVES WITH O-RING - MVO - MVON 5 - 8 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing3Image,
    title: " 70 # STOP ANGLE VALVES WITH O-RING - MVO - MVON 15 -18 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing4Image,
    title: " 71 # STOP & WASTE VALVES WITH O-RING - MVO 94-95 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing5Image,
    title: " 72 # SEDIMEN FAUCET - MVO 96-97 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing6Image,
    title: " 73 # STOP VALVES TEE - SVT 2N ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing7Image,
    title: " 74 # STOP VALVESTEE - SVT 2 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing8Image,
    title: " 75 # STOP & WASTE VALVES WITH LONG BONNET - MVL 0 - MVL 4 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing9Image,
    title: " 76 # STOP & WASTE VALVES WITH LONG BONNET - MVL 13 - MVL 8 ",
    description: "  ",
  },
  {
    image: StopWasteValvesWithRing10Image,
    title:
      " 77 # STOP & WASTE VALVES WITH COMP. NUT & LONG BONNET - MVL 9 - MVL 12 ",
    description: "  ",
  },
];

const StopWasteValvesWithRing = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST STOP & WASTE VALVES WITH O RING SEALING TYPE
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

export default StopWasteValvesWithRing;
