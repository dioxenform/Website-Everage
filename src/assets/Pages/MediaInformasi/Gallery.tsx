import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import PabrikAnggotaOne from "../../Images/Pabrikanggota1.jpg";
import PabrikAnggotaTwo from "../../Images/Pabrikanggota2.jpg";
import PabrikAnggotaThree from "../../Images/Pabrikanggota3.jpg";
import PabrikAnggotaFour from "../../Images/Pabrikanggota4.jpg";
import PabrikAnggotaFive from "../../Images/Pabrikanggota5.jpg";
import PabrikAnggotaSix from "../../Images/Pabrikanggota6.jpg";
import PabrikAnggotaSeven from "../../Images/Pabrikanggota7.jpg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import React from "react";
import CardTwo from "../../Components/CardTwo";

type Pekerja = {
  image: string;
  title: string;
  description: string;
};
const Pekerjas: Pekerja[] = [
  {
    image: PabrikAnggotaOne,
    title: "Photos 1",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
  {
    image: PabrikAnggotaTwo,
    title: "Photos 2",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
  {
    image: PabrikAnggotaThree,
    title: "Photos 3",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
  {
    image: PabrikAnggotaFour,
    title: "Photos 4",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
  {
    image: PabrikAnggotaFive,
    title: "Photos 5",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
  {
    image: PabrikAnggotaSix,
    title: "Photos 6",
    description:
      "Workers who are working diligently.Every worker is working very diligently and enthusiastically without complaining",
  },
];

export const Gallery: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-white p-20">
        <h2 className="text-3xl text-black pb-6">GALLERY</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {Pekerjas.map((pekerja) => (
            <div key={pekerja.title}>
              <CardTwo
                image={pekerja.image}
                title={pekerja.title}
                Description={pekerja.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
