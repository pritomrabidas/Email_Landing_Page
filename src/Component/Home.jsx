import Banner from "./Home/Banner";
import Effortlessly from "./Home/Effortlessly";
import Frequently from "./Home/Frequently";
import Navigation from "./Home/Navigation";
import Stories from "./Home/Stories";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Navigation />
      <Effortlessly />
      <Stories />
      <Frequently />
    </div>
  );
};

export default Home;
