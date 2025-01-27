import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Stories = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  const testimonials = [
    {
      text: "This software isn't just a tool; it's my secret weapon for digital success. Totally recommend.",
      name: "Frederic Hill",
      title: "Founder & CEO",
      imgSrc:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2024/02/reviews1.jpg",
      stats: { value: 120, label: "Increase in conversion rates" },
    },
    {
      text: "Real-time analytics helped me optimize my marketing, increasing website traffic.",
      name: "Safaa Sampson",
      title: "Account Executive",
      imgSrc:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2024/02/reviews2.jpg",
      stats: { value: 50, label: "Improvement in client satisfaction" },
    },
    {
      text: "Thanks to this software's marketing tools, my campaigns became laser-focused.",
      name: "Brendan Buck",
      title: "Digital Marketer",
      imgSrc:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2024/02/reviews3.jpg",
      stats: { value: 30, label: "Increase in customer engagement" },
    },
  ];
  return (
    <section className="">
      <div className="container mx-auto w-full py-20 2xl:px-16 xl:px-16 lg:px-16 md:px-6">
        <div className="py-20 justify-center mx-auto text-center w-[70%]">
          <h6
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-2xl text-brand font-Montserrat font-medium"
          >
            Customer Stories
          </h6>
          <h2
            className=" 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-primary font-NunitoFont my-4"
          >
            Success <span className="text-blue-500">stories</span> speak louder
          </h2>
          <p
            className=" 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-sm 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[90%] sm:w-[90%] w-[95%] text-primary font-Opensans font-normal text-center mx-auto flex"
          >
            The best way to showcase our commitment is through the experiences
            and stories of those who have partnered with us.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[80%] justify-center mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-md border gap-5 p-2 rounded-md m-2"
            >
              <div className="flex items-center pt-4 pb-2 gap-4">
                <img
                  className="2xl:w-16 xl:w-16 lg:w-18 md:w-12 sm:w-10 w-8 2xl:h-16 xl:h-16 lg:h-18 md:h-12 sm:h-10 h-8 rounded-full"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                />
                <div>
                  <h5 className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-base sm:text-lg text-lg font-NunitoFont text-brand font-bold">
                    {testimonial.name}
                  </h5>
                  <p className="2xl:text-lg xl:text-lg md:text-sm lg:text-lg sm:text-sm text-sm font-NunitoFont text-primary font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="2xl:text-base xl:text-base lg:text-base md:text-sm  sm:text-xs text-sm font-Opensans text-primary font-normal w-[95%]">
                {testimonial.text}
              </p>
              <hr className="w-1/2 border-gray-300" />
              <div>
                <span className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl font-NunitoFont font-bold text-secandari">
                  +{testimonial.stats.value}%
                </span>
                <p className="pb-4 text-primary 2xl:text-base lg:text-base md:text-sm text-sm font-Popins font-medium w-[95%]">
                  {testimonial.stats.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
