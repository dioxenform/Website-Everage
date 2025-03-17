import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainCard from "../Components/MainCard";
import ProductEverageOne from "../Images/everage1.jpg";
import ProductEverageTwo from "../Images/everage2.jpg";
import ProductEverageThree from "../Images/everage3.jpg";
import ProductEverageFour from "../Images/everage4.jpg";
import ProductEverageFive from "../Images/everage5.jpg";
import PabrikAnggotaOne from "../Images/Pabrikanggota1.jpg";
import PabrikAnggotaTwo from "../Images/Pabrikanggota2.jpg";
import PabrikAnggotaThree from "../Images/Pabrikanggota3.jpg";
import PabrikAnggotaFour from "../Images/Pabrikanggota4.jpg";
import PabrikAnggotaFive from "../Images/Pabrikanggota5.jpg";
import PabrikAnggotaSix from "../Images/Pabrikanggota6.jpg";
import PabrikAnggotaSeven from "../Images/Pabrikanggota7.jpg";
import CampaignIcon from "@mui/icons-material/Campaign";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Product = {
  image: string;
  title: string;
  description: string;
};
const Products: Product[] = [
  {
    image: ProductEverageOne,
    title: ' ANGLE GLOBE VALVES "PART KIT" ',
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non mauris dapibus, ultrices enim sed, volutpat sapien. Nulla consequat dui quam, aliquam feugiat ex laoreet ac. In a hendrerit dolor. Cras eleifend ante sit amet magna interdum scelerisque.",
  },
  {
    image: ProductEverageTwo,
    title: 'FROST FREE SILLCOCKS "PART KIT',
    description:
      "Mauris quis est eget tellus finibus venenatis a in dui. Nunc dapibus turpis ac imperdiet auctor. Sed ex sapien, elementum sit amet ligula ut, hendrerit accumsan dui. Suspendisse at risus eget risus bibendum rhoncus. Vestibulum faucibus ipsum odio, vel vulputate diam volutpat maximus.",
  },
  {
    image: ProductEverageThree,
    title: "CROSS HANDLE",
    description:
      "Proin lobortis scelerisque tortor. Maecenas eleifend molestie urna sit amet maximus. Phasellus ornare nisl nunc, ac posuere nunc pretium ut. Aenean interdum felis non tellus pulvinar finibus. Pellentesque diam quam, semper at massa eu, mollis scelerisque elit.",
  },
  {
    image: ProductEverageFour,
    title: "ELLIPSE HANDLE",
    description:
      "Praesent ac magna dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    image: ProductEverageFive,
    title: "ACRELIC HANDLE",
    description:
      "Proin congue ornare massa, vitae bibendum libero. Donec tincidunt sit amet sem vitae aliquet. Quisque finibus tellus urna, sed pulvinar magna interdum quis.",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="text-black text-3xl p-10">
        <h1 className="mb-4 text-center text-3xl font-roboto content-none before:flex-1 before:border-b-black after:flex-1 after:border-b-black ">
          <strong>RELATED</strong> PHOTOS
        </h1>

        <div className="flex flex-nowarp rounded-box carousel-center gap-4 carousel">
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaOne}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaTwo}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaThree}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaFour}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaFive}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaSix}
              alt=""
            />
          </ImageZoom>
          <ImageZoom>
            <img
              className="w-[180px] h-[180px]"
              src={PabrikAnggotaSeven}
              alt=""
            />
          </ImageZoom>
        </div>
        <h2 className="text-black text-center text-lg font-medium">
          Slide to see other products.
        </h2>
        <h2 className="pt-10">
          EXAMPLES OF LATEST <strong>PRODUCTS </strong>
        </h2>
      </div>
      <div className="flex-grow flex justify-center items-center mt-20">
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
      <div className="pl-24 pt-24 flex justify-between pb-20">
        <div>
          <h2 className="text-black text-3xl font-roboto pb-4">ANNOUNCEMENT</h2>
          <p className="text-gray-500 text-sm">
            <CampaignIcon /> SMOKING IS STRICTLY PROHIBITED
          </p>
          <p className="text-gray-500 text-sm">
            <CampaignIcon /> CHECKLOGS MUST NOT BE BROUGHT IN
          </p>
          <p className="text-gray-500 text-sm">
            <CampaignIcon /> VISITORS MUST ASK PERMISSION FROM SECURITY / GUARD
          </p>
        </div>
        <div className="pr-80">
          <h2 className="text-black text-3xl">
            ACTIVITY <strong>AGENDA</strong>
          </h2>
          <p className="text-gray-500 pt-4 text-sm">
            FOR NOW, THERE ARE NO ACTIVITIES PLANNED
          </p>
        </div>
      </div>
      <div className="pl-24 pt-24">
        <h2 className="text-black text-3xl pb-4">
          GALERY <strong> VIDEO</strong>
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JS_1ovu6v0Q?si=qflLFrf3H-VJ_RBV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="pb-6"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
