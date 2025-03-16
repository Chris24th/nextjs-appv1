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
      className="flex flex-col justify-between p-6 rounded-md shadow-md mt-10"
      style={{ width: "500px" }}
    >
      <h2 className="text-3xl font-bold mb-6">Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.companyName}</h3>
          <h4 className="text-lg">{exp.position}</h4>
          <p>{exp.description}</p>

          {/* Marquee Wrapper */}
          <div className="relative flex overflow-x-hidden flex items-center justify-center self-center">
            {/* First Set of Marquee Content */}
            <div className="py-6 animate-marquee whitespace-nowrap">
              {exp.techs.join(" • ")}
            </div>
            {/* Second Set of Marquee Content (absolute for overlapping) */}
            <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
              {exp.techs.join(" • ")}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
