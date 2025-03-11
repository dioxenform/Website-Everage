import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import HouseBibb1Image from "../../Images/123.jpg";
import HouseBibb2Image from "../../Images/124.jpg";
import HouseBibb3Image from "../../Images/125.jpg";
import HouseBibb4Image from "../../Images/126.jpg";
import HouseBibb5Image from "../../Images/127.jpg";
import HouseBibb6Image from "../../Images/128.jpg";
import HouseBibb7Image from "../../Images/129.jpg";
import HouseBibb8Image from "../../Images/130.jpg";
import HouseBibb9Image from "../../Images/131.jpg";
import HouseBibb10Image from "../../Images/132.jpg";
import HouseBibb11Image from "../../Images/133.jpg";
import HouseBibb12Image from "../../Images/134.jpg";
import HouseBibb13Image from "../../Images/135.jpg";
import HouseBibb14Image from "../../Images/136.jpg";
import HouseBibb15Image from "../../Images/137.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: HouseBibb1Image,
    title: " 123 # HOSE BIBB VALVES - HB 38 - HB 39 ",
    description: "  ",
  },
  {
    image: HouseBibb2Image,
    title: " 124  # HOSE BIBB VALVES WITH COMP. NUT - HB 38 C ",
    description: "  ",
  },
  {
    image: HouseBibb3Image,
    title: " 125  # HOSE BIBB VALVES HEAVY - HB 145 - HB 146 ",
    description: "  ",
  },
  {
    image: HouseBibb4Image,
    title: " 126  # HOSE BIBB VALVES HEAVY DUTY WITH COMP. NUT - HB 145 C ",
    description: "  ",
  },
  {
    image: HouseBibb5Image,
    title: "127  # HOSE BIBB - NO KINK - HB 40 - HB 44  ",
    description: "  ",
  },
  {
    image: HouseBibb6Image,
    title: " 128  # HOSE BIBB - NO KINK WITH COMP. NUT - HB 45 ",
    description: "  ",
  },
  {
    image: HouseBibb7Image,
    title: " 129  # HOSE BIBB - NO KINK VALVE HEAVY DUTY - HBH 40 - HBH 44 ",
    description: "  ",
  },
  {
    image: HouseBibb8Image,
    title:
      " 130  # HOSE BIBB - NO KINK VALVE HEAVY DUTY WITH COMP. NUT - HBH 45 - HBH 45 A ",
    description: "  ",
  },
  {
    image: HouseBibb9Image,
    title:
      " 131 # HOSE BIBB - NO KINK VALVE HEAVY DUTY WITH VACUUM BREAKER - HBH 40 VB - HBH 44 VB ",
    description: "  ",
  },
  {
    image: HouseBibb10Image,
    title:
      " 132  # HOSE BIBB - NO KINK VALVE HEAVY DUTY WITH COMP. NUT &  VACUUM BREAKER - HBH 45 VB ",
    description: "  ",
  },
  {
    image: HouseBibb11Image,
    title:
      " 133  # HOSE BIBB - NO KINK VALVE HEAVY DUTY WITH LOOSE KEY HANDLE - HBH 40 K - HBH 44 K ",
    description: "  ",
  },
  {
    image: HouseBibb12Image,
    title:
      " 134  # HOSE BIBB - NO KINK VALVE HEAVY DUTY WITH COMP. NUT & LOOSE KEY HANDLE - HBH 45 K ",
    description: "  ",
  },
  {
    image: HouseBibb13Image,
    title: " 135  # HOSE BIBB VALVES SINGLE BASIN - HB 64 - HB 67 ",
    description: "  ",
  },
  {
    image: HouseBibb14Image,
    title: " 136  # HOSE BIBB VALVE HEAVY DUTY - HBH 38 - HBH 39 ",
    description: "  ",
  },
  {
    image: HouseBibb15Image,
    title:
      " 137  # HOSE BIBB VALVE HEAVY DUTY WITH LOOSE KEY HANDLE - HBH 38 K - HBH 39 K ",
    description: "  ",
  },
];

const HouseBibb = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST HOSE BIBB VALVES</h2>
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

export default HouseBibb;
