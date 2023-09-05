import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/study-plans-demo.png";
import withPadding from '../../hocs/withPadding';

const InfoSection = () => {
  return (
    <div className="bg-white text-center">
      <h1 className="text-3xl text-purple">
        Achieve Your Coding Goals with Customizable Notion Templates
      </h1>
      <h3>Track Progress, Stay Motivated, and Manage Your Time Effectively</h3>
      <p>
        These study plans are hosted on Notion and are designed to help you
        achieve your goals, no matter how busy your schedule. With customizable
        timelines and a variety of resources, you can stay motivated and on
        track throughout your journey.
      </p>
      <div className="flex justify-center mt-10">
        <img className="border border-black rounded-2xl drop-shadow-solid mt-5w-full md:w-3/4" src={thumbnail} />
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between my-10 text-center">
        <div>
          <h4>Customizable Timelines</h4>
          <p>
            The templates are designed with busy individuals in mind. Whether
            you have a full-time job or a busy family schedule, the timelines
            can be adjusted to fit your commitments. Simply drag and drop tasks
            to fit your schedule and stay on track.
          </p>
        </div>
        <div>
          <h4>Track Progress with Kanban Boards</h4>
          <p>
            The Kanban boards make it easy to track your progress towards your
            goals. With customizable columns and cards, you can easily see what
            tasks you have completed and what still needs to be done. This
            visual system is great for keeping you motivated and focused.
          </p>
        </div>
        <div>
          <h4>Suits Different Learning Styles</h4>
          <p>
            The templates come with a mix of resources, including YouTube
            videos, blog posts, and practice exercises. This variety of
            resources ensures that you stay engaged and motivated throughout
            your journey. Whether you prefer to read, watch, or practice, we
            have something for everyone.
          </p>
        </div>
        <div>
          <h4>Pomodoro Timer Included</h4>
          <p>
            The templates also include a Pomodoro timer, so you can manage your
            time effectively and stay productive. This time management technique
            has been proven to increase focus and productivity, making it the
            perfect addition to the templates.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-blue text-black"
          to="https://youtu.be/v8pNl4GifUQ"
        >
          View Demo
        </Link>
      </div>
    </div>
  )
};

export default withPadding(InfoSection);
