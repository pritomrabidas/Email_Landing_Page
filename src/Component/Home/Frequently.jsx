import { useState } from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      question: "2. Can I change my plan later?",
      answer:
        "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      question: "3. What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "4. Can other info be added to an invoice?",
      answer:
        "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      question: "5. How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container 2xl:p-12 xl:p-12 lg:p-12 md:p-2 sm:p-6 p-6">
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col mx-auto p-6 w-full items-center">
          {/* Heading Section */}
          <div className="mb-8 2xl:w-1/2 xl:w-1/2 md:w-1/2 lg:w-1/2 sm:w-full w-full">
            <h6 className="text-lg text-brand font-Montserrat font-medium">
              Frequently Asked Questions
            </h6>
            <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-primary font-NunitoFont my-4">
              We're here <span className="text-blue-500">to answer</span> all
              your questions
            </h2>
            <p className="text-sm 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[80%] w-[90%] text-primary font-Opensans font-normal flex">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat with our friendly
              team.
            </p>
          </div>
          {/* Accordion Section */}
          <div className="space-y-4 2xl:w-1/2 xl:w-1/2 md:w-1/2 lg:w-1/2 sm:w-full w-full justify-center mx-auto text-center">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-md shadow-sm overflow-hidden  w-[80%]"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-primary font-NunitoFont text-base">
                    {faq.question}
                  </span>
                  <span className="ml-4">
                    {activeIndex === index ? (
                      <HiArrowSmUp className="font-normal text-xl text-[#211f1fc3]" />
                    ) : (
                      <HiArrowSmDown className="font-normal text-xl text-[#211f1fc3]" />
                    )}
                  </span>
                </button>
                <div
                  className={`duration-100 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 text-sm text-primary font-normal font-Popins">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
