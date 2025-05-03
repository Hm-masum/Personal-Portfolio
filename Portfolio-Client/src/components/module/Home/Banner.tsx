import img from "../../../assets/masum.png";
import { RiDownload2Fill } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-10 px-4 md:px-10 text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5">
        <div className="md:w-1/2 space-y-2 md:space-y-4">
          <h3 className="md:text-2xl font-semibold">Hi, I am</h3>
          <h2 className="md:text-5xl text-2xl text-yellow-600 font-semibold">
            Habibullah Mohammad Masum
          </h2>
          <p>A Web developer and competitive programmer.</p>

          <div className="space-x-3 font-semibold flex">
            <a
              href="/assets/resume.pdf"
              download
              className="p-3 border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black text-yellow-600 flex items-center gap-1"
            >
              <RiDownload2Fill className="text-xl" /> Download CV
            </a>
            <Link
              href={`/contact`}
              className="p-3 rounded-lg bg-yellow-600 hover:bg-black hover:text-white flex items-center gap-1"
            >
              <LuPhone className="text-xl" /> Contact Me
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center md:ml-16 relative">
          <Image src={img} className="w-[200px] md:w-[370px]" alt="" />
          <div className="absolute -right-8 md:right-10 bottom-0">
            <div className="flex flex-col items-center space-y-3 w-[50px]">
              <p className="border border-yellow-700 h-16"></p>
              <Link href="https://www.facebook.com/profile.php?id=100004515194784">
                <FaFacebook className="text-2xl text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/habibullah-mohammad-masum-87049b1ab">
                <FaLinkedin className="text-2xl text-white" />
              </Link>
              <Link href="https://wa.me/01817267861">
                <IoLogoWhatsapp className="text-2xl text-white" />
              </Link>
              <Link href="https://github.com/Hm-masum">
                <FaGithub className="text-2xl text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
