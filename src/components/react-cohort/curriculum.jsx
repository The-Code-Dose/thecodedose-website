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
        title: "Module 1: Introduction",
        description: [
          "Overview of how the web and browsers work.",
          "Learn about UI/UX and how to leverage AI to build professional looking designs",
          "Learn industry best practices to create well-structured, responsive and accessible webpages.",
          "Learn how to use modern CSS frameworks like TailwindCSS and CSS Preprocessors like SASS along with the BEM methodology.",
        ],
      },
      {
        id: 2,
        title: "Module 2: JavaScript Best Practices",
        description: [
          "Revise your understanding of commonly misunderstood JavaScript concepts.",
          "Explore advanced concepts and design patterns to write efficient and maintainable JS code.",
          "Integrate tools like ESLint and Prettier to enforce code quality.",
        ],
      },
      {
        id: 2,
        title: "Module 3: Advanced JavaScript",
        description: [
          "Learn advanced JavaScript concepts like closures, promises, callbacks etc.",
          "Explore how JavaScript works under the hood.",
          "Learn about modern(ES6+) JavaScript concepts.",
        ],
      },
      {
        id: 4,
        title: "Module 4: ReactJS Fundamentals",
        description: [
          "Dive into the fundamentals of ReactJS to build a solid foundation in component-based development.",
          "Learn state management, props and JSX syntax to create dynamic and interactive user interfaces with ease.",
          "Learn how to style your React applications using different techniques.",
        ],
      },
    ],
    "Month 2": [
      {
        id: 1,
        title: "Module 1: Practicing React Basics",
        description: [
          "Explore about best practices and common mistakes that beginners make.",
          "Learn how to deploy React applications using Vercel, Netlify, CodeSandbox and GitHub Pages.",
          "Apply your skills to create a mini project.",
        ],
      },
      {
        id: 2,
        title: "Module 2: Intermediate ReactJS",
        description: [
          "Understand what React refs are and when to use them.",
          "Learn how to create reusable React code using higher order components.",
          "Use component libraries such as HeadlessUI and MaterialUI for faster development.",
          "Explore framer-motion to add interactive animations to your apps.",
        ],
      },
      {
        id: 3,
        title: "Module 3: Best Practices & Mini Project",
        description: [
          "Learn about common React patterns and best practices.",
          "Build a project to put your learnings to test.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Advanced ReactJS",
        description: [
          "Explore advanced concepts such a context API and reducers.",
          "Explore routing using react-router.",
          "Build complex forms using react-hook-form.",
        ],
      },
    ],
    "Month 3": [
      {
        id: 1,
        title: "Module 1: Performance Optimization",
        description: [
          "Learn how to create custom hooks.",
          "Learn how to optimize performance using memoization.",
          "Explore virtualization using react-window.",
          "Learn how to use the React Developer Tools and Profiler.",
        ],
      },
      {
        id: 2,
        title: "Module 2: Introduction to Open Source",
        description: [
          "Explore the vast landscape of open-source projects and discover how to contribute effectively.",
          "Learn about programs like Google Summer of Code and tips and tricks to apply.",
          "Dip your toes in open source by contributing to the The Code Dose website.",
        ],
      },
      {
        id: 3,
        title: "Module 3: State Management & Testing",
        description: [
          "Learn what testing is and why it is important.",
          "Manage server state using react-query.",
          "Explore complex state management using Redux and understand when to use it.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Building a Portfolio Website",
        description: [
          "Build your professional portfolio website.",
          "Showcase your skills, projects, and achievements in an elegant and visually appealing manner.",
          "Craft a portfolio that stands out and captivates potential employers and clients.",
        ],
      },
    ],
    "Month 4": [
      {
        id: 1,
        title: "Module 1: Beyond Frontend",
        description: [
          "Learn what TypeScript is and how to use it in your own apps.",
          "Learn about RESTful APIs and GraphQL.",
          "Explore CI/CD using GitHub Actions.",
        ],
      },
      {
        id: 2,
        title: "Module 2: NextJS",
        description: [
          "Learn the fundamentals of Next.js and server-side rendering.",
          "Dive into key Next.js features like API routes, dynamic routing, and data fetching methods to create a seamless user experience.",
          "Learn how to deploy your Next.js applications.",
        ],
      },
      {
        id: 3,
        title: "Module 3: Introduction to Frontend Security",
        description: [
          "Learn best practices for input validation, content security policies, and secure handling of tokens and user data.",
          "Dive into common vulnerabilities like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) that impact frontend applications.",
          "Explore the best practices for using cookies, local and session storage for storing data on the frontend.",
        ],
      },
      {
        id: 4,
        title: "Module 4: Resume Building & Interview Preparation",
        description: [
          "Learn effective strategies, polish your resume, and enhance your interviewing skills to secure internship opportunities as a React developer.",
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
        <p className="text-sm mb-10">
          *This is a tentative curriculum and it is subjected to change as it
          continues to develop further.
        </p>
        <Tab.Group>
          <Tab.List className="md:flex bg-radial-glass p-3 border rounded-md border-indigo-700/30">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "text-left md:text-center w-full text-xl uppercase p-3 font-medium leading-5",
                    selected
                      ? "text-cyan-300"
                      : "text-neutral-100 hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 border bg-radial-glass rounded-md border-indigo-700/30">
            {Object.values(categories).map((modules, idx) => (
              <Tab.Panel key={idx} className="py-3" s>
                {modules.map((module) => (
                  <div key={module.id} className="relative p-5">
                    <h3 className="uppercase text-lg text-indigo-100 font-medium leading-5">
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
