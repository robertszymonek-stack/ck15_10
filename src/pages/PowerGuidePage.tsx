import {
  powerFactors,
  sizingChecklist,
  sizingExamples,
  sizingMistakes,
} from "../data";
import Icon from "../components/Icon";

export default function PowerGuidePage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Poradnik doboru mocy klimatyzatora
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Dobierz moc precyzyjnie,
            <span className="block bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              nie tylko po metrażu.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Dwa pokoje o tej samej powierzchni mogą potrzebować zupełnie innego
            klimatyzatora. Różnicę robi nasłonecznienie, wysokość, liczba okien,
            izolacja i to, czy urządzenie ma też skutecznie ogrzewać zimą.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {powerFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Icon name={factor.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{factor.title}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-600">{factor.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                Przykładowy dobór
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Orientacyjne zakresy mocy
              </h2>
              <div className="mt-8 space-y-4">
                {sizingExamples.map((item) => (
                  <div key={item.size} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <strong className="text-lg text-slate-900">{item.size}</strong>
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-700">
                        {item.power}
                      </span>
                    </div>
                    <p className="mt-3 text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-black text-slate-900">Co bierzemy pod uwagę?</h3>
                <ul className="mt-5 space-y-3">
                  {sizingChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-black text-slate-900">Najczęstsze błędy</h3>
                <div className="mt-5 space-y-4">
                  {sizingMistakes.map((item) => (
                    <div key={item.title}>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Nie zgadujemy. Dobieramy na podstawie konkretów.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            W praktyce najwygodniej zrobić 15-minutową wideokonsultację. Pokażesz
            nam wnętrze, ścianę, okna i miejsce agregatu — a my podamy właściwą
            moc oraz 2–3 modele dopasowane do Twojego budżetu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
            >
              Umów wideokonsultację
            </a>
            <a
              href="#cennik"
              className="rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Zobacz modele i ceny
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
