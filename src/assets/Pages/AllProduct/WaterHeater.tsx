import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import WaterHeater1Image from "../../Images/103.jpg";
import WaterHeater2Image from "../../Images/104.jpg";
import WaterHeater3Image from "../../Images/105.jpg";
import WaterHeater4Image from "../../Images/106.jpg";
import WaterHeater5Image from "../../Images/107.jpg";
import WaterHeater6Image from "../../Images/108.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: WaterHeater1Image,
    title: " 103 # WATER HEATER DRAIN VALVES - MV 159-176 - MV 171 - MV 175 ",
    description: "  ",
  },
  {
    image: WaterHeater2Image,
    title:
      " 104 # WATER HEATER DRAIN VALVES WITHOUT HANDLE - MV 159 T - MV 176 T ",
    description: "  ",
  },
  {
    image: WaterHeater3Image,
    title:
      " 105 # WATER HEATER DRAIN VALVES WITHOUT HANDLE - MV 159 AT - MV 176 AT ",
    description: "  ",
  },
  {
    image: WaterHeater4Image,
    title: " 106 # WATER HEATER DRAIN VALVES - MV 159 A - MV 176 A ",
    description: "  ",
  },
  {
    image: WaterHeater5Image,
    title: " 107 # WATER HEATER DRAIN VALVES WITH BRANCH - MV 376 - MV 378 ",
    description: "  ",
  },
  {
    image: WaterHeater6Image,
    title: " 108 # Y WATER HEATER DRAIN VALVES - MV 480 ",
    description: "  ",
  },
];

const WaterHeater = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST WATER HEATER DRAIN VALVES
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

export default WaterHeater;
