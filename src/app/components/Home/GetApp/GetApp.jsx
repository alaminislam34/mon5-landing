import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const GetApp = () => {
  return (
    <section className="relative my-24">
      <div className="absolute top-0 lg:-top-130 right-0 border max-h-150 -z-10000 blur-2xl">
        <Image
          src={"/images/circle.png"}
          height={800}
          width={1500}
          alt="Circle animation"
          className="w-full rotate-130 bg-bottom border border-white scale-75"
        />
      </div>
      <section className="max-w-380 mx-auto w-11/12">
        <div className="flex flex-col md:flex-row items-center lg:max-w-6xl">
          <div className="flex items-center justify-center">
            <Image
              src={"/images/app.png"}
              height={800}
              width={1200}
              alt="App image"
              className="md:max-w-90 lg:max-w-100"
            />
          </div>
          <div className="space-y-4 flex flex-col">
            <SectionTitle
              title={"Get This app on"}
              colorTitle={"Apple & Google play store after launching"}
              left={"left"}
            />
            <p className="text-lg md:text-xl lg:text-2xl font-galdeano text-Base">
              Everything you need to know about Mon5Majeur and how it works
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-row items-center gap-4 sm:gap-6 my-4"
            >
              <Image
                src={"/images/google-play.png"}
                height={200}
                width={500}
                alt="Google play"
                className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto cursor-pointer"
              />
              <Image
                src={"/images/app-store.png"}
                height={200}
                width={500}
                alt="App Store"
                className="h-10 sm:h-14 md:h-16 hover:opacity-90 transition-opacity bg-dark/50 rounded-lg w-auto cursor-pointer"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="10"
              data-aos-delay="200"
              data-aos-duration="1200"
              className="py-4 flex relative z-20 my-4"
            >
              <a
                href="#launch"
                className="py-3 px-6 rounded-lg bg-linear-to-r from-primary1 to-primary2 text-white font-semibold flex items-center flex-row gap-2 relative z-50 cursor-pointer"
              >
                Get Launching Notifications
                <BsArrowUpRightSquareFill />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="absolute bottom-0 md:top-0 -right-40 md:-right-20 -z-110 "
        >
          <Image
            src={"/images/throughBall.jpg"}
            height={800}
            width={1200}
            alt="Player Through ball"
            className="max-w-180 opacity-50 lg:opacity-100"
          />
        </div>
      </section>
    </section>
  );
};

export default GetApp;
