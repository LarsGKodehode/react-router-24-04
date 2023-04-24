/**
 * React Router har fått en nylig oppdatering
 * hvor de har endret anbefalingen om hvordan å
 * sette den opp på. Dere kan bruke denne metoden
 * som vi gikk igjennom eller den nye metoden
 * som ligger her https://reactrouter.com/en/main/start/tutorial
 *
 * På sikt så må dere nok kunne begge,
 * men i øyeblikket så er dette
 * det som flest eksisterendes prosjekter
 * benytter. Det er også det som du
 * vil finne flest svar på når du søker
 * opp hvordan å gjøre noe.
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout/RootLayout";
import { LandingPage } from "./routes/LandingPage";
import { AboutPage } from "./routes/about/AboutPage";
import { ContactPage } from "./routes/contact/ContactPage";
import { ProjectsPage } from "./routes/projects/ProjectsPage";

// Noe å notere seg her er at vi har gått
// fra å skrive HTML og CSS inne i App komponenten
// vår til å kun benytte den til 'logisk' funksjonalitet

function App() {
  return (
    <Router>
      <Routes>
        {/* 
          Dette er en 'root' rute og alle rutene som 
          ligger under denne vil automatisk få en URL
          adresse som starter med det som står inne i 'path' propertien
         */}
        <Route path="/" element={<RootLayout />}>
          {/*
            index? => URL = parent path
          */}
          <Route index element={<LandingPage />} />

          {/*
            URL => '/' + 'about' = '/about'
          */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
