import Icon from "./Icon";

export default function MidCTA() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-cyan-600 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center text-white lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Nie wiesz, jaki model wybrać?
          </h2>
          <p className="mt-2 text-base text-white/80">
            Zostaw kontakt — dobierzemy klimatyzator do Twojego domu i budżetu.
            Wycena w ciągu kilku godzin.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
          >
            Zostaw kontakt
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href="tel:+48788304845"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Icon name="phone" className="h-4 w-4" />
            Zadzwoń
          </a>
        </div>
      </div>
    </section>
  );
}
