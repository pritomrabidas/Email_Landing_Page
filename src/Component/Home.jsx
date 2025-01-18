import Banner from "./Home/Banner";
import Effortlessly from "./Home/Effortlessly";
import Navigation from "./Home/Navigation";

const Home = () => {
  return (
      <div className="pt-16">
        <Banner/>
        <Navigation/>
        <Effortlessly/>
      </div>
  );
};

export default Home;
