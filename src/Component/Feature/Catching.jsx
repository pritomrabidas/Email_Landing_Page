import { Link } from "react-router-dom";
import { MdOutlineComputer } from "react-icons/md";
import { GiSpikeball } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { GrFan } from "react-icons/gr";

const Catching = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex px-14">
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col w-full items-center">
          <div className="my-8 2xl:w-[40%] xl:w-[40%] md:w-[60%] lg:w-[40%] sm:w-full w-full">
            <h6 className="text-lg text-brand font-Montserrat font-medium">
              Newsletter Solutions
            </h6>
            <h2 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-primary font-NunitoFont my-4 w-[90%]">
              Create eye-catching emails{" "}
              <span className="text-blue-500">in minutes</span>
            </h2>
            <p className="text-[15px] 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[80%] w-[90%] text-primary font-Opensans font-normal flex pb-5">
              Access a vast collection of professionally designed newsletter
              templates and unlock the power of our newsletter library.
            </p>
            <Link to="">
              <button className="font-Monrope font-normal text-[#fff] 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs bg-brand px-8 py-5 rounded-md scale-95 hover:scale-100 duration-200">
                Get started for free
              </button>
            </Link>
          </div>
          <div className="2xl:w-[60%] xl:w-[60%] md:w-[40%] lg:w-[60%] sm:w-[80%] w-[90%] gap-5 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
            <div className="p-5 h-fit bg-[#fb9d5065] w-fit rounded-md">
              <MdOutlineComputer className="text-5xl text-brand" />
              <h4 className="font-medium font-NunitoFont text-primary text-xl py-2">
                Internet of Things
              </h4>
              <p className="font-normal font-Opensans text-primary text-base w-[90%]">
                Discover how seamless intergration of data empowers smarter
                decisions
              </p>
            </div>
            <div className="p-5 h-fit bg-[#fb9d5065] w-fit rounded-md">
              <GiSpikeball className="text-5xl text-brand" />
              <h4 className="font-medium font-NunitoFont text-primary text-xl py-2">
                Fintech & Banking
              </h4>
              <p className="font-normal font-Opensans text-primary text-base w-[90%]">
                Discover how seamless intergration of data empowers smarter
                decisions
              </p>
            </div>
            <div className="p-5 h-fit bg-[#fb9d5065] w-fit rounded-md">
              <CiLight className="text-5xl text-brand" />
              <h4 className="font-medium font-NunitoFont text-primary text-xl py-2">
                Energy & Environment
              </h4>
              <p className="font-normal font-Opensans text-primary text-base w-[90%]">
                Discover how seamless intergration of data empowers smarter
                decisions
              </p>
            </div>
            <div className="p-5 h-fit bg-[#fb9d5065] w-fit rounded-md">
              <GrFan className="text-5xl text-brand" />
              <h4 className="font-medium font-NunitoFont text-primary text-xl py-2">
                Smart & Manufacturing
              </h4>
              <p className="font-normal font-Opensans text-primary text-base w-[90%]">
                Discover how seamless intergration of data empowers smarter
                decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catching;
