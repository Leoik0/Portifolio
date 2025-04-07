import React, { useState } from "react";
import TabButton from "./TabButton"; // Importando o TabButton
import Feed from "./tabAbas/Feed"; // Importando Feed
import Skills from "./tabAbas/Skills"; // Importando Skills
import Projects from "./tabAbas/Projects"; // Importando Projects
import About from "./tabAbas/About"; // Importando About

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("feed"); // Tab inicial

  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Atualiza o estado para a aba selecionada
  };

  return (
    <div>
      {/* Navegação das Abas usando TabButton */}
      <div className="flex ">
        {["feed", "skills", "projects", "about"].map((tab) => (
          <TabButton
            key={tab}
            tabName={tab}
            selectedTab={selectedTab}
            onClick={handleTabChange}
          />
        ))}
      </div>

      {/* Conteúdo da Aba */}
      <div className="flex items-center justify-center w-full mt-8">
        {selectedTab === "feed" && <Feed />}
        {selectedTab === "skills" && <Skills />}
        {selectedTab === "projects" && <Projects />}
        {selectedTab === "about" && <About />}
      </div>
    </div>
  );
};

export default Tab;
