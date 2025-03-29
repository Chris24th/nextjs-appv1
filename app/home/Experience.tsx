import React from "react";
import Marquee from "react-fast-marquee";

export default function Experience() {
  const experiences = [
    {
      companyName: "Sprobe Inc.",
      position: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techs: [
        "Web Development",
        "HTML",
        "Tenacious Work Ethic",
        "MySQL",
        "Bootstrap (Framework)",
        "React.js",
        "Laravel",
        "Problem Solving",
      ],
    },
    {
      companyName: "Alliance Software Inc.",
      position: "Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      techs: [
        "C#",
        ".NET Framework",
        "Japanese",
        "Mobile Application Development",
        "Agile Methodologies",
        "HTML",
        "Microsoft SQL Server",
        "MySQL",
        ".NET MAUI",
        "ASP.NET MVC",
        "ASP.NET",
        "React.js",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-md mt-10 md:mx-20 lg:mx-52 xl:mx-80  2xl:mx-96"
    >
      <h2 className="text-3xl font-bold mb-6 col-span-full">Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 col-span-full">
          <h3 className="text-xl font-semibold col-span-full">
            {exp.companyName}
          </h3>
          <h4 className="text-lg col-span-full">{exp.position}</h4>
          <p>{exp.description}</p>
          {/* Marquee */}
          <div className="mt-4 overflow-hidden col-span-2">
            <Marquee gradient={false} speed={30} pauseOnHover>
              {exp.techs.map((tech, techIndex) => (
                <span key={techIndex} className="mx-2 text-sm">
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      ))}
    </section>
  );
}
