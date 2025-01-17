const Footer = () => {
  return (
    <footer className="bg-[#ffcfe85e] text-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <a href="/" className="text-2xl font-bold text-[#fb9d50]">
              MyBrand
            </a>
            <p className="font-medium font-NunitoFont text-primary text-base pt-4">
              Create stunning, modern landing pages that captivate your audience
              and drive conversions.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-xl font-medium text-primary font-Raleway mb-4">
              Features
            </h3>
            <ul className="space-y-2">
              {[
                "Page builder",
                "Theme options",
                "Theme builder",
                "Template library",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-[#fb9d50] text-primary text-base duration-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-medium text-primary font-Raleway mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {["Support center", "Documentation", "Community", "Hosting"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:text-[#fb9d50] text-primary text-base duration-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-medium text-primary font-Raleway mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              {["Behance", "Dribbble", "Facebook", "Instagram"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#fb9d50] text-primary text-base duration-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-400 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-primary font-Raleway font-normal">
              © LandPress WordPress Theme. All Rights Reserved.
            </p>

            {/* Terms and Privacy */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#terms-and-conditions"
                className="hover:text-[#fb9d50] text-primary text-base duration-200 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacy-policy"
                className="hover:text-[#fb9d50] text-primary text-base duration-200 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
