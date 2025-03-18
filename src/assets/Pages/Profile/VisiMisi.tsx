import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const VisiMisi = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header />
      <div className="text-gray-500 pl-20 pt-6">
        <h1 className="text-black text-4xl">Vission & Mission</h1>
        <div className="text-center pb-30 pt-20">
          <h2 className="text-lg font-semibold">VISSION AND MISSION</h2>
          <h2 className="text-lg font-semibold">PT EVER AGE VALVES METALS</h2>
          <h2 className="text-lg font-semibold pb-10">PERIOD 2024 - 2025</h2>
          <h3 className="text-lg font-medium">VISSION :</h3>
          <p>-</p>
          <p>
            --------------------------------------------------------------------------------------------------------
          </p>
          <h3 className="text-lg pb-2 font-medium">MISSION :</h3>
          <p className="text-sm pb-3">
            1. CUSTOMER SATISFACTION IS OUR MAIN GOAL.
          </p>
          <p className="text-sm pb-3">
            2. TO ADVANCE THE COMPANY THROUGH FULFILLMENT
          </p>
          <p className="text-sm pb-3">
            3. OF REQUIREMENTS WITH GOOD AND SAFE QUALITY FOR USERS, AS WELL AS
            CONTINUOUS IMPROVEMENT.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisiMisi;
