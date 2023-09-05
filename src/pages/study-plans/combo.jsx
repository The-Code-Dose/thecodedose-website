import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/study-plans-combo.png";
import withPadding from "../../hocs/withPadding";

const ComboSection = () => {
  return (
    <section id="combo" className="text-center bg-white">
      <h1 className="study-plans__combo-heading">Special Offer</h1>
      <h2 className="study-plans__combo-subheading">
        Get flat 10% OFF on this combo
      </h2>
      <p>
        Data Structures & Algorithms + JavaScript + Git/GitHub Self Study Plans
      </p>
      <div className="flex justify-center">
        <img className="study-plans__combo-img" src={thumbnail} />
      </div>
      <h2 className="study-plans__combo-subheading-2">
        Get ADDITIONAL 30% OFF using the coupon 'WEBSITE30'
      </h2>
      <div className="flex justify-center">
        <Link
          className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-yellow text-black"
          to="https://tagmango.com/mangocheckout/644775cbeaa7cabe22e983c2"
        >
          I want this!
        </Link>
      </div>
    </section>
  );
};

export default withPadding(ComboSection, "combo");
