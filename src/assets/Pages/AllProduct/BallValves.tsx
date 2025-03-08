import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import ballValves1Image from "../../Images/34.jpg";
import ballValves2Image from "../../Images/35.jpg";
import ballValves3Image from "../../Images/36.jpg";
import ballValves4Image from "../../Images/37.jpg";
import ballValves5Image from "../../Images/38.jpg";
import ballValves6Image from "../../Images/39.jpg";
import ballValves7Image from "../../Images/40.jpg";
import ballValves8Image from "../../Images/41.jpg";
import ballValves9Image from "../../Images/42.jpg";
import ballValves10Image from "../../Images/43.jpg";
import ballValves11Image from "../../Images/44.jpg";
import ballValves12Image from "../../Images/45.jpg";
import ballValves13Image from "../../Images/46.jpg";
import ballValves14Image from "../../Images/47.jpg";
import ballValves15Image from "../../Images/48.jpg";
import ballValves16Image from "../../Images/49.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: ballValves1Image,
    title: "34 # BALL VALVES - BV 0-7, BV 12-17, BV 12T-14T ",
    description: "  ",
  },
  {
    image: ballValves2Image,
    title: " 35 # TEST COCK VALVES - BV 188 - BV 148",
    description: "  ",
  },
  {
    image: ballValves3Image,
    title: " 36 # TESTCOCK VALVES WITHOUT HANDLE - BV 188T - BV 148T ",
    description: "  ",
  },
  {
    image: ballValves4Image,
    title: " 37 # DRAIN BALL VALVES WITHOUT HANDLE - BV 161T - BV 176T",
    description: "  ",
  },
  {
    image: ballValves5Image,
    title: " 38 # BALL VALVES COMPRESSION - BVC 2 - BVC 4 ",
    description: "  ",
  },
  {
    image: ballValves6Image,
    title: " 39 # GAS BALL VALVES - BVG 1-4, 21-44, 21R-315R ",
    description: "  ",
  },
  {
    image: ballValves7Image,
    title: " 40 # BALL VALVES FULL - BVF 2-7, BVF 12-17 ",
    description: "  ",
  },
  {
    image: ballValves8Image,
    title: " 41 # BALL VALVES FULL WITH DRAIN - BVFD 2-4, BVFD 12-14 ",
    description: "  ",
  },
  {
    image: ballValves9Image,
    title: " 42 # BALL VALVES WITH ORING SEALING TYPE BVO 2 - BVO 7 ",
    description: "  ",
  },
  {
    image: ballValves10Image,
    title: " 43 # BALL VALVES PEX - BVP 1 - BVP 4 ",
    description: "  ",
  },
  {
    image: ballValves11Image,
    title: " 44 # BALL VALVES PEX WITH DRAIN - BVPD 2 - BVPD 4   ",
    description: "  ",
  },
  {
    image: ballValves12Image,
    title: " 45 # BALL VALVES INSERT - BVI 3 - BVI 5 ",
    description: "  ",
  },
  {
    image: ballValves13Image,
    title: " 46 # BALL VALVES LONG - BV 2L - BV 13L ",
    description: "  ",
  },
  {
    image: ballValves14Image,
    title: " 47 # BALL VALVES JET NOZZLE WITH BUTTERFLY HANDLE - BVN 2BF ",
    description: "  ",
  },
  {
    image: ballValves15Image,
    title: " 48 #BVCS 3 BVCS 4 ",
    description: "  ",
  },
  {
    image: ballValves16Image,
    title: " 49 # LOG LIGHTER BALL VALVES - BVL 2L - BVL 3S ",
    description: "  ",
  },
];

const BallValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST BALL VALVES</h2>
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

export default BallValves;
