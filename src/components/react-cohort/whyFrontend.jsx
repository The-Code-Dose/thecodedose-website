import React from "react";

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        🤔 Why just Frontend Development in the next 4 months?
      </h1>
      <div className="text-indigo-200 leading-9 text-sm bg-radial-glass border border-indigo-700/30 rounded-lg mt-20 px-10 py-8">
        <p>
          As a beginner, it might sound very attractive to hear "learn full
          stack web development in 4 months without any prior coding
          experience". We believe that this is a recipe for disaster. Think of
          it like constructing a building; you wouldn't start with the roof
          before laying a solid foundation. Similarly, diving into full-stack
          development without mastering the basics first is a surefire way to
          build a shaky skillset.
        </p>
        <br />
        <p>
          Our course adopts a different approach. It's intensive and aimed at
          those who already have their fundamentals clear. We believe in
          understanding the 'why' before the 'how'. For instance, you won't just
          learn how to use a library; you'll learn why that library was created,
          what problems it solves, and where it fits in the larger ecosystem of
          frontend development. This understanding is crucial for writing not
          just functional but also efficient and maintainable code.
        </p>
        <br />
        <p>
          In this course, you'll experience a blend of theoretical knowledge
          backed by practical coding exercises. We go beyond the surface-level
          tutorials and guide you through in-depth lessons that fill the gaps
          left by quick-and-dirty tutorials. Our aim is to equip you with skills
          that empower you to create projects from scratch with full
          comprehension, rather than just piecing together code snippets from
          Stack Overflow or ChatGPT.
        </p>
        <br />
        <p>
          So if you're someone who is committed to truly mastering frontend
          development, who wants to go beyond just getting things to 'work' and
          understand the intricacies of what you're building, then this course
          is for you. But if you're looking for shortcuts or easy wins, you
          might want to look elsewhere. We're here for those who are ready to
          dig deep and come out as proficient, well-rounded frontend developers.
        </p>
        <hr className="mb-5 mt-10 border border-indigo-700/30" />
        <p className="text-xs">Footnotes:</p>
        <a
          className="text-indigo-400 underline"
          href="https://norvig.com/21-days.html"
        >
          Teach yourself programming in 10 years
        </a>
      </div>
    </div>
  );
}
