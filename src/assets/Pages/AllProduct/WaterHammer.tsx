import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import WaterHammer1image from "../../Images/323.jpg";
import WaterHammer2image from "../../Images/323.jpg";
import WaterHammer3image from "../../Images/323.jpg";
import WaterHammer4image from "../../Images/323.jpg";
import WaterHammer5image from "../../Images/323.jpg";
import WaterHammer6image from "../../Images/323.jpg";
import WaterHammer7image from "../../Images/323.jpg";
import WaterHammer8image from "../../Images/323.jpg";
import WaterHammer9image from "../../Images/323.jpg";
import WaterHammer10image from "../../Images/323.jpg";
import WaterHammer11image from "../../Images/323.jpg";
import WaterHammer12Image from "../../Images/324.jpg";
import WaterHammer13image from "../../Images/325.jpg";
import WaterHammer14image from "../../Images/326.jpg";
import WaterHammer15image from "../../Images/327.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: WaterHammer1image,
    title: " 323 # WATER HAMMER STRAIGHT - HM 2 - HM 3PX ",
    description: "  ",
  },
  {
    image: WaterHammer2image,
    title: " 324 # WATER HAMMER STRAIGHT COMP. NUT - HM 1CM - HM 5CM ",
    description: "  ",
  },
  {
    image: WaterHammer3image,
    title:
      " 325 # WATER HAMMER STRAIGHT COMP. NUT PIPE PVC - HM 2 CPVC - HM 3 CPVC ",
    description: "  ",
  },
  {
    image: WaterHammer4image,
    title: " 326 # WATER HAMMER TEE PEX ARRESTER - HM 1P - 3P ",
    description: "  ",
  },
  {
    image: WaterHammer5image,
    title: " 327 # WATER HAMMER TEE COMP. NUT - HM 14 - HM 58 L ",
    description: "  ",
  },
  {
    image: WaterHammer6image,
    title: " 328 # WATER HAMMER TEE LAUNDRY - HMH 3 ",
    description: "  ",
  },
  {
    image: WaterHammer7image,
    title: " 329 # WATER HAMMER TEE - HM 22 - HM 25 ",
    description: "  ",
  },
  {
    image: WaterHammer8image,
    title: "330  # WATER HAMMER TEE - HM 12C  ",
    description: "  ",
  },
  {
    image: WaterHammer9image,
    title: " 331 # WATER HAMMER TEE - HM 2C2 - HM 2C5 ",
    description: "  ",
  },
  {
    image: WaterHammer10image,
    title: " 332 # 1.4 TURN WASHING MACHINE W HAMMER ARRESTERS - BVHM 23 HL ",
    description: "  ",
  },
  {
    image: WaterHammer11image,
    title:
      " 333 # 1. 1.4 TURN WASHING MACHINE W HAMMER ARRESTERS - BVHM 23 HP ",
    description: "  ",
  },
  {
    image: WaterHammer12Image,
    title:
      " 334 # 1.4 TURN WASHING MACHINE W HAMMER ARRESTERS - BVHM 23 HCPVC ",
    description: "  ",
  },
  {
    image: WaterHammer13image,
    title: " 335 # 1.4 TURN ICE MAKER MACHINE W HAMMER ARRESTERS - BVHM 24 L ",
    description: "  ",
  },
  {
    image: WaterHammer14image,
    title: " 336 # 1.4 TURN ICE MAKER MACHINE W HAMMER ARRESTERS - BVHM 24 P ",
    description: "  ",
  },
  {
    image: WaterHammer15image,
    title:
      " 337 # 1.4 TURN ICE MAKER MACHINE W HAMMER ARRESTERS - BVHM 24 CPVC ",
    description: "  ",
  },
];

const WaterHammer = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST WATER HAMMER</h2>
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

export default WaterHammer;
