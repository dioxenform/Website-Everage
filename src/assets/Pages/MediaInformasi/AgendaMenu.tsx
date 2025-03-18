import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const AgendaMenu = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-white text-black text-4xl p-10">
        <h1>Agenda</h1>
        <p
          className="flex justify-center text-8xl text-gray-500/60 pointer-events-none mt-40 "
          draggable="false"
        >
          NO ACTIVITY AGENDA
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AgendaMenu;
