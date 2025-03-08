import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import CheckValves1Image from "../../Images/18_SWING_CHECK_VALVES_-_CV_0-10,_CV_11-20,_CVR,CVT_0-10_page-0001.jpg";
import CheckValves2image from "../../Images/20.jpg";
import CheckValves3image from "../../Images/22.jpg";
import CheckValves4image from "../../Images/23.jpg";
import CheckValves5image from "../../Images/24.jpg";
import CheckValves6image from "../../Images/25.jpg";
import CheckValves7image from "../../Images/26.jpg";
import CheckValves8image from "../../Images/27.jpg";
import CheckValves9image from "../../Images/28.jpg";
import CheckValves10image from "../../Images/29.jpg";
import CheckValves11image from "../../Images/30.jpg";
import CheckValves12image from "../../Images/31.jpg";
import CheckValves13image from "../../Images/32.jpg";
import CheckValves14image from "../../Images/33.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: CheckValves1Image,
    title: " 18 # SWING CHECK VALVES - CV 0-10, CV 11-20, CVR,CVT 0-10 ",
    description: "  ",
  },
  {
    image: CheckValves2image,
    title:
      " 20 # Y PATTERN SWING CHECK VALVES - CVY 1-20, CVYR,CVYT 1-7, 12-17 ",
    description: "  ",
  },
  {
    image: CheckValves3image,
    title:
      "21 # Y PATTERN SWING CHECK VALVES - CVY 1-20, CVYR,CVYT 1-7, 12-17 ",
    description: "  ",
  },
  {
    image: CheckValves4image,
    title: " 22 # INLINE CHECK VALVES THREADED - CVI 1 - CVI 10 ",
    description: "  ",
  },
  {
    image: CheckValves5image,
    title: " 23 # INLINE CHECK VALVES SOLDER - CVI 12 - CVI 17",
    description: "  ",
  },
  {
    image: CheckValves6image,
    title: " 24 # INLINE CHECK VALVES (TAP) -  CVI 4A - CVI 7A",
    description: "  ",
  },
  {
    image: CheckValves7image,
    title: " 25 # INLINE CHECK VALVES (TAP) - CVI 4B - CVI 7B",
    description: "  ",
  },
  {
    image: CheckValves8image,
    title: " 26 # INLINE CHECK VALVES (TAP) - CVI 4C - 7C",
    description: "  ",
  },
  {
    image: CheckValves9image,
    title: " 27 # INLINE CHECK VALVES TAP - CVI 4D - 7D",
    description: "  ",
  },
  {
    image: CheckValves10image,
    title: " 28 # INLINE CHECK VALVES (TAP) - CVI 4E - 7E",
    description: "  ",
  },
  {
    image: CheckValves11image,
    title: " 29 # INLINE CHECK VALVES (TAP) - CVI 4F - 7F",
    description: "  ",
  },
  {
    image: CheckValves12image,
    title: " 30 # INLINE CHECK VALVES HEAVY DUTY (LONG) - CVI 2L - CVI 7L",
    description: "  ",
  },
  {
    image: CheckValves13image,
    title: " 31 # INLINE SPRING CHECK VALVES - CVIA 2-7, 12-17",
    description: "  ",
  },
  {
    image: CheckValves14image,
    title: " 32 # INLINE CHECK VALVES (MIP X FIP) - CVM 2 - 45 ",
    description: "  ",
  },
];

const CheckValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST CHECK VALVES</h2>
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

export default CheckValves;
