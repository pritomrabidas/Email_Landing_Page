import { Link } from "react-router-dom";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Personal",
      price: "19",
      period: "/month",
      description:
        "Protect your data with best-in-class security, and compliance and fine-tune operations with granular controls.",
    },
    {
      title: "Professional",
      price: "89",
      period: "/month",
      description:
        "Get set up for success with advanced support and services, extend your instance and unify your data.",
    },
    {
      title: "Enterprise",
      price: "299",
      period: "/month",
      description:
        "Protect your data with best-in-class security, and compliance and fine-tune operations with granular controls.",
    },
  ];
  return (
    <section>
      <div className="container 2xl:px-20 xl:px-20 lg:px-10 md:px-2 sm:px-20 px-5">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex 2xl:flex-row md:flex-row sm:flex-col flex-col items-center gap-2 p-8"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#f7acac12] shadow-lg rounded-lg p-10  transition-transform duration-300 scale-95 hover:scale-100"
            >
              <h6 className=" 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg text-lg font-semibold text-primary font-NunitoFont mb-4">
                {plan.title}
              </h6>
              <div className="text-4xl font-extrabold font-Monrope text-primary mb-4">
                <sup className="text-base">$</sup>
                {plan.price}
                <sub className="text-sm">{plan.period}</sub>
              </div>
              <p className="text-primary 2xl:text-base xl:text-base lg:text-sm md:text-xs text-xs font-Opensans font-normal mb-6">
                {plan.description}
              </p>
              <Link to="/pricing">
                <button className="font-Monrope font-normal text-[#fff] 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs bg-brand 2xl:px-8 xl:px-8 lg:px-5 md:px-4 sm:px-3 px-3 2xl:py-5 xl:py-5 lg:py-4 md:py-3 sm:py-3 py-3 rounded-md scale-95 hover:scale-100 duration-200">
                  Get started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
