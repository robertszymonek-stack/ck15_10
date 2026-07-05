import Hero from "../components/Hero";
import Stats from "../components/Stats";
import MeetRobert from "../components/MeetRobert";
import Areas from "../components/Areas";
import ProblemsSection from "../components/ProblemsSection";
import PowerSelection from "../components/PowerSelection";
import MidCTA from "../components/MidCTA";
import Process from "../components/Process";
import Warranty from "../components/Warranty";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero z mini-formularzem — konwersja above the fold */}
      <Hero />

      {/* 2. Stats — szybkie budowanie zaufania */}
      <Stats />

      {/* 3. Poznaj Roberta — twarz firmy, buduje zaufanie */}
      <MeetRobert />

      {/* 4. Problemy klientów — obiekcje */}
      <ProblemsSection />

      {/* 5. Obsługiwane obszary */}
      <Areas />

      {/* 8. Dobór mocy — edukacja */}
      <PowerSelection />

      {/* 9. CTA pośrednie */}
      <MidCTA />

      {/* 10. Jak to działa */}
      <Process />

      {/* 11. Gwarancje */}
      <Warranty />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Formularz główny */}
      <Contact />
    </main>
  );
}
