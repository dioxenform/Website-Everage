import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import QuarterTurn1Image from "../../Images/138.jpg";
import QuarterTurn2Image from "../../Images/139.jpg";
import QuarterTurn3Image from "../../Images/140.jpg";
import QuarterTurn4Image from "../../Images/141.jpg";
import QuarterTurn5Image from "../../Images/142.jpg";
import QuarterTurn6Image from "../../Images/143.jpg";
import QuarterTurn7Image from "../../Images/144.jpg";
import QuarterTurn8Image from "../../Images/145.jpg";
import QuarterTurn9Image from "../../Images/146.jpg";
import QuarterTurn10Image from "../../Images/147.jpg";
import QuarterTurn11Image from "../../Images/148.jpg";
import QuarterTurn12Image from "../../Images/149.jpg";
import QuarterTurn13Image from "../../Images/150.jpg";
import QuarterTurn14Image from "../../Images/151.jpg";
import QuarterTurn15Image from "../../Images/152.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: QuarterTurn1Image,
    title: " 138  # SILLCOCK (BALL OPERATED) MVB 28 - MVB 31 ",
    description: "  ",
  },
  {
    image: QuarterTurn2Image,
    title:
      " 139  # SILLCOCK (BALL OPERATED) WITH BUTTERFLY HANDLE - MVB 28 BF - MVB 31 BF ",
    description: "  ",
  },
  {
    image: QuarterTurn3Image,
    title: " 140  # SILLCOCK BALL VALVE -MVB 32P-MVB33P MVB 32PW- MVB33PW ",
    description: "  ",
  },
  {
    image: QuarterTurn4Image,
    title: " 141  # HOSE BIBB (BALL OPERATED) - MVB 38 - MVB 38 C ",
    description: "  ",
  },
  {
    image: QuarterTurn5Image,
    title:
      " 142  # HOSE BIBB (BALL OPERATED) WITH BUTTERFLY HANDLE - MVB 38 BF - MVB 38 C BF ",
    description: "  ",
  },
  {
    image: QuarterTurn6Image,
    title: " 143  # HOSE BIBB - NO KINK (BALL OPERATED) - MVB 40 - MVB 45 ",
    description: "  ",
  },
  {
    image: QuarterTurn7Image,
    title:
      " 144  # HOSE BIBB - NO KINK (BALL OPERATED) WITH BUTTERFLY HANDLE - MVB 40 BF - MVB 45 BF ",
    description: "  ",
  },
  {
    image: QuarterTurn8Image,
    title:
      " 145  # HOSE BIBB (BALL OPERATED) WITH BUTTERFLY HANDLE - MVB 64-65 BF - MVB 64-65 ",
    description: "  ",
  },
  {
    image: QuarterTurn9Image,
    title: " 146  # BOILER DRAIN BALL VALVES - MVBS 19 - MVBS 24 A ",
    description: "  ",
  },
  {
    image: QuarterTurn10Image,
    title: " 147  # SILLCOCK BALL VALVES - MVBS 28 - MVBS 30 A ",
    description: "  ",
  },
  {
    image: QuarterTurn11Image,
    title: "148  # HOSE BIBB BALL VALVES - MVBS 38 - MVBS 38 C ",
    description: "  ",
  },
  {
    image: QuarterTurn12Image,
    title: " 149 # SILLCOCK BALL VALVES WITH PEX AND PW ",
    description: "  ",
  },
  {
    image: QuarterTurn13Image,
    title: " 150  # NO - KINK BALL VALVES - MVBS 40 - MVBS 45 ",
    description: "  ",
  },
  {
    image: QuarterTurn14Image,
    title:
      " 151  # WALL FAUCET VACUUM BREAKER WITH BALL VALVE OPERATED - MFBV 92 - MFBV 93 ",
    description: "  ",
  },
  {
    image: QuarterTurn15Image,
    title:
      " 152  # WALL FAUCET VACUUM BREAKER LOOSE KEY WITH BALL VALVE OPERATED - MFBV 92 K - MFBV 93 K ",
    description: "  ",
  },
];

const QuarterTurn = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST QUARTER TURN VALVES</h2>
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

export default QuarterTurn;
