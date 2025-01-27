const HelpSection = () => {
  return (
    <section>
      <div className="container bg-[#faeeee31] py-5">
        <div className=" p-8 flex justify-center gap-20">
          <div className="">
            <div data-aos="fade-up" data-aos-duration="2000" className=" ">
              <h3 className="text-2xl text-primary font-Popins font-semibold">
                How can we help you today ?
              </h3>
              <p className="text-primary text-base font-Popins font-normal w-[60%] py-2">
                Let us know who you are and what you're looking for below.
              </p>
              <form className="space-y-4">
                <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                  <label className=" block text-sm font-medium text-primary font-NunitoFont py-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                    placeholder="Insert your name"
                  />
                </div>
                <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                  <label className=" block text-sm font-medium text-primary font-NunitoFont py-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                    placeholder="Insert your email"
                  />
                </div>
                <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                  <label className=" block text-sm font-medium text-primary font-NunitoFont py-1">
                    Project
                  </label>
                  <textarea
                    name="project"
                    cols="20"
                    rows="5"
                    className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                    placeholder="Write your project"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" bg-[#212121e0] text-white px-6 py-3 text-base font-Popins font-normal duration-200 hover:bg-[#0f0f0fc5] rounded-lg flex items-center"
                >
                  Send Message
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
