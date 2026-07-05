import { testimonials } from "../data";
import Icon from "./Icon";

export default function Testimonials() {
  return (
    <section id="opinie" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Opinie
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Co mówią nasi klienci
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Poniższe opinie pochodzą z wizytówki Google firmy RoboGaz. Ocena 5/5 od dziesiątek zadowolonych klientów.
            w Legionowie, Serocku, Markach i Warszawie.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i: number) => (
            <figure
              key={i}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <Icon
                name="quote"
                className="absolute right-6 top-6 h-10 w-10 text-sky-100"
              />
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Icon key={j} name="star" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="relative mt-4 text-base leading-relaxed text-slate-700">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
          >
            Dołącz do zadowolonych klientów
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
