import { useState } from "react";
import Icon from "./Icon";

type Props = {
  route:
    | "home"
    | "models"
    | "service-pricing"
    | "power-guide"
    | "privacy-policy"
    | "terms"
    | "certificates";
};

export default function Nav({ route }: Props) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#proces", label: "Jak to działa" },
    { href: "#/modele", label: "Modele" },
    { href: "#dobor-mocy", label: "Dobór mocy" },
    { href: "#/cennik-uslug", label: "Cennik usług" },
    { href: "#/certyfikaty", label: "Certyfikaty" },
    { href: "#dlaczego-my", label: "Problemy" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 md:px-6 lg:px-8">
        <a href={route === "home" ? "#top" : "#/"} className="mr-6 flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 text-white shadow-lg shadow-sky-500/30">
            <Icon name="snowflake" className="h-5 w-5" />
          </span>
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-white">
            Czas<span className="text-sky-400">Klimy</span>
            <span className="text-white/40">.pl</span>
          </span>
        </a>

        <nav className="hidden flex-1 items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-4 hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="tel:+48788304845"
            className="flex items-center gap-1.5 whitespace-nowrap text-sm text-white/70 transition hover:text-white"
          >
            <Icon name="phone" className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">+48 788 304 845</span>
          </a>
          <a
            href="#kontakt"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/30 transition hover:brightness-110"
          >
            📝 Napisz
          </a>
        </div>

        <button
          className="ml-auto md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7 text-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+48788304845"
              className="mt-2 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-white/90"
            >
              <Icon name="phone" className="h-4 w-4" />
              +48 788 304 845
            </a>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Zostaw kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
