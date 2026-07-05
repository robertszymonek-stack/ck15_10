export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Dokumenty prawne
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Regulamin korzystania z serwisu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            CzasKlimy.pl to serwis informacyjny i landing page służący do prezentacji
            oferty montażu i serwisu klimatyzacji oraz do przyjmowania zapytań kontaktowych.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>1. Charakter serwisu</h2>
            <p>
              Serwis CzasKlimy.pl ma charakter informacyjny i marketingowy. Nie prowadzi
              sprzedaży internetowej w modelu e-commerce. Wysłanie formularza lub kontakt
              telefoniczny nie oznacza automatycznego zawarcia umowy.
            </p>

            <h2>2. Zakres oferty</h2>
            <p>
              Informacje o modelach urządzeń, cenach i usługach mają charakter orientacyjny,
              chyba że wprost wskazano inaczej. Ostateczna oferta jest przygotowywana
              indywidualnie po kontakcie z klientem i ocenie warunków montażu.
            </p>

            <h2>3. Wykonawca usług</h2>
            <p>
              Wykonawcą usług prezentowanych w serwisie jest <strong>Mi Store Sp. z o.o.</strong>
            </p>

            <h2>4. Odpowiedzialność</h2>
            <p>
              Administrator dokłada starań, aby treści publikowane w serwisie były aktualne
              i rzetelne, jednak nie ponosi odpowiedzialności za czasową niedostępność serwisu,
              błędy wynikające z działania dostawców zewnętrznych ani decyzje użytkowników
              podjęte wyłącznie na podstawie opisów orientacyjnych.
            </p>

            <h2>5. Formularz kontaktowy</h2>
            <p>
              Użytkownik korzystający z formularza zobowiązuje się podawać dane prawdziwe
              i niewprowadzające w błąd. Zabronione jest przesyłanie treści bezprawnych,
              obraźliwych lub niezwiązanych z zakresem usług prezentowanych na stronie.
            </p>

            <h2>6. Prawa autorskie</h2>
            <p>
              Treści, układ strony, grafiki, teksty i elementy identyfikacji wizualnej
              podlegają ochronie prawnej. Kopiowanie ich bez zgody właściciela jest zabronione.
            </p>

            <h2>7. Kontakt</h2>
            <p>
              W sprawach dotyczących serwisu możesz skontaktować się telefonicznie pod numerem
              <strong> +48 788 304 845</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
