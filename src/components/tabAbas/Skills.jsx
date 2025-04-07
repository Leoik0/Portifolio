// Dados das skills
const skills = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    topics: ["Arrays", "Objetos", "Funções", "Dom", "ES6+", "Loop"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    topics: ["Semântica", "Acessibilidade", "SEO", "Formulários"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    topics: [
      "Flexbox",
      "Grid",
      "Animations",
      "SASS",
      "Transitions",
      "Seletores",
      "Media Queries",
    ],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    topics: ["Hooks", "Context API", "Pros", "Componentes", "JSX", "Navegação"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    topics: ["Utility-First", "Responsividade", "Dark Mode", "Performance"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    topics: ["Branching", "Pull Requests", "Push", "Commits"],
  },
];

const studying = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    topics: ["API REST", "Express.js", "Middleware", "Autenticação"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    topics: ["SSR", "ISR", "App Router", "API Routes"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    topics: ["Tipos", "Interfaces", "Generics", "Type Safety"],
  },
];

const futureSkills = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    topics: ["Em Breve"],
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",

    topics: ["Em Breve"],
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",

    topics: ["Em Breve"],
  },
];

const SkillCard = ({ skill }) => (
  <div className="relative flex items-center justify-center p-[30%] transition-all bg-white shadow-md cursor-pointer group rounded-xl hover:shadow-lg">
    {/* Imagem desaparece no hover */}
    <img
      src={skill.img}
      alt="Skill"
      className="object-contain transition-opacity duration-300 w-14 h-14 group-hover:opacity-0"
    />

    {/* Tópicos aparecem no hover */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 border-white opacity-0 border-1 bg-black/90 rounded-xl group-hover:opacity-100 ">
      <ul className="flex flex-wrap justify-center gap-2">
        {skill.topics.map((topic, i) => (
          <li
            key={i}
            className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="w-full p-4 text-center ">
      {/* Skills que já domina */}
      <h2 className="mb-4 text-xl font-semibold">Minhas Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Skills que está estudando */}
      <h2 className="mt-24 mb-4 text-xl font-semibold">Atualmente Estudando</h2>
      <div className="grid grid-cols-3 gap-4">
        {studying.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Skills que almejo aprender */}
      <h2 className="mt-24 mb-4 text-xl font-semibold">
        Skills que Almejo Aprender
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {futureSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
