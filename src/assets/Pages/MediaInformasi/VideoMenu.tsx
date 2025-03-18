import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const VideoMenu = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-white text-black text-4xl p-10">
        <h1>Video</h1>
        <div className="pl-24 pt-24">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JS_1ovu6v0Q?si=UJ0y02XZXl529jXw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoMenu;
