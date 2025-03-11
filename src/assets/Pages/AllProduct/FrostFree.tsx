import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import FrostFree1Image from "../../Images/164.jpg";
import FrostFree2Image from "../../Images/164.jpg";
import FrostFree3Image from "../../Images/164.jpg";
import FrostFree4Image from "../../Images/164.jpg";
import FrostFree5Image from "../../Images/164.jpg";
import FrostFree6Image from "../../Images/164.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: FrostFree1Image,
    title: " 164  # FROST FREE SILLCOCKS - ANTI SHIPHON - FFA 2 - FFA 24 ",
    description: "  ",
  },
  {
    image: FrostFree2Image,
    title: " 165  # STANDART FROST FREE SILLCOCK - FF 4 - FF 24 ",
    description: "  ",
  },
  {
    image: FrostFree3Image,
    title: " 166  # CANADIAN STYLE FROST FREE SILLCOCKS - FFR 4 - FFR 24 ",
    description: "   ",
  },
  {
    image: FrostFree4Image,
    title: " 167  #Frost free Sillcock FFW2-FFW15 ",
    description: "  ",
  },
  {
    image: FrostFree5Image,
    title: " 168  #Frost free Sillcock FFW22-FFW215 ",
    description: "  ",
  },
  {
    image: FrostFree6Image,
    title: " 169 #Frost free Sillcock FFW42-FFW415 ",
    description: "  ",
  },
];

const FrostFree = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">
          LIST FROST FREE SILLCOCKS
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

export default FrostFree;
