import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import DMV1Image from "../../Images/174.jpg";
import DMV2Image from "../../Images/175.jpg";
import DMV3Image from "../../Images/176.jpg";
import DMV4Image from "../../Images/177.jpg";
import DMV5Image from "../../Images/178.jpg";
import DMV6Image from "../../Images/179.jpg";
import DMV7Image from "../../Images/180.jpg";
import DMV8Image from "../../Images/181.jpg";
import DMV9Image from "../../Images/182.jpg";
import DMV10Image from "../../Images/183.jpg";
import DMV11Image from "../../Images/184.jpg";
import DMV12Image from "../../Images/185.jpg";
import DMV13Image from "../../Images/186.jpg";
import DMV14Image from "../../Images/187.jpg";
import DMV15Image from "../../Images/188.jpg";
import DMV16Image from "../../Images/189.jpg";
import DMV17Image from "../../Images/190.jpg";
import DMV18Image from "../../Images/191.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: DMV1Image,
    title: " 174 # DWV FITTINGS - TY 555 - T 555 - BS 5M5 ",
    description: "  ",
  },
  {
    image: DMV2Image,
    title: " 175 # DWV FITTINGS -RL-RS 4515 ",
    description: "  ",
  },
  {
    image: DMV3Image,
    title: " 176 # DWV FITTINGS  RS 1615-RS 1515 ",
    description: "  ",
  },
  {
    image: DMV4Image,
    title: " 177 # DWV FITTINGS - TT 7676 - YY 666 - TY 7777 ",
    description: "  ",
  },
  {
    image: DMV5Image,
    title: " 178 # DWV FITTINGS - COT 6 - CO 66 - C0 6 ",
    description: "  ",
  },
  {
    image: DMV6Image,
    title: " 179 # DECK CLEAN OUT LESS PLUG - DCP 2 - DCP 6 ",
    description: "  ",
  },
  {
    image: DMV7Image,
    title: " 180 # TRAP WITH UNION JOINT - TRAP 5 - TRAP 6671U ",
    description: "  ",
  },
  {
    image: DMV8Image,
    title: " 181 # P - TRAP RUNNING TRAP - TRAP 16 - TRAP 117 ",
    description: "  ",
  },
  {
    image: DMV9Image,
    title: " 182 # P - TRAP - TRAP ONE PIECE 16C-061 ",
    description: "  ",
  },
  {
    image: DMV10Image,
    title: " 183  # DWV MARVEL WASTE CONNECTOR - PF 551 PF 606  PF615 PF165 ",
    description: "  ",
  },
  {
    image: DMV11Image,
    title:
      " 184  # DWV MARVEL WASTE CONNECTOR - PF 551BR PF 606BR  PF615BR PF165BR ",
    description: "  ",
  },
  {
    image: DMV12Image,
    title: " 185  # DWV MARVEL WASTE CONNECTOR - FBE2 ",
    description: "  ",
  },
  {
    image: DMV13Image,
    title: " 186  # CLEAN OUT PLUG - COP 125 - 1000 - COS 125 - 800 ",
    description: "  ",
  },
  {
    image: DMV14Image,
    title: " 187  # CLEAN OUT PLUG -COS 1500 - 6000 COS 1500X COS-6000X ",
    description: "  ",
  },
  {
    image: DMV15Image,
    title: " 188  # CLEAN OUT PLUG - COSH 2000 - COSH 4000 ",
    description: "  ",
  },
  {
    image: DMV16Image,
    title: " 189  # TEE BATH WASTE - TBW 150 - TBW 311S ",
    description: "  ",
  },
  {
    image: DMV17Image,
    title: " 190  # BATH WASTE - LBW 150 - LSD 150 - TBW 731-317L ",
    description: "  ",
  },
  {
    image: DMV18Image,
    title: " 191   # URINAL & CLOSET SPUT - SP 5 - SP 76 ",
    description: "  ",
  },
];

const DMV = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST “DWV” FITTINGS</h2>
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

export default DMV;
