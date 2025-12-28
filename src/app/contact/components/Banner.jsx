import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-380 mx-auto min-h-120 md:min-h-130 lg:min-h-180 xl:min-h-200 flex items-center bg-cover bg-center relative z-10">
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          className="absolute top-10 md:top-20 -left-40 md:left-20 lg:left-80 lg:top-40 z-0"
        >
          <Image
            src={"/images/animation.png"}
            width={1500}
            height={800}
            alt="Hand image"
            className="opacity-60 md:opacity-100 w-full max-w-120 lg:max-w-150"
            priority
          />
        </div>

        <div className="flex items-center mt-20 h-full relative z-20 px-4">
          <div className="space-y-8 lg:max-w-7xl w-full">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white"
            >
              CONTACT US
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
              className="sm:text-lg md:text-xl max-w-4xl md:max-w-2xl text-white"
            >
              Effective Date: 26/11/2025
            </p>
          </div>
        </div>
        <div className="w-80 lg:w-100 lg:h-100 h-80 bg-linear-to-br from-primary1/10 via-primary1/20 to-primary2/50 blur-[100px] absolute lg:blur-[250px] lg:top-30 lg:left-30 left-0 top-0"></div>
      </div>
    </section>
  );
}

export default Banner;
