import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

function SocialSection() {
  return (
    <section className="relative min-h-100 flex items-center justify-center">
      <div className="max-w-380 mx-auto w-11/12 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Follow Us on <span className="text-primary1">Social Media</span>
        </h1>
        <div className="*:text-4xl flex items-center gap-6 flex-row justify-center mt-6 ">
          <FaSquareInstagram className="text-primary1" />
          <FaSquareXTwitter className="bg-black shadow" />
          <AiFillTikTok />
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
