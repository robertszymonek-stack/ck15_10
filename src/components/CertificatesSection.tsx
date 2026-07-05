import { certificateCards } from "../data";
import Icon from "./Icon";

const brandStyles: Record<string, string> = {
  Rotenso: "border-red-200 bg-red-50 text-red-700",
  "Fuji Electric / General": "border-slate-300 bg-slate-50 text-slate-700",
  LG: "border-rose-200 bg-rose-50 text-rose-700",
  Gree: "border-blue-200 bg-blue-50 text-blue-700",
  "AUX / Sevra": "border-indigo-200 bg-indigo-50 text-indigo-700",
  Haier: "border-sky-200 bg-sky-50 text-sky-700",
};

export default function CertificatesSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Certyfikaty i autoryzacje
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Aktualne certyfikaty producentów
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Poniżej pokazujemy przykładowe autoryzacje i certyfikaty szkoleniowe,
            które potwierdzają, że montaż i serwis wykonujemy zgodnie z wymogami producentów.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificateCards.map((item) => (
            <article
              key={item.title + item.number}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${brandStyles[item.brand] || "border-slate-200 bg-slate-50 text-slate-700"}`}
                  >
                    {item.brand}
                  </span>
                  <h3 className="mt-4 text-xl font-black leading-snug text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon name="file-badge" className="h-6 w-6" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-t border-slate-100 pt-3">
                  <dt className="text-slate-500">Zakres</dt>
                  <dd className="text-right font-medium text-slate-900">{item.scope}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-slate-100 pt-3">
                  <dt className="text-slate-500">Ważny do</dt>
                  <dd className="text-right font-medium text-slate-900">{item.validUntil}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-slate-100 pt-3">
                  <dt className="text-slate-500">Nr certyfikatu</dt>
                  <dd className="text-right font-medium text-slate-900">{item.number}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-center">
          <p className="text-base leading-relaxed text-slate-700">
            Na życzenie pokazujemy pełne skany aktualnych certyfikatów podczas rozmowy
            lub po przesłaniu kontaktu. Dzięki temu klient widzi, że montaż wykonuje firma
            autoryzowana, a nie przypadkowy podwykonawca.
          </p>
        </div>
      </div>
    </section>
  );
}
