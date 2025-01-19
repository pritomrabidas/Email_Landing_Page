import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

const Banner = ({Heading,para,menu}) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="e-con-inner">
          <div className="e-con-full flex flex-col items-center">
            {/* Heading Section */}
            <div className="py-2 justify-center mx-auto text-center w-[70%]">
              <h2 className=" 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-primary font-Montserrat my-4">
                {Heading}
              </h2>
              <p className=" 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-sm 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[80%] sm:w-[85%] w-[95%] text-primary font-Opensans font-normal text-center mx-auto flex">
                {para}
              </p>
            </div>

            {/* Breadcrumb Section */}
            <div className="py-5 ">
              <ul className=" items-center text-primary text-base justify-center  flex">
                <Link to="/"className="mr-2 text-brand">
                    Home
                </Link>
                  <IoChevronForwardOutline  />
                <li className="pl-2">{menu}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
