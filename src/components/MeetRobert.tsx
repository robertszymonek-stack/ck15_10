import Icon from "./Icon";

export default function MeetRobert() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Zdjęcie */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-500 to-cyan-500 p-1 shadow-2xl shadow-sky-200">
              <img
                src="/images/robert.jpg"
                alt="Robert — doradca klimatyzacji CzasKlimy.pl"
                className="h-full w-full rounded-[1.8rem] object-cover"
              />
            </div>
          </div>

          {/* Treść */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              👋 Cześć! Jestem Robert
            </h2>
            <p className="mt-2 text-lg font-semibold text-sky-600">
              Twój doradca klimatyzacji w Warszawie i okolicach
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Pomagam mieszkańcom <strong>Warszawy, Piaseczna i okolic</strong> w doborze i montażu klimatyzacji od podstaw. Bez stresu, bez ukrytych kosztów, bez czekania tygodniami na wycenę.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900">
                Czym różnię się od „internetowych sklepów"?
              </h3>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">🎯 Stały zespół, nie podwykonawcy</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Te same osoby od wyceny do serwisu — nie przypadkowy monter z ogłoszenia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">📞 Bezpośredni kontakt</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Dzwonisz do mnie na 788 304 845 — nie do call center z kolejką telefoniczną</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">⏱️ Wycena jeszcze dziś</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Wideokonsultacja lub przesłanie zdjęć — pokazujesz wnętrze, dostajesz konkretną cenę tego samego dnia. Mogę też podjechać z katalogami, obejrzeć i zaproponować najlepsze rozwiązanie.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">🛠️ Doświadczenie</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Wiemy, jak to robić porządnie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">🏆 Autoryzacje 8 marek</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Mitsubishi Electric, LG, Gree, Haier, Rotenso, Kaisai, AUX, Fuji Electric — pełna gwarancja producenta</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <strong className="text-slate-900">🚀 Szybka reakcja na problemy</strong>
                    <p className="mt-0.5 text-sm text-slate-600">Lokalna ekipa — w razie awarii jesteśmy u Ciebie lada dzień, nie za 3 tygodnie</p>
                  </div>
                </li>
              </ul>
            </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+48788304845"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
                >
                  📞 Zadzwoń: 788 304 845
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-700 transition hover:border-sky-400 hover:text-sky-600"
                >
                  💬 Zostaw kontakt
                </a>
                <a
                  href="#/modele"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-50 px-7 py-4 text-base font-bold text-sky-700 shadow-md shadow-sky-200 transition hover:bg-sky-100 hover:border-sky-500"
                >
                  💰 Zobacz ceny klimatyzatorów
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
