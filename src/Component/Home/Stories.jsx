const Stories = () => {
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
      <div className="container mx-auto w-full py-20 px-16">
        <div className="py-20 justify-center mx-auto text-center w-[70%]">
          <h6 className="text-2xl text-brand font-Montserrat font-medium">
            Customer Stories
          </h6>
          <h2 className=" 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-extrabold text-primary font-NunitoFont my-4">
            Success <span className="text-blue-500">stories</span> speak louder
          </h2>
          <p className=" 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base text-sm 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[80%] w-[90%] text-primary font-Opensans font-normal text-center mx-auto flex">
            The best way to showcase our commitment is through the experiences
            and stories of those who have partnered with us.
          </p>
        </div>
        <div className="flex flex-row ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-md border gap-5 p-2 rounded-md mx-2"
            >
              <div className="flex items-center pt-4 pb-2 gap-4">
                <img
                  className="w-18 h-18 rounded-full"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                />
                <div>
                  <h5 className="text-xl font-NunitoFont text-brand font-bold">{testimonial.name}</h5>
                  <p className="text-lg font-NunitoFont text-primary font-medium">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-base font-Opensans text-primary font-normal w-[90%]">{testimonial.text}</p>
              <hr className="w-1/2 border-gray-300" />
              <div>
                <span className="text-2xl font-NunitoFont font-bold text-secandari">
                  +{testimonial.stats.value}%
                </span>
                <p className="pb-4 text-primary text-base font-Popins font-medium">{testimonial.stats.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
