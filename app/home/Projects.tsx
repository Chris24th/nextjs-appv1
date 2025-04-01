import { motion } from "framer";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaLaravel,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { SiJavascript, SiMysql } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

export default function Projects() {
  const projects = [
    {
      Project: "Postello",
      role: "Full-stack Developer",
      description:
        "Developed a social media application like Facebook, where users can post, comment, and has reaction feature.",
      techicons: [
        <FaReact key="react" />,
        <SiJavascript key="javascript" />,
        <FaLaravel key="laravel" />,
        <FaCss3Alt key="css3" />,
        <SiMysql key="mysql" />,
        <FaBootstrap key="bootstrap" />,
        <FaNode key="node" />,
        <FaDocker key="docker" />,
      ],
      repository: "https://github.com/Chris24th/",
    },
    {
      Project: "Smart Safety Helmet App",
      role: "Full-stack Developer",
      description: "A School project for Thesis.",
      techicons: [<FaFlutter key="flutter" />, <FaDartLang key="dart" />],
      repository: "https://github.com/Chris24th/",
    },
    {
      Project: "Personal Mini Coin Bank (PMCB) App",
      role: "Full-stack Developer",
      description: "A School project from [Embedded] subject.",
      techicons: [<FaFlutter key="flutter" />, <FaDartLang key="dart" />],
      repository: "https://github.com/Chris24th/",
    },
    {
      Project: "Poetry Pad",
      role: "Full-stack Developer",
      description: "A School project from [Software Development 3] subject.",
      techicons: [
        <FaReact key="react" />,
        <SiJavascript key="javascript" />,
        <FaLaravel key="laravel" />,
        <FaCss3Alt key="css3" />,
        <SiMysql key="mysql" />,
        <FaBootstrap key="bootstrap" />,
      ],
      repository: "https://github.com/Chris24th/",
      website: "https://poetry-pad.vercel.app/",
    },
    {
      Project: "Ambience",
      role: "Full-stack Developer",
      description: "A School project from [Software Development 2] subject.",
      techicons: [
        <FaReact key="react" />,
        <SiJavascript key="javascript" />,
        <FaCss3Alt key="css3" />,
        <SiMysql key="mysql" />,
        <FaBootstrap key="bootstrap" />,
      ],
      repository: "https://github.com/Chris24th/Ambience-v1",
    },
    {
      Project: "Piano",
      role: "QA Engineer",
      description: "A School project from [Software Development 1] subject.",
      techicons: [],
      repository: "https://github.com/knee-son/team-code-of-duty",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col p-6 gap-6 rounded-md shadow-md mt-20 md:mx-20 lg:mx-52 xl:mx-80 2xl:mx-96"
    >
      <h2 className="text-3xl font-bold mb-6 col-span-full">Projects</h2>
      {projects.map((proj, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          key={index}
          className="flex flex-col gap-2 p-8 md:mx-6 rounded-lg border-1 border-[var(--color3)] shadow-[0_0_8px_var(--color3)] items-center"
        >
          <h3 className="text-xl font-semibold text-center">{proj.Project}</h3>
          <p className="text-sm">{proj.role}</p>
          <p className="text-center mt-2 text-sm md:text-md">
            {proj.description}
          </p>
          {proj.techicons != null && (
            <div className="flex my-2 text-2xl gap-3">{proj.techicons}</div>
          )}
          <div className="flex gap-4">
            <a href={proj.repository} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-[var(--color2)] text-bg-[var(--color4)] px-4 py-2 rounded-full hover:bg-[var(--color3)] transition">
                <FaGithub className="mr-2 text-2xl" />
                View Repository
              </button>
            </a>
            {proj.website != null && (
              <a href={proj.website} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center bg-[var(--color2)] text-bg-[var(--color4)] px-4 py-2 rounded-full hover:bg-[var(--color3)] transition">
                  <TbWorld className="mr-2 text-2xl" />
                  Visit Site
                </button>
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
