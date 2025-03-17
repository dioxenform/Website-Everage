import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Miscellaneous1Image from "../../Images/318.jpg";
import Miscellaneous2Image from "../../Images/319.jpg";
import Miscellaneous3Image from "../../Images/320.jpg";
import Miscellaneous4Image from "../../Images/321.jpg";
import Miscellaneous5Image from "../../Images/322.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Miscellaneous1Image,
    title: " 318 # PURGE & BANCING VALVE - PBV 13 - PBV 15 ",
    description: "  ",
  },
  {
    image: Miscellaneous2Image,
    title:
      " 319 # CLOSET BRASS BOLT WITH E-Z SNAP - BE 516 225 SN - BE 516 R 225 SN ",
    description: "  ",
  },
  {
    image: Miscellaneous3Image,
    title: " 320 # FLOATING VALVES WITH ADJUSTABLE - PLA 1 - PLB 7 ",
    description: "  ",
  },
  {
    image: Miscellaneous4Image,
    title: " 321 # FLOATING VALVE - PL 2 - PL 43 ",
    description: "  ",
  },
  {
    image: Miscellaneous5Image,
    title: " 322 # ELBOW FLOATING VALVE - PLE 2 - PLE 4 ",
    description: "  ",
  },
];

const Miscellaneous = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST Miscellaneous</h2>
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

export default Miscellaneous;
