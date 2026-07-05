const certificates = [
  {
    brand: "Gree",
    alt: "Certyfikat autoryzacyjny Gree — Robert Szymonek, Mi Store Sp. z o.o.",
    file: "certyfikat-gree.jpg",
  },
  {
    brand: "LG",
    alt: "Certyfikat autoryzowanego instalatora LG — Robert Szymonek, Mi Store Sp. z o.o.",
    file: "certyfikat-lg.jpg",
  },
  {
    brand: "Haier",
    alt: "Certyfikat autoryzowanego punktu serwisowego Haier — Mi Store Sp. z o.o.",
    file: "certyfikat-haier.jpg",
  },
  {
    brand: "Fuji Electric / General",
    alt: "Certyfikat autoryzowanego punktu serwisowego Fuji Electric / General — Mi Store Sp. z o.o.",
    file: "certyfikat-fuji.jpg",
  },
  {
    brand: "AUX / Sevra",
    alt: "Certyfikat autoryzowanego instalatora AUX i Sevra — Mi Store",
    file: "certyfikat-aux-sevra.jpg",
  },
  {
    brand: "Rotenso — szkolenie serwisowe",
    alt: "Certyfikat Rotenso — szkolenie serwisowe z diagnostyki i napraw klimatyzacji",
    file: "certyfikat-rotenso-serwis.jpg",
  },
  {
    brand: "Rotenso — szkolenie handlowo-produktowe",
    alt: "Certyfikat Rotenso — szkolenie handlowo-produktowe klimatyzacja i akcesoria",
    file: "certyfikat-rotenso-produkt.jpg",
  },
  {
    brand: "Kaisai",
    alt: "Certyfikat autoryzowanego partnera serwisowego Kaisai Split/Multi — Mi Store Sp. z o.o.",
    file: "certyfikat-kaisai.jpg",
  },
];

export default function CertificatesPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Certyfikaty i autoryzacje
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Aktualne certyfikaty producentów
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Poniżej prezentujemy aktualne certyfikaty autoryzacyjne i szkoleniowe
            firmy Mi Store Sp. z o.o. — operatora CzasKlimy.pl. Każdy certyfikat
            potwierdza uprawnienia do montażu, serwisu i sprzedaży urządzeń danej
            marki.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {certificates.map((cert) => (
              <figure
                key={cert.file}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={`/images/${cert.file}`}
                  alt={cert.alt}
                  className="w-full"
                  loading="lazy"
                />
                <figcaption className="border-t border-slate-100 px-6 py-4 text-center text-sm font-semibold text-slate-700">
                  {cert.brand}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-center">
            <p className="text-base leading-relaxed text-slate-700">
              Na życzenie udostępniamy pełne skany certyfikatów w większej
              rozdzielczości. Zadzwoń{" "}
              <a
                href="tel:+48788304845"
                className="font-bold text-sky-600 underline"
              >
                788 304 845
              </a>{" "}
              lub{" "}
              <a href="#kontakt" className="font-bold text-sky-600 underline">
                zostaw kontakt
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
