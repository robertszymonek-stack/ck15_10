import { useState } from "react";
import { packages } from "../data";
import Icon from "./Icon";

const brands = [
  "Wszystkie",
  ...Array.from(new Set(packages.map((pkg) => pkg.brand))).sort((a, b) =>
    a.localeCompare(b, "pl")
  ),
];

// najniższa cena w danym pakiecie (w zł, jako liczba)
function lowestPrice(pkg: (typeof packages)[number]): number {
  return Math.min(
    ...pkg.powers.map((p) =>
      parseInt(p.price.replace(/\D/g, ""), 10) || Number.MAX_SAFE_INTEGER
    )
  );
}

export default function Packages() {
  const [selectedBrand, setSelectedBrand] = useState("Wszystkie");

  const filtered = (selectedBrand === "Wszystkie"
    ? packages
    : packages.filter((p) => p.brand === selectedBrand)
  )
    .slice()
    .sort((a, b) => lowestPrice(a) - lowestPrice(b));

  return (
    <section id="cennik" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Klimatyzatory z montażem
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
Ceny klimatyzatorów split
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Wszystkie ceny zawierają montaż oraz VAT 8% dla klientów
            indywidualnych w budownictwie mieszkaniowym. Poniżej pokazujemy
            najpopularniejsze modele — w ofercie mamy{" "}
            <strong>wszystkie modele split</strong> (jedno pomieszczenie) i{" "}
            <strong>multisplit</strong> (wiele pomieszczeń) od producentów, z
            którymi współpracujemy: Fuji Electric, Rotenso, Haier, Gree, LG,
            Kaisai, Mitsubishi Electric, Sevra i AUX.
          </p>
        </div>

        {/* filtry */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                selectedBrand === brand
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* karty */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => (
            <div
              key={pkg.brand + pkg.model}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100"
            >
              {/* tag */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {pkg.brand}
                </span>
                <Tag label={pkg.tag} color={pkg.tagColor} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {pkg.model}
                </h3>
                <span className="mt-1 inline-block w-fit rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
                  {pkg.rating}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {pkg.highlight}
                </p>

                {/* cechy */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pkg.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* ceny */}
                <div className="mt-auto pt-5">
                  <div className="space-y-1.5">
                    {pkg.powers.map((p) => (
                      <div
                        key={p.kw}
                        className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5"
                      >
                        <span className="text-sm font-medium text-slate-700">
                          {p.kw}
                        </span>
                        <span className="text-base font-bold text-slate-900">
                          {p.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-center text-[10px] text-slate-400">
                    Brutto, z montażem, VAT 8%
                  </p>
                </div>

                <a
                  href="#kontakt"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:brightness-110"
                >
                  Wybieram ten model
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Odpowiemy ASAP
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Nie znalazłeś odpowiedniego modelu?{" "}
          <a href="#kontakt" className="font-semibold text-sky-600 underline">
            Zadzwoń lub zostaw wiadomość
          </a>{" "}
          — dobierzemy urządzenie indywidualnie.
        </p>
      </div>
    </section>
  );
}

function Tag({ label, color }: { label: string; color: string }) {
  const map: Record<string, string> = {
    amber: "bg-amber-100 text-amber-800",
    emerald: "bg-emerald-100 text-emerald-800",
    sky: "bg-sky-100 text-sky-800",
    violet: "bg-violet-100 text-violet-800",
    rose: "bg-rose-100 text-rose-800",
    pink: "bg-pink-100 text-pink-800",
    slate: "bg-slate-200 text-slate-800",
    red: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
        map[color] || map.amber
      }`}
    >
      {label}
    </span>
  );
}
