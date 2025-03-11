import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import AngleValves1Image from "../../Images/160.jpg";
import AngleValves2Image from "../../Images/161.jpg";
import AngleValves3Image from "../../Images/162.jpg";
import AngleValves4Image from "../../Images/163.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: AngleValves1Image,
    title: " 160 # ANGLE VALVES - AV 2-7 - AV 2X-7X ",
    description: "  ",
  },
  {
    image: AngleValves2Image,
    title: " 161  # ANGLE GLOBE VALVES - AV 9-44 - AV 9X-44X ",
    description: "  ",
  },
  {
    image: AngleValves3Image,
    title: " 162  # ANGLE GLOBE VALVES WITH UNION - AVU 42-44 - AVU 42X-44X ",
    description: "  ",
  },
  {
    image: AngleValves4Image,
    title: " 163  # STRAIGHT GLOBE VALVES - AVS 42-44 - AVS 42X-44X ",
    description: "  ",
  },
];

const AngleValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST ANGLE VALVES</h2>
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

export default AngleValves;
