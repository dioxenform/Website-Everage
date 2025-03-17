import { FocusCards } from "../../Components/focus-card";
import PabrikAnggotaOne from "../../Images/Pabrikanggota1.jpg";
import PabrikAnggotaTwo from "../../Images/Pabrikanggota2.jpg";
import PabrikAnggotaThree from "../../Images/Pabrikanggota3.jpg";
import PabrikAnggotaFour from "../../Images/Pabrikanggota4.jpg";
import PabrikAnggotaFive from "../../Images/Pabrikanggota5.jpg";
import PabrikAnggotaSix from "../../Images/Pabrikanggota6.jpg";
import PabrikAnggotaSeven from "../../Images/Pabrikanggota7.jpg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export function Gallery() {
  const cards = [
    {
      title: "Foto 1 ",
      src: PabrikAnggotaOne,
    },
    {
      title: "Foto 2 ",
      src: PabrikAnggotaTwo,
    },
    {
      title: "Foto 3 ",
      src: PabrikAnggotaThree,
    },
    {
      title: "Foto 4 ",
      src: PabrikAnggotaFour,
    },
    {
      title: "Foto 5 ",
      src: PabrikAnggotaFive,
    },
    {
      title: "Foto 6 ",
      src: PabrikAnggotaSix,
    },
    {
      title: "Foto 7 ",
      src: PabrikAnggotaSeven,
    },
  ];
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-white text-black text-4xl p-10">
        <h1>Gallery</h1>
        <FocusCards cards={cards} />
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
