import Icon from "./Icon";

export default function Areas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-4xl">📍</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Obsługujemy:
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Montaż klimatyzacji w Warszawie i okolicach — Piaseczno,
            Konstancin Jeziorna i wiele innych.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏙️</span>
              Warszawa — dzielnice południowe
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Mokotów, Ursynów, Kabaty, Powsin, Wilanów</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏘️</span>
              Piaseczno i okolice (do 25 km)
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  Lesznowola, Nowa Iwiczna, Józefosław, Konstancin Jeziorna,
                  Gołków, Żabieniec, Zalesie Górne, Mysiadło, Zamienie, Zalesie Dolne
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-sky-100 bg-white p-6 text-center">
          <p className="text-sm text-slate-600">
            <strong>Klimatyzacja Warszawa</strong> • <strong>Montaż klimy Warszawa</strong> •{" "}
            <strong>Klimatyzacja Piaseczno</strong> • <strong>Klimatyzacja Józefosław</strong> •{" "}
            <strong>Klimatyzacja Konstancin Jeziorna</strong> • <strong>Klimatyzacja Gołków</strong> •{" "}
            <strong>Klimatyzacja Zalesie</strong> • <strong>Montaż klimy Mysiadło</strong> •{" "}
            <strong>Klimatyzacja Lesznowola</strong>
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-center">
          <p className="text-base leading-relaxed text-slate-700">
            📞 Nie wiesz, czy obsługujemy Twoją okolicę?
            <br />
            Zadzwoń:{' '}
            <a
              href="tel:+48788304845"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              788 304 845
            </a>{' '}
            lub{' '}
            <a
              href="#kontakt"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              zostaw kontakt
            </a>{' '}
            — odpowiemy ASAP.
          </p>
        </div>

        {/* Przycisk cennika */}
        <div className="mt-10 text-center">
          <a
            href="#/modele"
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-50 px-7 py-4 text-base font-semibold text-sky-700 shadow-md shadow-sky-200 transition hover:bg-sky-100 hover:border-sky-500"
          >
            💰 Zobacz ceny klimatyzatorów
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        {/* Subtelna lista SEO */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-slate-200 pt-6 text-center text-[10px] leading-relaxed text-slate-400">
          <p className="mb-2 font-semibold uppercase tracking-wider text-slate-300">
            Szczegółowy obszar działania
          </p>
          <p>
            Klimatyzacja Piaseczno, Nowa Iwiczna, Józefosław, Konstancin Jeziorna, Gołków, Żabieniec, Zalesie Górne, Mysiadło, Zamienie, Zalesie Dolne, Lesznowola.
          </p>
        </div>
      </div>
    </section>
  );
}
