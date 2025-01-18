import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { IoMdCheckmark } from "react-icons/io";

const Banner = () => {
  return (
    <section className="bg-white 2xl:py-20 xl:py-20 lg:py-20 md:py-16 sm:py-14 py-10">
      <div className="container mx-auto px-7 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col ">
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full pt-9 items-center">
          <TypeAnimation
            className="font-Raleway 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold text-primary "
            sequence={[
              "Send stunning",
              1000,
              "Send beautifull",
              1000,
              "Send attractive",
              1000,
              "Send elegant",
              1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <h3 className="font-Raleway 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold text-primary py-3">
            email newsletters
          </h3>
          <p className="font-NunitoFont font-medium 2xl:text-xl xl:text-xl md:text-xl lg:text-xl sm:text-lg text-base text-primary 2xl:w-[80%] lg:w-[80%] md:w-[80%] xl:w-[80%] sm:w-[80%] w-[90%] pb-4">
            Reach more customers and drive engagement with our powerful email
            marketing service.
          </p>
          <Link>
            <button className="font-Monrope font-normal text-[#fff] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs bg-brand px-6 py-3.5 rounded-sm scale-95 hover:scale-100 duration-200">
              Get started for free
            </button>
          </Link>
          <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row  py-5 gap-3">
            <ul className="flex 2xl:justify-center xl:justify-center md:justify-center lg:justify-center sm:justify-center justify-start items-center gap-2">
              <li>
                <IoMdCheckmark className="text-brand text-base" />
              </li>
              <li className="font-Popins font-normal text-primary text-base">
                3-Day Free Trial{" "}
              </li>
            </ul>
            <ul className="flex 2xl:justify-center xl:justify-center md:justify-center lg:justify-center sm:justify-center justify-start items-center gap-2">
              <li>
                <IoMdCheckmark className="text-brand text-base" />
              </li>
              <li className="font-Popins font-normal text-primary text-base">
                No Credit Card{" "}
              </li>
            </ul>
            <ul className="flex 2xl:justify-center xl:justify-center md:justify-center lg:justify-center sm:justify-center justify-start items-center gap-2">
              <li>
                <IoMdCheckmark className="text-brand text-base" />
              </li>
              <li className="font-Popins font-normal text-primary text-base">
                Cancel Anytime{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full pt-2 justify-center flex">
          <img
            src="https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2024/02/landpress-marketing-hero.png"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
