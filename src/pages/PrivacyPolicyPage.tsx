export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Dokumenty prawne
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Polityka prywatności
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Serwis CzasKlimy.pl jest landing page’em poświęconym usługom klimatyzacji.
            Administratorem danych osobowych przekazywanych przez formularz kontaktowy
            oraz wykonawcą usług jest <strong>Mi Store Sp. z o.o.</strong>
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest <strong>Mi Store Sp. z o.o.</strong>
              CzasKlimy.pl jest stroną
              informacyjną / landing page’em prowadzonym w celu pozyskiwania zapytań
              o montaż i serwis klimatyzacji.
            </p>

            <h2>2. Jakie dane zbieramy</h2>
            <p>
              Za pośrednictwem formularza kontaktowego możemy przetwarzać dane takie jak:
              imię i nazwisko, numer telefonu, adres e-mail, miasto, rodzaj usługi,
              przybliżony metraż oraz dodatkowe informacje przekazane dobrowolnie
              w treści wiadomości.
            </p>

            <h2>3. Cel przetwarzania danych</h2>
            <ul>
              <li>kontakt w sprawie zapytania ofertowego,</li>
              <li>przygotowanie wyceny i przedstawienie oferty,</li>
              <li>obsługa realizacji usługi oraz kontakt posprzedażowy,</li>
              <li>prowadzenie statystyk i działań marketingowych – jeśli są używane narzędzia analityczne.</li>
            </ul>

            <h2>4. Podstawa przetwarzania</h2>
            <p>
              Dane są przetwarzane na podstawie zgody użytkownika wyrażonej przez
              wysłanie formularza kontaktowego oraz w celu podjęcia działań przed
              zawarciem umowy na żądanie osoby, której dane dotyczą.
            </p>

            <h2>5. Odbiorcy danych</h2>
            <p>
              Dane mogą być powierzane podmiotom wspierającym obsługę strony i formularza,
              np. dostawcy infrastruktury formularzy kontaktowych, hostingu, analityki,
              systemów poczty elektronicznej lub narzędzi marketingowych – wyłącznie
              w zakresie niezbędnym do realizacji celu.
            </p>

            <h2>6. Prawa użytkownika</h2>
            <p>
              Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia,
              ograniczenia przetwarzania, wniesienia sprzeciwu oraz cofnięcia zgody.
              Możesz także złożyć skargę do Prezesa UODO.
            </p>

            <h2>7. Kontakt</h2>
            <p>
              W sprawach związanych z danymi osobowymi możesz skontaktować się z administratorem
              pod numerem telefonu <strong>+48 788 304 845</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
