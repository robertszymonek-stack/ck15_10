import {
  pricingExtras,
  pricingHighlights,
  pricingMultisplit,
  splitInstallPricing,
} from "../data";
import Icon from "../components/Icon";

export default function ServicePricingPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Cennik usług klimatyzacja
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Przejrzyste ceny,
            <span className="block bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              bez ukrytych kosztów.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Tutaj znajdziesz orientacyjne ceny montażu klimatyzacji split,
            multisplit i najczęstszych prac dodatkowych. Dokładną wycenę
            potwierdzamy po krótkiej wideokonsultacji.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
              >
                <span className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{item}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard title="Klimatyzatory Split" subtitle="Najczęściej wybierany system do mieszkań i domów">
              <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                <div>Usługa</div>
                <div>Osoba prywatna z 8% VAT</div>
                <div>Firma z 23% VAT</div>
              </div>
              {splitInstallPricing.map((row) => (
                <div key={row.label} className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{row.label}</h3>
                    <p className="mt-1 text-xs text-slate-500">{row.note}</p>
                  </div>
                  <strong className="text-base text-slate-900">{row.privatePrice}</strong>
                  <strong className="text-base text-slate-900">{row.companyPrice}</strong>
                </div>
              ))}
            </PricingCard>

            <PricingCard title="Klimatyzatory MultiSplit" subtitle="Jedno urządzenie zewnętrzne dla całego domu lub mieszkania">
              <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                <div>Usługa</div>
                <div>Osoba prywatna z 8% VAT</div>
                <div>Firma z 23% VAT</div>
              </div>
              {pricingMultisplit.map((row) => (
                <div
                  key={row.rooms}
                  className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="text-base font-medium text-slate-700">{row.rooms}</span>
                  <strong className="text-base text-slate-900">{row.privatePrice}</strong>
                  <strong className="text-base text-slate-900">{row.companyPrice}</strong>
                </div>
              ))}
            </PricingCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Usługi dodatkowe
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Doliczane tylko wtedy, gdy są naprawdę potrzebne
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Wszystkie dodatkowe prace wyceniamy przed montażem. Klient zna
              cenę wcześniej — nie po fakcie.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
              <div className="grid grid-cols-[1.5fr_0.85fr_0.85fr] gap-4 bg-slate-900 px-6 py-4 text-sm font-bold text-white">
              <div>Usługa</div>
              <div>Osoba prywatna z 8% VAT</div>
              <div>Firma z 23% VAT</div>
            </div>
            {pricingExtras.map((row, index) => (
              <div
                key={row.service}
                className={`grid grid-cols-[1.5fr_0.85fr_0.85fr] gap-4 px-6 py-5 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="text-base text-slate-700">{row.service}</span>
                <strong className="text-base text-slate-900">{row.privatePrice}</strong>
                <strong className="text-base text-slate-900">{row.companyPrice}</strong>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
            <h3 className="text-center text-xl font-black text-slate-900 sm:text-2xl">
              Montaż podstawowy klimatyzatora typu split obejmuje
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              instalację jednostki wewnętrznej i zewnętrznej, wykonanie jednego
              przewiertu przez ścianę oraz połączenie całego układu. Standardowo
              pakiet obejmuje również do 3 metrów instalacji chłodniczej,
              grawitacyjne odprowadzenie skroplin oraz podłączenie zasilania do
              istniejącej instalacji elektrycznej. Ponadto montaż płyty
              montażowej i jednostki wewnętrznej, montaż jednostki zewnętrznej na
              wsporniku lub podstawie, wykonanie jednego otworu pod instalację,
              połączenie jednostek rurami miedzianymi w izolacji, wykonanie
              połączeń elektrycznych między jednostkami, grawitacyjne
              odprowadzenie skroplin, próbę szczelności i wykonanie próżni,
              pierwsze uruchomienie oraz krótki instruktaż obsługi.
            </p>
            <p className="mt-5 text-center text-sm text-slate-500">
              Jeśli nie jesteś pewien, czy w Twoim przypadku potrzebne będą
              dodatkowe przewierty, pompka skroplin albo dłuższa instalacja —
              pokaż nam to na telefonie. Powiemy od razu, co wchodzi w cenę.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Nie wiesz, ile dokładnie zapłacisz?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Wyślij zapytanie lub zadzwoń. W ciągu 24 godzin przygotujemy
            dokładną kalkulację dla Twojego montażu — bez zobowiązań.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
            >
              Poproś o wycenę
            </a>
            <a
              href="tel:+48788304845"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              +48 788 304 845
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function PricingCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 className="text-2xl font-black text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      <div className="mt-6 space-y-4">{children}</div>
    </div>
  );
}
