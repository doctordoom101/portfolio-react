import foto1 from "../../assets/images/foto1.png";
import vector1 from "../../assets/images/vector1.png";
import Footer from "../../components/Footer";

function Hero() {
  return (
    <div className="min-h-screen font-inria lg:h-screen bg-primary pt-[4.9em]">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-5">
          <p className="text-2xl">Hi my name is Defanda Yeremia</p>
          <h1 className="text-6xl md:text-9xl xl my-3 font-bold">I CODE FOR FUN.</h1>
          <p className="text-2xl">Undergraduate Informatics Engineering Student at Esa Unggul University</p>
          <button className="bg-ungu px-4 rounded-lg w-2/4 border border-black mt-3 neu-pressed neu font-semibold py-5">Get My Cv</button>
        </div>
        <div className="relative w-fit mt-8">
          <img
            className="z-20 w-[90%] mx-auto"
            src={vector1}
            alt=""
          />
          <div className="absolute left-10 z-30 bottom-1">
            <img
              className="z-30 w-[90%] mx-auto"
              src={foto1}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
