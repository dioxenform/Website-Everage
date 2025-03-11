import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import Sillcockalves1Image from "../../Images/109.jpg";
import Sillcockalves2Image from "../../Images/110.jpg";
import Sillcockalves3Image from "../../Images/111.jpg";
import Sillcockalves4Image from "../../Images/112.jpg";
import Sillcockalves5Image from "../../Images/113.jpg";
import Sillcockalves6Image from "../../Images/114.jpg";
import Sillcockalves7Image from "../../Images/115.jpg";
import Sillcockalves8Image from "../../Images/116.jpg";
import Sillcockalves9Image from "../../Images/117.jpg";
import Sillcockalves10Image from "../../Images/118.jpg";
import Sillcockalves11Image from "../../Images/119.jpg";
import Sillcockalves12Image from "../../Images/120.jpg";
import Sillcockalves13Image from "../../Images/121.jpg";
import Sillcockalves14Image from "../../Images/122.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: Sillcockalves1Image,
    title: " 109 # SILLCOCK VALVES - MV 28 - MV 31 ",
    description: "  ",
  },
  {
    image: Sillcockalves2Image,
    title: " 110 # SILLCOCK VALVES - MB 28 - MB 31 ",
    description: "  ",
  },
  {
    image: Sillcockalves3Image,
    title: " 111 # SILLCOCK VALVES - MB 28 B - MB 31 B ",
    description: "  ",
  },
  {
    image: Sillcockalves4Image,
    title: " 112 # SILLCOCK VALVES - MV 282 - MV 282 PX ",
    description: "  ",
  },
  {
    image: Sillcockalves5Image,
    title: " 113 # SILLCOCK VALVES WITH O-RING - MVO - MVON 28 - 31 ",
    description: "  ",
  },
  {
    image: Sillcockalves6Image,
    title:
      " 114 # SILLCOCK VALVES WITH PEX - MV 32 PX - MV 33 PFO &PWFO  MV 32 PWFOVB  MV 33 PWVOVB ",
    description: "  ",
  },
  {
    image: Sillcockalves7Image,
    title: " 115  # SILLCOCK VALVES HEAVY DUTY 28-31 ",
    description: "  ",
  },
  {
    image: Sillcockalves8Image,
    title: " 116 # SILLCOCK VALVES WITH  MV 32 PWFOVB  MV 33 PWVOVB ",
    description: "  ",
  },
  {
    image: Sillcockalves9Image,
    title: " 117  # SILLCOCK VALVES HEAVY DUTY - HBH 28A-31A ",
    description: "  ",
  },
  {
    image: Sillcockalves10Image,
    title:
      " 118 # SILLCOCK VALVES HEAVY DUTY WITH VACUUM BREAKER - HBH 28 VB -31VB ",
    description: "  ",
  },
  {
    image: Sillcockalves11Image,
    title:
      " 119 # SILLCOCK VALVES HEAVY DUTY WITH VACUUM BREAKER HBH 28AVB - HBH 31AVB ",
    description: "  ",
  },
  {
    image: Sillcockalves12Image,
    title:
      " 120 # SILLCOCK VALVES HEAVY DUTY WITH LOOSE KEY HANDLE - HBH 28K -31K ",
    description: "  ",
  },
  {
    image: Sillcockalves13Image,
    title:
      " 121 # SILLCOCK VALVES HEAVY DUTY WITH LOOSE KEY HANDLE -HBH 28AK HBH 31AK ",
    description: "  ",
  },
  {
    image: Sillcockalves14Image,
    title: " 122 # SILLCOCK VALVES HEAVY DUTY - HBH 32AP HBH 33APW ",
    description: "  ",
  },
];

const SillcockValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST SillCock VALVES</h2>
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

export default SillcockValves;
