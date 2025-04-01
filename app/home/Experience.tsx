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
import { motion } from "framer";

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
        <FaReact key="react" />,
        <SiJavascript key="javascript" />,
        <FaLaravel key="laravel" />,
        <FaHtml5 key="html5" />,
        <FaCss3Alt key="css3" />,
        <SiMysql key="mysql" />,
        <FaBootstrap key="bootstrap" />,
        <FaNode key="node" />,
        <FaGitAlt key="git" />,
        <FaGithub key="github" />,
        <FaDocker key="docker" />,
        <PiMicrosoftTeamsLogoFill key="teams" />,
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
        <FaReact key="react" />,
        <SiJavascript key="javascript" />,
        <PiFileCSharpDuotone key="csharp" />,
        <SiDotnet key="dotnet" />,
        <FaHtml5 key="html5" />,
        <FaCss3Alt key="css3" />,
        <SiMysql key="mysql" />,
        <FaBootstrap key="bootstrap" />,
        <SiTailwindcss key="tailwind" />,
        <FaGitAlt key="git" />,
        <FaGithub key="github" />,
        <PiMicrosoftTeamsLogoFill key="teams" />,
        <PiMicrosoftWordLogoFill key="word" />,
        <PiMicrosoftExcelLogoFill key="excel" />,
        <PiMicrosoftOutlookLogoFill key="outlook" />,
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-md mt-20 md:mx-20 lg:mx-52 xl:mx-80  2xl:mx-96"
    >
      <h2 className="text-3xl font-bold mb-6 col-span-full">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-4 col-span-full"
        >
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
                <div key={techiconsIndex} className="mt-6 mx-2 md:mx-4">
                  {React.cloneElement(techicon, { size: 32 })}
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
