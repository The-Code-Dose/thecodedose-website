import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function () {
  const [categories] = useState({
    "Month 1": [
      {
        id: 1,
        title: "Module 1: HTML & CSS Best Practices",
        description: [
          "Master the art of writing clean code in HTML and CSS.",
          "Learn industry best practices to create well-structured, responsive webpages that meet modern design standards.",
          "Learn how to use modern CSS frameworks like TailwindCSS to build professional looking websites in a fraction of the time.",
        ],
      },
      {
        id: 2,
        title: "Module 2: Advanced JavaScript & Best Practices",
        description: [
          "Explore advanced concepts and design patterns to write efficient and maintainable JS code.",
          "Learn how to use code quality guides by Google & AirBnb to take your JS projects to the next level.",
          "Integrate tools like ESLint and Prettier to enforce code quality.",
        ],
      },
      {
        id: 3,
        title: "Module 3: ReactJS Fundamentals",
        description: [
          "Dive into the fundamentals of ReactJS to build a solid foundation in component-based development.",
          "Learn state management, props and JSX syntax to create dynamic and interactive user interfaces with ease.",
          "Learn how to add styles to React components using styled-components.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Intermediate ReactJS",
        description: [
          "Explore advanced concepts such as hooks, refs, context API, and advanced state management.",
          "Learn how to create reusable React code using higher order components.",
          "Learn how to handle events and create custom hooks.",
        ],
      },
    ],
    "Month 2": [
      {
        id: 1,
        title: "Module 1: Mini Project",
        description: ["Apply your skills to a hands-on mini project."],
      },
      {
        id: 2,
        title: "Module 2: Advanced ReactJS",
        description: [
          "Explore routing using react-router.",
          "Learn how to fetch and manage data using react-query.",
          "Build complex forms using react-hook-form.",
        ],
      },
      {
        id: 3,
        title: "Module 3: Exploring the React Ecosystem",
        description: [
          "Learn how to integrate popular libraries such as Redux, Framer Motion etc.",
          "Use component libraries such as HeadlessUI for faster development.",
          "Create amazing looking charts and visualisation components using visx and Recharts.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Testing & Performance Optimization",
        description: [
          "Learn what testing is and why it is important.",
          "Master the art of testing React applications using libraries like React Testing Library, Jest and Enzyme.",
          "Learn how to optimize performance to ensure your React projects are robust, reliable, and efficient.",
        ],
      },
    ],
    "Month 3": [
      {
        id: 1,
        title: "Module 1: Introduction to Open Source",
        description: [
          "Explore the vast landscape of open-source projects and discover how to contribute effectively.",
          "Learn about version control, collaborating with other developers, and making meaningful contributions to open-source projects.",
          "Learn about programs like Google Summer of Code and tips and tricks to apply.",
        ],
      },
      {
        id: 2,
        title: "Module 2: Group Project",
        description: [
          "Develop a functional web application in a group.",
          "Apply your newly acquired skills and knowledge to create an engaging and interactive web application.",
        ],
      },
      {
        id: 3,
        title: "Module 3: Building a Portfolio Website",
        description: [
          "Build your professional portfolio website.",
          "Showcase your skills, projects, and achievements in an elegant and visually appealing manner.",
          "Craft a portfolio that stands out and captivates potential employers and clients.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Interview Preparation",
        description: [
          "Sharpen your interview skills and prepare for technical interviews as a React developer.",
          "Gain insights into the interview process, learn effective techniques for showcasing your expertise, and master common interview questions.",
          "Enhance your resume, improve your communication skills, and boost your confidence to excel in technical interviews.",
        ],
      },
    ],
    "Month 4": [
      {
        id: 1,
        title: "Module 1: Capstone Project",
        description: [
          "Showcase your comprehensive skills and knowledge.",
          "Apply everything you've learned to develop a substantial and impactful React application.",
        ],
      },
      {
        id: 2,
        title: "Module 2: Capstone Project Contd.",
        description: [
          "Continue working on your capstone project, refining and enhancing your React application with advanced features and functionalities.",
          "Take your project to the next level and demonstrate your expertise.",
        ],
      },
      {
        id: 3,
        title: "Module 3: Applying for Internships",
        description: [
          "Prepare for internships and gain valuable insights on the application process.",
          "Learn effective strategies, polish your resume, and enhance your interviewing skills to secure internship opportunities as a React developer.",
        ],
      },
      {
        id: 4,
        title: "Module 4: What's next?",
        description: [
          "Gain valuable career guidance, discover potential career paths, and learn about industry trends to help you navigate your next steps as a React developer.",
        ],
      },
    ],
  });

  return (
    <div className="mx-10 md:mx-16 mt-32">
      <h1 className="text-fuchsia-400 mb-10 text-5xl" id="curriculum">
        What you'll learn
      </h1>
      <div>
        <p className="text-xs mb-10">
          *This is a tentative curriculum and it is subjected to change as it
          continues to develop further.
        </p>
        <Tab.Group>
          <Tab.List className="md:flex bg-slate-800 p-3 border border-slate-500">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "text-left md:text-center w-full text-xl uppercase p-3 font-medium leading-5",
                    selected
                      ? "text-cyan-300"
                      : "text-slate-100 hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((modules, idx) => (
              <Tab.Panel key={idx} className="py-3" s>
                {modules.map((module) => (
                  <div key={module.id} className="relative p-3 mt-3">
                    <h3 className="uppercase text-lg text-yellow font-medium leading-5">
                      {module.title}
                    </h3>
                    <div className="mt-5 leading-relaxed text-md font-normal leading-4 text-gray-200">
                      {module.description.map((point) => (
                        <div className="flex gap-3 mt-5">
                          <div>
                            <CheckCircleIcon className="w-6 h-6 text-green-300" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <span className="absolute inset-0 " />
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
