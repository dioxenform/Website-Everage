import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Accessories1Image from "../../Images/345.jpg";
import Accessories2Image from "../../Images/346.jpg";
import Accessories3Image from "../../Images/347.jpg";
import Accessories4Image from "../../Images/348.jpg";
import Accessories5Image from "../../Images/349.jpg";
import Accessories6Image from "../../Images/350.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Accessories1Image,
    title: " 345 # ACCESSORIES - HAND WHEEL - PEGLER HANDLE ",
    description: "  ",
  },
  {
    image: Accessories2Image,
    title: " 346 # CROSS HANDLE - TEE HANDLE & LOOSE KEY ",
    description: "  ",
  },
  {
    image: Accessories3Image,
    title: " 347 # ELLIPS HANDLE - ZINC HAND WHEEL ",
    description: "  ",
  },
  {
    image: Accessories4Image,
    title: " 348 # ACRELIC HANDLE - TUMB HANDLE ",
    description: "  ",
  },
  {
    image: Accessories5Image,
    title:
      " 349 # FROST FREE SILLCOCKS - ANTI SHIPHON - FFA 2 - FFA 24 Sparepart ",
    description: "  ",
  },
  {
    image: Accessories6Image,
    title:
      " 350  # ANGLE GLOBE VALVES WITH UNION - AVU 42-44 - AVU 42X-44X -Sparepart",
    description: "  ",
  },
];

const Accessories = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST ACCESSORIES</h2>
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

export default Accessories;
