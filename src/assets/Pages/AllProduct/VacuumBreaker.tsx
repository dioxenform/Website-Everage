import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import VacuumBreaker1Image from "../../Images/170.jpg";
import VacuumBreaker2Image from "../../Images/171.jpg";
import VacuumBreaker3Image from "../../Images/172.jpg";
import VacuumBreaker4Image from "../../Images/173.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: VacuumBreaker1Image,
    title: " 170 # MANUAL DRAINING VACUUM BREAKER - VB 1 - VB 6 ",
    description: "  ",
  },
  {
    image: VacuumBreaker2Image,
    title: " 171 # SELF DRAINING VACUUM BREAKER - VB 2 ",
    description: "  ",
  },
  {
    image: VacuumBreaker3Image,
    title: " 172 # DOUBLE CHECK BACKFLOW PREVENTER - VB 3 ",
    description: "  ",
  },
  {
    image: VacuumBreaker4Image,
    title: " 173 # AUTOMATIC SELF DRAINING VACUUM BREAKER - VB 4 - VB 4 HPS ",
    description: "  ",
  },
];

const VacuumBreaker = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST VACUUM BREAKERS</h2>
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

export default VacuumBreaker;
