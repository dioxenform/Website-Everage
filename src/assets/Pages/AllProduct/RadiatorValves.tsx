import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import RadiatorValves1Image from "../../Images/52.jpg";
import RadiatorValves2Image from "../../Images/53.jpg";
import RadiatorValves3Image from "../../Images/54.jpg";
import RadiatorValves4Image from "../../Images/55.jpg";
import RadiatorValves5Image from "../../Images/56.jpg";
import RadiatorValves6Image from "../../Images/57.jpg";
import RadiatorValves7Image from "../../Images/58.jpg";
import RadiatorValves8Image from "../../Images/59.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: RadiatorValves1Image,
    title: " 52 # STEAM RADIATOR ANGLE VALVES - RV, RVT 4242 - RV, RVT 4247 ",
    description: "  ",
  },
  {
    image: RadiatorValves2Image,
    title: " 53 # CONVECTOR ANGLE VALVES - RV 4254 - RV 4255 ",
    description: "  ",
  },
  {
    image: RadiatorValves3Image,
    title: " 54 # RADIATOR GATE VALVES - RV 4262 - RV 4267 ",
    description: "  ",
  },
  {
    image: RadiatorValves4Image,
    title:
      " 55 # HOT WATER RADIATOR ANGLE GLOBE VALVES WITH SOFT SEAT - RV 4272 H - RV 4277 H ",
    description: "  ",
  },
  {
    image: RadiatorValves5Image,
    title:
      " 56 # HOT WATER RADIATOR ANGLE VALVES WITH HARD SEAT - RV 4272 - 4276 - RV 4282 - 4284 ",
    description: "  ",
  },
  {
    image: RadiatorValves6Image,
    title:
      " 57 # UNION ELBOW RADIATOR VALVES - RV 4291- 4295 - RV 4302 - 4303 ",
    description: "  ",
  },
  {
    image: RadiatorValves7Image,
    title: " 58 # ADAPTER UNION - RV 4222-4227-4232-4237-4212-4219 ",
    description: "  ",
  },
  {
    image: RadiatorValves8Image,
    title: " 59 # METER & WASTE VALVES - RV 44132 - 44144 - RV 44232 - 44244 ",
    description: "  ",
  },
];

const RadiatorValves = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST RADIATOR VALVES</h2>
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

export default RadiatorValves;
