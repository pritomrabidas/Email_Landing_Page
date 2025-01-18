import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sticky top-[70px] bg-white z-40 hidden md:block">
      <div className="container mx-auto lg:px-20 ">
        <div className="border-b border-t border-[#322f2f1c]">
          <ul className="flex justify-between py-6 px-6">
            <li>
              <Link
                to="#section1"
                className="text-primary text-lg font-NunitoFont font-medium active:text-brand hover:text-brand"
              >
                Email campaigns
              </Link>
            </li>
            <li>
              <Link
                to="#section1"
                className="text-primary text-lg font-NunitoFont font-medium active:text-brand hover:text-brand"
              >
                Automated workflows
              </Link>
            </li>
            <li>
              <Link
                to="#section1"
                className="text-primary text-lg font-NunitoFont font-medium active:text-brand hover:text-brand"
              >
                A/B Testing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
