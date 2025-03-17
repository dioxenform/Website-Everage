import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import OilTankValves1Image from "../../Images/316.jpg";
import OilTankValves2Image from "../../Images/317.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: OilTankValves1Image,
    title: " 316 # OIL TANK VALVES - OTV 21 - OTV 23 ",
    description: "  ",
  },
  {
    image: OilTankValves2Image,
    title: " 317 # OIL TANK BALL VALVES - OTBV 21 - OTBV 23 ",
    description: "  ",
  },
];

const OilTankValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST OIL TANK VALVES</h2>
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

export default OilTankValves;
