import { TbMessage2Check } from "react-icons/tb";

const HelpSection = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-[#f6b1b152] p-8 flex justify-center gap-20">
          <div className="">
            <div className=" mb-12">
              <h3 className="text-3xl font-bold font-NunitoFont text-primary">
                How can we help you today?
              </h3>
              <p className="text-primary text-base font-Popins font-normal">
                Let us know who you are and what you're looking for below.
              </p>
            </div>
            {/* Contact Form */}
            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label className=" text-base font-medium text-primary font-NunitoFont">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md p-2 mt-1 outline-none text-sm text-primary font-Opensans font-normal"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className=" text-base font-medium text-primary font-NunitoFont">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md p-2 mt-1 outline-none text-sm text-primary font-Opensans font-normal"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className=" text-base font-medium text-primary font-NunitoFont">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full rounded-md p-2 mt-1 outline-none text-sm text-primary font-Opensans font-normal"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label className=" text-base font-medium text-primary font-NunitoFont">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full rounded-md p-2 mt-1 outline-none text-sm text-primary font-Opensans font-normal"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-brand w-full text-white py-2.5 rounded-lg transition font-Opensans font-medium text-base duration-200 hover:bg-[#010101a4]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
