import Banner from "./Banner";
import PricingSection from "./Pricing/PricingSection";

const Pricing = () => {
  return (
    <div className="pt-16">
        <Banner Heading={"Find the right package"} para={"Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget."} menu={"Pricing"}/>
        <PricingSection/>
    </div>
  )
}

export default Pricing
