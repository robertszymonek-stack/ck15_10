import Icon from "./Icon";

export default function AuthorizationMeaning() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Dlaczego autoryzacja ma znaczenie
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            ⚠️ Dlaczego warto kupić klimatyzację u autoryzowanego instalatora?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Wielu klientów nie wie, że kupując klimę bez autoryzowanego montażu,
            może stracić gwarancję producenta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-red-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Icon name="close" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  🔴 Nieautoryzowany montaż = brak gwarancji
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Większość producentów (Mitsubishi, Gree, Haier...) wymaga, żeby
                  montaż wykonał certyfikowany partner. Inaczej w razie awarii
                  płacisz za naprawę z własnej kieszeni.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  ✅ Autoryzowany montaż = pełna ochrona
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Otrzymujesz pełne 5-7 lat gwarancji producenta, rejestrację
                  urządzenia w systemie producenta i oryginalne części przy
                  serwisie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-sky-200 bg-sky-50 p-7 text-center sm:p-8">
          <p className="text-lg leading-relaxed text-slate-700">
            Sprawdź, czy firma, którą wybierasz, ma aktualną autoryzację. U nas
            masz <strong>7 autoryzacji</strong> – wybierz markę, której ufasz,
            my zadbamy o resztę.
          </p>
        </div>
      </div>
    </section>
  );
}