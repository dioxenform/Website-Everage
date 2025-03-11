import Gmap from "./Gmap";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-gray-700 font-noto tracking-wider pl-16 pt-16 flex justify-between items-start">
        <div className="w-full">
          <h2 className="text-md font-medium mb-2 text-gray-300">
            LOCATION PT.EVERAGE VALVES METALS
          </h2>
          <Gmap />
        </div>
        <div className="w-1/2 pt-20 pl-8">
          <h2 className="text-md font-medium mb-2 text-gray-300">CONTACT US</h2>
          <div className="text-gray-300">
            <p className="mb-2 text-white">Phone: +62 318 977 288</p>
            <p className="mb-2 text-white">
              Email: everage@sby.dnet.id / everagevalvesmetals@gmail.com
            </p>
            <p className="mb-2 text-white">Fax: +62 31 897 7288</p>
            <p className="mb-2 text-white">
              Address: Jl. Raya Sumengko-Gresik Km 30.7, Wringinanom-Gresik
              (61176) - Jawa Timur
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 h-16">
        <h1 className="flex justify-center text-white py-4 text-sm">
          @2025 Powered by Dio Aditya Saputra
        </h1>
      </div>
    </div>
  );
};

export default Footer;
