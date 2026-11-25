import "./App.css";

import { TopNav } from "./components/TopNav";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { TechnologyBadge } from "./components/TechnologyBadge";
import { ProjectCard } from "./components/ProjectCard";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="parent">
      <TopNav className="top-nav"></TopNav>
      <Home className="home"></Home>
      <AboutMe className="about-me"></AboutMe>
      <TechnologyBadge className="thechnology"></TechnologyBadge>

      <ProjectCard className="project"></ProjectCard>
    </div>
  );
}
export default App;
