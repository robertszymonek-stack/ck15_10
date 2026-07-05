import { pricingExtras, pricingMultisplit } from "../data";
import Icon from "./Icon";

export default function PricingExtras() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Cennik usług
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Przejrzyste ceny, bez niespodzianek
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Montaż jednostki split jest wliczony w cenę. Poniżej — usługi
            dodatkowe i wycena instalacji multisplit, których cenę wyliczamy
            indywidualnie.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
            <div className="bg-slate-900 px-6 py-5">
              <h3 className="text-xl font-bold text-white">🔧 Usługi dodatkowe</h3>
              <p className="mt-1 text-sm text-white/60">
                Doliczane tylko gdy potrzebne — zawsze wyceniane przed montażem
              </p>
            </div>

            <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
              <div>Usługa</div>
              <div>Osoba prywatna z 8% VAT</div>
              <div>Firma z 23% VAT</div>
            </div>

            {pricingExtras.map((row, i) => (
              <div
                key={row.service}
                className={`grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="text-sm text-slate-800 sm:text-base">{row.service}</span>
                <span className="text-sm font-bold text-slate-900 sm:text-base">{row.privatePrice}</span>
                <span className="text-sm font-bold text-slate-900 sm:text-base">{row.companyPrice}</span>
              </div>
            ))}

            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
              <p className="text-sm text-slate-500">
                Ceny brutto dla osób prywatnych, firmy według stawki 23% VAT.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
              <div className="bg-slate-900 px-6 py-5">
                <h3 className="text-xl font-bold text-white">🏠 Montaż MultiSplit</h3>
                <p className="mt-1 text-sm text-white/60">
                  Systemy wielogałęziowe — cały dom z jednego agregatu
                </p>
              </div>
              <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                <div>Usługa</div>
                <div>Osoba prywatna z 8% VAT</div>
                <div>Firma z 23% VAT</div>
              </div>
              {pricingMultisplit.map((row, i) => (
                <div
                  key={row.rooms}
                  className={`grid grid-cols-[1.45fr_0.8fr_0.8fr] gap-4 px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <span className="text-sm text-slate-800">{row.rooms}</span>
                  <span className="text-sm font-bold text-slate-900">{row.privatePrice}</span>
                  <span className="text-sm font-bold text-slate-900">{row.companyPrice}</span>
                </div>
              ))}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-sm text-slate-500">
                  Ceny brutto (VAT 8%). Dokładna wycena po wideokonsultacji.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Icon name="check" className="h-5 w-5 text-emerald-500" />
                Co zawiera montaż podstawowy
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✔ Przewiert, montaż, okablowanie</li>
                <li>✔ Do 3 m instalacji chłodniczej</li>
                <li>✔ Próba szczelności + uruchomienie</li>
                <li>✔ Szkolenie z obsługi + freon startowy</li>
                <li>✔ Dojazd do 30 km gratis</li>
                <li>✔ Gwarancja 24 mies. na instalację</li>
              </ul>
            </div>

            <a
              href="#kontakt"
              className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
            >
              Zapytaj o wycenę dla siebie
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
