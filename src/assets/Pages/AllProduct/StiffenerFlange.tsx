import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import StiffenerFlange1Image from "../../Images/315.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: StiffenerFlange1Image,
    title: " 315 # STAINLESS STIFFENER FLANGE ",
    description: "  ",
  },
];

const StiffenerFlange = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST STIFFENER FLANGE</h2>
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

export default StiffenerFlange;
