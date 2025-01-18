import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [activeLink, setActiveLink] = useState("#features");

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="container mx-auto p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 border-b pb-2 border-[#322f2f84]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-brand">
                MyBrand
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-primary font-medium text-base font-Popins">
              <Link
                to="#features"
                className={`${
                  activeLink === "#features"
                    ? "text-[#fb9d50]"
                    : "hover:text-[#fb9d50]"
                } duration-300 transition-all`}
                onClick={() => handleLinkClick("#features")}
              >
                Features
              </Link>
              <Link
                to="#pricing"
                className={`${
                  activeLink === "#pricing"
                    ? "text-[#fb9d50]"
                    : "hover:text-[#fb9d50]"
                } duration-300 transition-all`}
                onClick={() => handleLinkClick("#pricing")}
              >
                Pricing
              </Link>
              <Link
                to="#resources"
                className={`${
                  activeLink === "#resources"
                    ? "text-[#fb9d50]"
                    : "hover:text-[#fb9d50]"
                } duration-300 transition-all`}
                onClick={() => handleLinkClick("#resources")}
              >
                Resources
              </Link>
              <Link
                to="#help"
                className={`${
                  activeLink === "#help"
                    ? "text-[#fb9d50]"
                    : "hover:text-[#fb9d50]"
                } duration-300 transition-all`}
                onClick={() => handleLinkClick("#help")}
              >
                Help
              </Link>
              <Link
                to="#contact"
                className={`${
                  activeLink === "#contact"
                    ? "text-[#fb9d50]"
                    : "hover:text-[#fb9d50]"
                } duration-300 transition-all`}
                onClick={() => handleLinkClick("#contact")}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Pricing
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Resources
              </a>
              <a
                href="#help"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Help
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
