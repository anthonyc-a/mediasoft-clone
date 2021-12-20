import Abilities from "./components/Content/Abilities/Abilities";
import Approach from "./components/Content/Apporach/Approach";
import Banner from "./components/Content/Banner/Banner";
import Contact from "./components/Content/Contact/Contact";
import Hero from "./components/Content/Hero/Hero";
import Projects from "./components/Content/Projects/Projects";
import Rating from "./components/Content/Rating/Rating";
import Team from "./components/Content/Team/Team";
import Footer from "./components/Footer/Footer";
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
      <Rating />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
