import Banner from "./Banner";
import HelpSection from "./Contact/HelpSection";

const Contact = () => {
  return (
    <div className="pt-16">
      <Banner
        Heading={"Need help? Say Hello"}
        para={
          "Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly."
        }
        menu={"Contact"}
      />
      <HelpSection/>
    </div>
  );
};

export default Contact;
