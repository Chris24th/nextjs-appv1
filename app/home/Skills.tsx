import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer";
import { useState } from "react";

export default function Skills() {
  const [percentage, setPercentage] = useState(false);

  const skills = [
    { name: "Javascript", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Git", level: 90 },
    { name: "React.js", level: 85 },
    { name: "HTML", level: 80 },
    { name: "C# (MVC)", level: 80 },
    { name: "Tailwind", level: 80 },
    { name: "MySQL", level: 75 },
    { name: ".NET MAUI", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "Japanese(N4)", level: 65 },
    { name: "Flutter", level: 65 },
    { name: "Arduino", level: 60 },
    { name: "C++", level: 45 },
    { name: "PHP", level: 30 },
    { name: "Xamarin", level: 35 },
    { name: "Python(Flask)", level: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-12 w-full p-6 rounded-md shadow-md mt-20"
    >
      <h2 className="text-3xl font-bold col-span-full mb-2">Skills</h2>
      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 ">
        {skills.map((skill, index) => (
          <div className="mx-4 my-2" key={index}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setPercentage(true)}
              className="col-span-full md:col-span-6 md:grid grid-cols-12 gap-2 justify-center self-center"
            >
              <p className="text-sm lg:text-md mb-2 col-span-4">{skill.name}</p>
              <ProgressBar
                completed={percentage ? skill.level : 0}
                transitionDuration={`${index > 6 ? 3.5 : 3}s`}
                bgColor="var(--color3)"
                labelColor="var(--color4)"
                baseBgColor="var(--color2)"
                className="w-52 md:w-48 col-span-8"
                labelClassName="text-xs font-bold mr-2"
                height="15px"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
