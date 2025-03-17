import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import HeaderForList from "../../Components/HeaderForList";
import MainCard from "../../Components/MainCard";
import PressFittings1Image from "../../Images/338.jpg";
import PressFittings2Image from "../../Images/338.jpg";
import PressFittings3Image from "../../Images/338.jpg";
import PressFittings4Image from "../../Images/338.jpg";
import PressFittings5Image from "../../Images/338.jpg";
import PressFittings6Image from "../../Images/338.jpg";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: PressFittings1Image,
    title: " 338 PRESS CONNECTION N2PR-N7PR & N-PR-2 N-PR-3 ",
    description: "  ",
  },
  {
    image: PressFittings2Image,
    title: " 339 SWING CHECK VALVE PRESSURE CV2NPR-CV7NPR ",
    description: "  ",
  },
  {
    image: PressFittings3Image,
    title: " 340  Ball Valves Pressure BV2NPR-BV7NPR ",
    description: "  ",
  },
  {
    image: PressFittings4Image,
    title: " 341 GATE VALVE PRESS CONNECTION GV2NPR-GV7NPR ",
    description: "  ",
  },
  {
    image: PressFittings5Image,
    title: " 342 FROST FREE SILLCOCK PRESS CONNECTION ",
    description: "  ",
  },
  {
    image: PressFittings6Image,
    title: " 343 # Y - STRAINER - STY 0 NPR - STY 9 NPR ",
    description: "  ",
  },
];

const PressFittings = () => {
  return (
    <div>
      <div className="bg-white text-black ">
        <Header />
        <HeaderForList />
        <h2 className="text-center pt-20 text-3xl">LIST PRESS FITTINGS</h2>
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

export default PressFittings;
