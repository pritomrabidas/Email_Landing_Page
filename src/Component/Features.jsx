import Banner from "./Banner";
import Catching from "./Feature/Catching";
import Effortlessly from "./Home/Effortlessly";

const Features = () => {
  return (
    <div className="pt-16">
      <Banner
        Heading={"Our services redefined"}
        para={
          "Discover how our cutting-edge software can transform your operations and help you achieve unparalleled success."
        }
        menu={"Features"}
      />
      <Effortlessly/>
      <Catching/>
    </div>
  );
};

export default Features;
