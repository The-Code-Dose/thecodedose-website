import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const TESTIMONIALS = [
  {
    name: "Prateek Gaur",
    designation: "Software Engineer @ Accenture",
    feedback: `Hi TheCodeDose,

    Thank you so much for the Git and GitHub workshop you conducted previously.
    I also shared this valuable knowledge with a senior developer in my company, and she also found it to be a great way to save time and increase efficiency during code merging. I truly appreciate all the help and guidance you provided during the workshop. Thank you once again!`,
  },
  {
    name: "Amlan Bora via Topmate",
    feedback: `Had a great session, gave me a clear direction & approach to how to prepare for remote developer opportunities! Also, gave me great recommendations for tools I could use while doing so & things I should do to make myself a better developer & candidate for aspired roles.`,
  },
  {
    name: "Vinathi",
    feedback: `
    This course has been the journey I've always longed for.
    I've been gaining valuable knowledge from Urvashi's well-crafted materials and interactive sessions where I could ask any question without hesitation.
    What I appreciate the most is learning by building projects, which I love, and the specific exercises that provide exactly what I need to learn.
    From improving my basics to stepping into the world of open source with Urvashi's patient support, and I can't wait to dive into the exciting journey ahead, exploring, creating and learning along the way.`,
  },
  {
    name: "Shivani Mishra",
    feedback: `
    It was one of the best learning experiences I had, at React Developer Program, right from start to end.
    At start: Urvashi provided us with some great resources for basic of web dev before the program started.
    During the program : Urvashi has divided the section into smaller subsections and layed out the program for each week and month beforehand, giving ample amount of time to each topic. The program is based on application based learning with less theory followed by good amount of practice projects and practical way of finding solutions.
    Environment: Over all environment  is very friendly with Daily check-ins,motivational messages and project review. The best thing about the program is that the batches are very small which leads to Urvashi giving attention to each and every student. You can contact her anytime and clear your doubts through weekly calls or direct messages.
    Outcome:I was able to make websites on my own and did gave me confidence on my skills,
    "Overall I am very happy and recommend others to join the React developer program"`,
  },
  {
    name: "Rohit Deshpande",
    feedback: `
    The major reason I took this program was not just learning React but the experience that Urvashi has and that has helped me a lot.
    The content is crisp and the exercises and projects make you think, but the code reviews you get after is the real deal.
    I personally feel quite confident in my abilities, have greater understanding of how things work, also learned a lot about open source, found new interests in technical writing after having completed 2 months of the program.
    So you can apply for this program if you're interested in React but also want some guidance, doubt-solving and reviews.
    Quite honestly the money is for the experience ,reviews, and doubt-solving because you can learn React freely too.
    Also if you're experienced I reckon this might not be for you but for a beginner it definitely is worth it.`
  }
];

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        What my students are saying:
      </h1>
    </div>
  );
}
