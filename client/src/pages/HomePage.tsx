import HomeAccordion from "../components/HomeAccordion";
import MobileAppBar from "../components/MobileAppBar";
import NextBite from "../components/NextBite";
import SearchBar from "../components/SearchBar";



function HomePage() {
  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center relative">
        <div className="w-[1440px]">
          <img
            src="/home/main.png"
            alt="Background"
            className="absolute w-[30rem] h-fit left-1/2 top-1/2 -translate-x-1/2 -translate-y-48 object-cover"
          />
          <div className="relative z-10 flex flex-col items-center -translate-y-1/2 ">
            <h1 className="text-8xl text-[--secondary]">RELISH</h1>
            <p className="mt-2 mb-4 text-xl">
              Life is a combination of magic and pasta.
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className=" p-5 w-full flex justify-center">
        <div className="w-fit">
          <h1 className="text-3xl mb-3 font-medium ">
            What's your next bite? Choose below!
          </h1>
          <NextBite />
        </div>
      </div>
      <div className="w-full bg-white flex justify-center">
        <MobileAppBar />
      </div>
      <div className="w-full justify-center flex">
          <HomeAccordion />

      </div>
    </div>
  );
}

export default HomePage;
