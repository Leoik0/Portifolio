import ProjectCard from "../ProjectCard";

const projects = [
  {
    name: "Mines",
    video: "/public/mines.mp4",
    link: "https://mines-mugen.netlify.app/",
  },
  {
    name: "Tier All",
    video: "/tierAll.mp4",
    link: "https://zesty-duckanoo-fcce58.netlify.app/",
  },
  {
    name: "Kage Guess",
    video: "/kageGuess.mp4",
    link: "https://shadowguesss.netlify.app/",
  },
  {
    name: "Em breve",
    video: "",
    link: "#",
  },
  {
    name: "Em breve",
    video: "",
    link: "#",
  },
  {
    name: "Em breve",
    video: "",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
