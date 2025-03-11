import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import FireHose1Image from "../../Images/257.jpg";
import FireHose2Image from "../../Images/258.jpg";
import FireHose3Image from "../../Images/259.jpg";
import FireHose4Image from "../../Images/260.jpg";
import FireHose5Image from "../../Images/261.jpg";
import FireHose6Image from "../../Images/262.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: FireHose1Image,
    title: " 257 # FIRE HOSE - FH 6-8 - FH 7-9 ",
    description: "  ",
  },
  {
    image: FireHose2Image,
    title: " 258 # FIRE HOSE - FH 8G FH 8N  ",
    description: "  ",
  },
  {
    image: FireHose3Image,
    title: " 259 # BALL DRIP - BD 2 - BD 3 ",
    description: "  ",
  },
  {
    image: FireHose4Image,
    title:
      " 260 # REDUCING ADAPTER FIRE HOSE WITH SWIVEL NUT - RA 66L - RA 918L - BSF 661 - BSF 601601 ",
    description: "  ",
  },
  {
    image: FireHose5Image,
    title: " 261 # BS 4131-BS 601601 BSR 3H3 BSF 6061-BSF662 ",
    description: "  ",
  },
  {
    image: FireHose6Image,
    title: " 262 # THREE WAY INSP. TEST - TW 0 ",
    description: "  ",
  },
];

const FireHose = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST FIRE HOSE</h2>
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

export default FireHose;
