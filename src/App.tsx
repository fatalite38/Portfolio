import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IconLibrary } from "./components/Icons";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { ProjectTransition } from "./components/ProjectTransition";

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <IconLibrary />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ProjectTransition />
        <Projects />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
