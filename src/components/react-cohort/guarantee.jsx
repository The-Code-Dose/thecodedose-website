import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default () => {
  return (
    <div id="guarantee" className="mx-10 md:mx-16 mt-32">
      <h1 className="flex text-cyan-300 text-3xl">
        <CheckBadgeIcon className="mr-3 w-10 h-10 text-yellow-300" />
        100% Money Back Guarantee
      </h1>
      <p className="mt-10">
        If you are not able to make a return on your investment within 6 months
        of finishing this program, i.e., you're not able to earn money, you will
        qualify for a 100% money back guarantee and get a full refund. Note that
        this guarantee is only valid if you diligently follow the coursework,
        finish homework, build projects as guided and are actively looking for
        work.
      </p>
    </div>
  );
};
