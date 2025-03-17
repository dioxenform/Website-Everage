import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import TeesCoupling1Image from "../../Images/290.jpg";
import TeesCoupling2Image from "../../Images/291.jpg";
import TeesCoupling3Image from "../../Images/292.jpg";
import TeesCoupling4Image from "../../Images/293.jpg";
import TeesCoupling5Image from "../../Images/294.jpg";
import TeesCoupling6Image from "../../Images/295.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: TeesCoupling1Image,
    title: " 290 # TEES COUPLING - TCCC 333 - TCCC 777 ",
    description: "  ",
  },
  {
    image: TeesCoupling2Image,
    title: " 291 # TEES COUPLING - TPPP 333 ",
    description: "  ",
  },
  {
    image: TeesCoupling3Image,
    title: " 292 # TEES COUPLING - TRRM 333 - TRRM 444 ",
    description: "  ",
  },
  {
    image: TeesCoupling4Image,
    title: " 293 # TEES COUPLING - TRRR 333 - TRRR 444 ",
    description: "  ",
  },
  {
    image: TeesCoupling5Image,
    title: " 294 # TEES COUPLING - TCCM 333 - TCCM 444 ",
    description: "  ",
  },
  {
    image: TeesCoupling6Image,
    title: " 295 # TEES COUPLING - TCCF 333 - TCCF 444 ",
    description: "  ",
  },
];

const TeesCoupling = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST TEES COUPLING</h2>
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

export default TeesCoupling;
