import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import HomePage from "./pages/HomePage";
import ServicePricingPage from "./pages/ServicePricingPage";
import PowerGuidePage from "./pages/PowerGuidePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import CertificatesPage from "./pages/CertificatesPage";
import ModelsPage from "./pages/ModelsPage";

type Route =
  | "home"
  | "models"
  | "service-pricing"
  | "power-guide"
  | "privacy-policy"
  | "terms"
  | "certificates";

function getRouteFromHash(): Route {
  const hash = window.location.hash || "";
  if (hash.startsWith("#/modele")) return "models";
  if (hash.startsWith("#/cennik-uslug")) return "service-pricing";
  if (hash.startsWith("#/poradnik-mocy")) return "power-guide";
  if (hash.startsWith("#/polityka-prywatnosci")) return "privacy-policy";
  if (hash.startsWith("#/regulamin")) return "terms";
  if (hash.startsWith("#/certyfikaty")) return "certificates";
  return "home";
}

export default function App() {
  const [route, setRoute] = useState<Route>("home");

  useEffect(() => {
    const updateRoute = () => setRoute(getRouteFromHash());
    updateRoute();
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    if (route === "home") {
      const hash = window.location.hash;
      if (hash && !hash.startsWith("#/")) {
        window.setTimeout(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
        return;
      }
    }
    // Przy każdej zmianie podstrony — przewiń na górę
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="min-h-screen bg-white pb-16 text-slate-900 lg:pb-0">
      <Nav route={route} />
      {route === "home" && <HomePage />}
      {route === "models" && <ModelsPage />}
      {route === "service-pricing" && <ServicePricingPage />}
      {route === "power-guide" && <PowerGuidePage />}
      {route === "privacy-policy" && <PrivacyPolicyPage />}
      {route === "terms" && <TermsPage />}
      {route === "certificates" && <CertificatesPage />}
      <Footer />
      {route === "home" && <StickyCTA />}
    </div>
  );
}
