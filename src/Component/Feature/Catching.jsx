import { Link } from "react-router-dom";

const Catching = () => {
  return (
    <section>
      <div className="container mx-auto flex px-14">
        <div className="flex w-full">
          <div className="mb-8 2xl:w-[40%] xl:w-[40%] md:w-[40%] lg:w-[40%] sm:w-full w-full">
            <h6 className="text-lg text-brand font-Montserrat font-medium">
              Newsletter Solutions
            </h6>
            <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-primary font-NunitoFont my-4 w-[90%]">
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
        </div>
      </div>
    </section>
  );
};

export default Catching;
