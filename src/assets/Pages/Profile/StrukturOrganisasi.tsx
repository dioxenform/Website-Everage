import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const StrukturOrganisasi = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header />
      <div className="pl-24 pt-10 font-roboto pb-20">
        <h1 className="text-4xl pb-8 ">Struktur Organisasi</h1>
        <h2 className="text-xl pb-4 ">
          STRUKTUR ORGANISASI PT EVER AGE VALVES METALS
        </h2>
        <p className="text-sm text-gray-500 pb-1">1. DIREKTUR</p>
        <p className="text-sm text-gray-500 pb-1">2. MR</p>
        <p className="text-sm text-gray-500 pb-1">3. KEPALA BAGIAN</p>
        <p className="text-sm text-gray-500 pb-1">4. STAFF</p>
        <p className="text-sm text-gray-500 pb-1">5. OUTSOURCING</p>
      </div>
      <Footer />
    </div>
  );
};

export default StrukturOrganisasi;
