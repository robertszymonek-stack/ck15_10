import { useRef, useState } from "react";
import Icon from "./Icon";
import { TWILIO_WEBHOOK_URL } from "../config";

const ACCESS_KEY = "7142b5c3-09f0-4888-a63a-c95a7accb443";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ ...emptyForm });
  const successRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData();
    data.append("access_key", ACCESS_KEY);
    data.append(
      "subject",
      `Nowe zapytanie CzasKlimy.pl — ${form.name || "Strona"}`
    );
    data.append("from_name", "CzasKlimy.pl");
    data.append("Imię", form.name);
    data.append("Telefon", form.phone);
    data.append("Email", form.email);
    if (form.message) data.append("Dodatkowe informacje", form.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        // Opcjonalne powiadomienie SMS przez Twilio Function
        if (TWILIO_WEBHOOK_URL) {
          try {
            const smsData = new FormData();
            smsData.append("name", form.name);
            smsData.append("phone", form.phone);
            smsData.append("email", form.email);
            await fetch(TWILIO_WEBHOOK_URL, {
              method: "POST",
              body: smsData,
              keepalive: true,
            });
          } catch {
            // Nie blokujemy sukcesu formularza jeśli Twilio nie odpowie
          }
        }

        setStatus("sent");
        setForm({ ...emptyForm });

        setTimeout(() => {
          successRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 50);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
  };

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-slate-950 py-12 text-white sm:py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:px-4 sm:py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Wolne terminy w tym tygodniu</span>
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
            Zostaw kontakt — oddzwonimy
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base lg:text-lg">
            Omówimy potrzeby i podamy wycenę — najczęściej w ciągu kilku godzin. Bezpłatnie i bez zobowiązań.
          </p>
        </div>

        <div ref={successRef} className="mx-auto mt-6 max-w-xl sm:mt-8">
          {status === "sent" ? (
            <SuccessBox onReset={reset} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8"
            >
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                <Field label="Imię">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="input"
                    placeholder="Jan"
                  />
                </Field>
                <Field label="Telefon">
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="input"
                    placeholder="+48 ..."
                  />
                </Field>
                <Field label="E-mail">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="input"
                    placeholder="jan@domena.pl"
                  />
                </Field>
              </div>
              <div className="mt-3 sm:mt-4">
                <Field label="Dodatkowe informacje (opcjonalne)">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="input min-h-[90px] resize-none sm:min-h-[100px]"
                    placeholder="Np. wybrany model klimatyzatora, liczba pomieszczeń, metraż, rodzaj budynku..."
                    rows={3}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110 disabled:opacity-60 sm:mt-6 sm:py-4 sm:text-base"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 0 1 8-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Wysyłanie...
                  </>
                ) : status === "error" ? (
                  <>Błąd wysyłania — spróbuj ponownie lub zadzwoń</>
                ) : (
                  <>
                    Wyślij zapytanie
                    <Icon name="arrow" className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11px] leading-relaxed text-white/50 sm:text-xs">
                Pracujemy pn–pt 9:00–18:00, montaże 8:00-20:00.
                <br className="hidden sm:inline" />
                {" "}Wysyłając formularz akceptujesz{" "}
                <a href="#/polityka-prywatnosci" className="underline hover:text-white">
                  politykę prywatności
                </a>.
              </p>
            </form>
          )}
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          <a
            href="tel:+48788304845"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition hover:border-sky-400/40 hover:bg-white/10 sm:gap-3 sm:px-5 sm:py-3"
          >
            <Icon name="phone" className="h-4 w-4 text-sky-400 sm:h-5 sm:w-5" />
            <span className="font-semibold">+48 788 304 845</span>
          </a>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm sm:gap-3 sm:px-5 sm:py-3">
            <Icon name="award" className="h-4 w-4 text-sky-400 sm:h-5 sm:w-5" />
            <span className="font-semibold">5/5 na Google</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function SuccessBox({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-center backdrop-blur-xl sm:gap-6 sm:rounded-3xl sm:p-8 lg:p-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 sm:h-20 sm:w-20">
        <Icon name="check" className="h-8 w-8 text-emerald-300 sm:h-10 sm:w-10" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Dziękujemy! Wiadomość wysłana.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base lg:text-lg">
          Skontaktujemy się z Tobą w ciągu najbliższych kilku godzin.
          <br />
          Pracujemy pn–pt <strong>9:00–18:00</strong>. Montaże 8:00-20:00.
        </p>
      </div>

      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center sm:gap-3">
        <a
          href="tel:+48788304845"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:px-6 sm:py-3"
        >
          <Icon name="phone" className="h-4 w-4" />
          Zadzwoń: +48 788 304 845
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white sm:px-6 sm:py-3"
        >
          Wyślij kolejne zapytanie
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
        {label}
      </span>
      {children}
    </label>
  );
}
