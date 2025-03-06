import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const VisiMisi = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header />
      <div className="text-gray-500 pl-20 pt-6">
        <h1 className="text-black text-4xl">Visi dan Misi</h1>
        <div className="text-center pb-30 pt-20">
          <h2 className="text-lg font-semibold">VISI DAN MISI</h2>
          <h2 className="text-lg font-semibold">PT EVER AGE VALVES METALS</h2>
          <h2 className="text-lg font-semibold pb-10">PERIODE 2024 - 2025</h2>
          <h3 className="text-lg font-medium">VISI :</h3>
          <p>-</p>
          <p>
            --------------------------------------------------------------------------------------------------------
          </p>
          <h3 className="text-lg pb-2 font-medium">MISI :</h3>
          <p className="text-sm pb-3">
            1. KEPUASAN PELANGGAN ADALAH TUJUAN UTAMA KAMI .
          </p>
          <p className="text-sm pb-3">
            2. DEMI MEMAJUKAN PERUSAHAAN MELALUI PEMENUHAN
          </p>
          <p className="text-sm pb-3">
            3. PERSYARATAN DENGAN KUALITAS YANG BAIK DAN AMAN BAGI PENGGUNANYA
            SERTA PENINGKATAN YANG BERKESINAMBUNGAN
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisiMisi;
