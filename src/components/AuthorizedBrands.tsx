import Icon from "./Icon";

const brands = [
  "Mitsubishi Electric",
  "Gree",
  "Haier",
  "Rotenso",
  "Kaisai",
  "AUX",
  "Sevra",
  "Fuji Electric",
];

const benefits = [
  "Pełnej gwarancji producenta (5-7 lat)",
  "Szkolonych monterów z certyfikatem każdej marki",
  "Oryginalnych części serwisowych",
  "Możliwości rejestracji urządzenia w systemie producenta",
];

export default function AuthorizedBrands() {
  return (
    <section className="bg-white py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-7 shadow-xl shadow-sky-100/50 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white">
                🏆 Autoryzowany montaż i serwis 8 producentów
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Wybierz markę, której ufasz. My zadbamy o resztę.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Posiadamy aktualne autoryzacje producentów. To nie jest tylko
                znaczek w ofercie — to realna ochrona gwarancyjna, dostęp do
                oryginalnych części i poprawna rejestracja urządzenia.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm whitespace-nowrap"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <Icon name="check" className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium leading-relaxed text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}