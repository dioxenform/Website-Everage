import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import LogValves1Image from "../../Images/50.jpg";
import LogValves2Image from "../../Images/51.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: LogValves1Image,
    title: " 50 # LOG LIGHTER STOP VALVES - SVS 2 - SVL 2 & SVST 2 ",
    description: "  ",
  },
  {
    image: LogValves2Image,
    title: " 51 # 2 WAY COMBO LOG LIGHTER STOP VALVES",
    description: "  ",
  },
];

const LogValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST LOG LIGHTER VALVES</h2>
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

export default LogValves;
