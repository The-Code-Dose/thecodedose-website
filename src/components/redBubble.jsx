import React from 'react';
import { Link } from 'gatsby';
import withPadding from '../hocs/withPadding';

import NoicestProgrammerTee from '../images/coding-in-progress-sticker.svg';
import WitchCoffeeCoaster from '../images/witch-coffee-coaster.svg';
import CodingTeaSticker from '../images/coding-baby-sticker.png';
import CodingBabySticker from '../images/coding-baby-tshirt.png';

function RedbubbleSection() {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div className="grid grid-cols-2 gap-10 w-full md:w-1/4 xl:w-1/2">
        <img className="transition-all hover:skew-x-3" src={NoicestProgrammerTee} />
        <img className="transition-all hover:skew-x-3" src={WitchCoffeeCoaster} />
        <img className="transition-all hover:skew-x-3" src={CodingTeaSticker} />
        <img className="transition-all hover:skew-x-3" src={CodingBabySticker} />
      </div>
      <div className="w-full flex gap-5 flex-col md:w-3/4 xl:w-1/2 justify-between bg-white border border-black rounded-2xl p-10 drop-shadow-solid">
        <h2 className="text-3xl md:text-6xl 2xl:text-8xl">
          Check out our RedBubble store
        </h2>
        <p>
          Make the nerd in you happy! View our collection of t-shirts, stickers, magnets and more.
        </p>
        <Link
          className="text-center block uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 bg-pink"
          to="https://www.redbubble.com/people/thecodedose/shop"
        >
          Visit Store
        </Link>
      </div>
    </div>
  );
}

export default withPadding(RedbubbleSection, 'redbubble', 'bg-yellow');
