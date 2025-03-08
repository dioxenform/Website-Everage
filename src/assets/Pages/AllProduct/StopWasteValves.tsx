import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import StopWasteValves1Image from "../../Images/60.jpg";
import StopWasteValves2Image from "../../Images/61.jpg";
import StopWasteValves3Image from "../../Images/62.jpg";
import StopWasteValves4Image from "../../Images/63.jpg";
import StopWasteValves5Image from "../../Images/64.jpg";
import StopWasteValves6Image from "../../Images/65.jpg";
import StopWasteValves7Image from "../../Images/66.jpg";
import StopWasteValves8Image from "../../Images/67.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: StopWasteValves1Image,
    title: " 60 # STOP & WASTE VALVES - MV 0-2 - MV 0W-4 ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: " 61 # STOP VALVES FEMALE X MALE - MV 1A - MV 2A ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: " 62 # STOP & WASTE VALVE - MV 5-13 - MV 7-14 ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: " 63 # STOP & WASTE VALVE WITH COMP. NUT - MV 9 - MV 12 ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title:
      " 64 # STOP & WASTE VALVES WITH CPVC COUPLING PIPE PVC - MV 9 CPVC - MV 12 CPVC ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: " 65 # STOP ANGLE VALVES - MV15-16 - MV 17-18 ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: "66 # STOP & WASTE VALVES - MV 113  ",
    description: "  ",
  },
  {
    image: StopWasteValves1Image,
    title: " 67 # STOP & WASTE VALVES WITH PEX - MVP 9-10 MVP 11-12 ",
    description: "  ",
  },
];

const StopWasteValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST STOP METER & WASTE VALVES VALVES
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

export default StopWasteValves;
