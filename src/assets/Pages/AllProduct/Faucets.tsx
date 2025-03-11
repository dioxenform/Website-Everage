import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Faucets1Image from "../../Images/202.jpg";
import Faucets2Image from "../../Images/203.jpg";
import Faucets3Image from "../../Images/204.jpg";
import Faucets4Image from "../../Images/205.jpg";
import Faucets5Image from "../../Images/206.jpg";
import Faucets6Image from "../../Images/207.jpg";
import Faucets7Image from "../../Images/208.jpg";
import Faucets8Image from "../../Images/209.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Faucets1Image,
    title: " 202 # SHOWER FAUCET WITH C PIPE WITH ORING SEALING TYPE - KSC 2 ",
    description: "  ",
  },
  {
    image: Faucets2Image,
    title: " 203 # SHOWER & BIBB FAUCET WITH ORING SEALING TYPE - KD 2 ",
    description: "  ",
  },
  {
    image: Faucets3Image,
    title:
      "  204  # WASH BASIN WITH ORING SEALING TYPE - KW 2 ACL-HDL - KW 2 J-HDL2 ",
    description: "  ",
  },
  {
    image: Faucets4Image,
    title:
      " 205 # WASH BASIN FAUCET WITH C PIPE WITH ORING SEALING TYPE - KWY 2 ",
    description: "  ",
  },
  {
    image: Faucets5Image,
    title: " 206 # LOUNDRY FAUCET WITH S PIPE WITH ORING SEALING TYPE - KB 2 ",
    description: "  ",
  },
  {
    image: Faucets6Image,
    title: " 207 # HOSE & SINGLE BIBB FAUCET QUICK OPENED - HBO 38 - HBO 67 ",
    description: "  ",
  },
  {
    image: Faucets7Image,
    title: " 208 # HOSE & SINGLE BIBB FAUCET - HB 38 - HB 67 ",
    description: "  ",
  },
  {
    image: Faucets8Image,
    title: " 209 # HOSE & SINGLE BIBB FAUCET QUICK OPENED - HBO 38 - HBO 67 ",
    description: "  ",
  },
];

const Faucets = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST FAUCETS</h2>
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

export default Faucets;
