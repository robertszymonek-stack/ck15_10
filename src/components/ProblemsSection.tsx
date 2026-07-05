import { painPoints } from "../data";
import Icon from "./Icon";

export default function ProblemsSection() {
  return (
    <section id="dlaczego-my" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Dlaczego my
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Znamy Twoje problemy...{" "}
            <span className="text-sky-600">i nie tworzymy nowych</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Przez lata montaży wiemy, czego klienci się obawiają. Dlatego
            każdy z tych problemów rozwiązaliśmy systemowo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-700">
                      {item.benefit}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
          >
            Sprawdź wolne terminy
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href="#/modele"
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-50 px-7 py-4 text-base font-semibold text-sky-700 shadow-md shadow-sky-200 transition hover:bg-sky-100 hover:border-sky-500"
          >
            💰 Zobacz ceny klimatyzatorów
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
