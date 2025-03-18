import { CardSpotlight } from "../../Components/card-spotlight";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function Contact() {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-black">
        <div className="flex flex-col items-center justify-center h-screen">
          <CardSpotlight className="h-96 w-[500px] items-center justify-center">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Contact Us
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Phone: +62 318 977 288
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Email: everage@sby.dnet.id / everagevalvesmetals@gmail.com
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Fax: +62 31 897 7288
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Address: Jl. Raya Sumengko-Gresik Km 30.7, Wringinanom-Gresik
              (61176) - Jawa Timur
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              <a
                href="https://maps.app.goo.gl/VmR63LYrrmGrnxRdA"
                target="_blank"
                className="hover:text-gray-600 transition-all duration-150 ease-in-out hover:translate-x-1 hover:text-base flex justify-center"
              >
                Click Here to Search Our Location On Google Map .
              </a>
            </p>
          </CardSpotlight>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
