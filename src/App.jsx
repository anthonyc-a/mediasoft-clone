import Abilities from "./components/Content/Abilities/Abilities";
import Approach from "./components/Content/Apporach/Approach";
import Banner from "./components/Content/Banner/Banner";
import Hero from "./components/Content/Hero/Hero";
import Projects from "./components/Content/Projects/Projects";
import Team from "./components/Content/Team/Team";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Abilities />
      <Banner />
      <Approach />
      <Projects />
      <Team />
    </div>
  );
}

export default App;
