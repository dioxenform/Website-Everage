import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import PopUpDrains1Image from "../../Images/196.jpg";
import PopUpDrains2Image from "../../Images/197.jpg";
import PopUpDrains3Image from "../../Images/198.jpg";
import PopUpDrains4Image from "../../Images/199.jpg";
import PopUpDrains5Image from "../../Images/200.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: PopUpDrains1Image,
    title: " 196  # POP UP DRAIN - PU 1 - PU 1 UPC   ",
    description: "  ",
  },
  {
    image: PopUpDrains2Image,
    title: " 197  # POP UP WITHOUT KNOB - PU 4 ",
    description: "  ",
  },
  {
    image: PopUpDrains3Image,
    title: " 198  # POP UP - PU 7 ",
    description: "  ",
  },
  {
    image: PopUpDrains4Image,
    title: " 199  # TEE POP UP - TPU 5 ",
    description: "  ",
  },
  {
    image: PopUpDrains5Image,
    title: " 200 # RISE GRAVITY POP UP - F 12 - Q 15 - RPU 150-175 ",
    description: "  ",
  },
];

const PopUpDrains = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST POP UP DRAINS</h2>
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

export default PopUpDrains;
