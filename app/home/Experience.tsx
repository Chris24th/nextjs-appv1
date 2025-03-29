import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCss3Alt,
  FaNode,
} from "react-icons/fa";
import { SiMysql, SiDotnet, SiTailwindcss, SiJavascript } from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftOutlookLogoFill,
  PiMicrosoftTeamsLogoFill,
  PiFileCSharpDuotone,
} from "react-icons/pi";

export default function Experience() {
  const experiences = [
    {
      companyName: "Sprobe Inc.",
      position: "Web Developer",
      description:
        "Developed a social media application like Facebook, where users can post, comment, and has reaction feauture.",
      softskills: [
        "Web Development",
        "Tenacious Work Ethic",
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Communication",
      ],
      techicons: [
        <FaReact />,
        <SiJavascript />,
        <FaLaravel />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiMysql />,
        <FaBootstrap />,
        <FaNode />,
        <FaGitAlt />,
        <FaGithub />,
        <FaDocker />,
        <PiMicrosoftTeamsLogoFill />,
      ],
    },
    {
      companyName: "Alliance Software Inc.",
      position: "Software Developer",
      description:
        "I develop full-stack features using C# (MVC), React.js, and Microsoft SQL. I fix bugs on the Alliance website (Alliance.com.ph) and migrate a mobile app from Xamarin to .NET MAUI. I also attend MISJ Japanese classes, currently on JLPT N4 level, will take the exam in the future.",
      softskills: [
        "Software Development",
        "Mobile Development",
        "Japanese Language",
        "Tenacious Work Ethic",
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Adaptability",
        "Communication",
        "Attention to Detail",
      ],
      techicons: [
        <FaReact />,
        <SiJavascript />,
        <PiFileCSharpDuotone />,
        <SiDotnet />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiMysql />,
        <FaBootstrap />,
        <SiTailwindcss />,
        <FaGitAlt />,
        <FaGithub />,
        <PiMicrosoftTeamsLogoFill />,
        <PiMicrosoftWordLogoFill />,
        <PiMicrosoftExcelLogoFill />,
        <PiMicrosoftOutlookLogoFill />,
      ],
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-md mt-20 md:mx-20 lg:mx-52 xl:mx-80  2xl:mx-96">
      <h2 className="text-3xl font-bold mb-6 col-span-full">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 col-span-full">
          <h3 className="text-xl font-semibold col-span-full">
            {exp.companyName}
          </h3>
          <h4 className="text-lg col-span-full italic">{exp.position}</h4>
          <p className="text-md">{exp.description}</p>
          {/* Marquee */}
          <div className="mt-4 overflow-hidden col-span-2">
            <Marquee gradient={false} speed={10} pauseOnClick>
              {exp.softskills.map((softskill, softskillsIndex) => (
                <span
                  key={softskillsIndex}
                  className="mx-2 text-sm bg-[var(--color2)] rounded-full px-2 py-1"
                >
                  {softskill}
                </span>
              ))}
            </Marquee>
            <Marquee gradient={false} speed={10} pauseOnClick>
              {exp.techicons.map((techicon, techiconsIndex) => (
                <div key={techiconsIndex} className="mt-6 mx-4">
                  {React.cloneElement(techicon, { size: 32 })}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      ))}
    </div>
  );
}
