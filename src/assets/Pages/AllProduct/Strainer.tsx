import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Strainer1Image from "../../Images/192.jpg";
import Strainer2Image from "../../Images/193.jpg";
import Strainer3Image from "../../Images/194.jpg";
import Strainer4Image from "../../Images/195.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Strainer1Image,
    title: " 192 # TOP HOUSING SHOWER PAN DRAIN - ST 7 ",
    description: "  ",
  },
  {
    image: Strainer2Image,
    title: " 193 # SHOWER DRAIN CAULKING WITH INTERNAL GASKET - ST 7M ",
    description: "  ",
  },
  {
    image: Strainer3Image,
    title: " 194  # SINK STRAINER - DST 6 ",
    description: "  ",
  },
  {
    image: Strainer4Image,
    title: " 195 # Y - STRAINER - STY 0C - STY 18 ",
    description: "  ",
  },
];

const Strainer = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST STRAINER</h2>
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

export default Strainer;
