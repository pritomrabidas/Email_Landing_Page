const Navigation = () => {
  return (
    <section className="sticky top-[70px]">
      <div className="container">
        <div className="sticky top-[70px] bg-white z-10 hidden md:block">
          <div className="container mx-auto lg:px-20">
            <div className="border-b border-t border-[#322f2f1c]">
              <ul className="flex justify-between py-6 px-6">
                <li>
                  <a
                    href="#section1"
                    className="text-primary text-lg font-NunitoFont font-medium hover:text-brand "
                  >
                    Email campaigns
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className="text-primary text-lg font-NunitoFont font-medium hover:text-brand "
                  >
                    Automated workflows
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className="text-primary text-lg font-NunitoFont font-medium hover:text-brand "
                  >
                    A/B Testing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
