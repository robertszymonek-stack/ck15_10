# Integracja SMS przez Twilio — CzasKlimy.pl

Strona wysyła maile przez Web3Forms (już działa). Ten dokument opisuje jak dodać **powiadomienie SMS** na numer **+48 788 304 845** po każdym nowym zgłoszeniu z formularza.

---

## Krok 1 — Utwórz Twilio Function

1. Zaloguj się na [console.twilio.com](https://console.twilio.com)
2. W lewym menu wybierz **Functions & Assets** → **Services**
3. Kliknij **Create Service**
4. Nazwij usługę np. `czasklimy-notify`
5. Poczekaj aż się utworzy, kliknij w nią

---

## Krok 2 — Dodaj zmienne środowiskowe

W panelu usługi kliknij **Settings** → **Environment Variables** i dodaj:

| Key | Value |
|-----|-------|
| `NOTIFY_TO` | `+48788304845` |
| `TWILIO_PHONE_NUMBER` | Twój numer zwrotny z Twilio (np. `+1xxxxxxxxxx`) |

Zaznacz też opcję:
- ✅ **Add my Twilio Credentials (ACCOUNT_SID) and (AUTH_TOKEN) to ENV**

Kliknij **Save**.

---

## Krok 3 — Utwórz Function

1. Kliknij **Functions** → **Add +** → **Add function**
2. Ścieżka (Path): `/notify-lead`
3. Wklej poniższy kod:

```js
exports.handler = async function(context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.appendHeader('Content-Type', 'application/json');

  if (event.request && event.request.method === 'OPTIONS') {
    response.setStatusCode(204);
    return callback(null, response);
  }

  try {
    const client = context.getTwilioClient();
    const name = event.name || 'Nieznany';
    const phone = event.phone || '-';
    const email = event.email || '-';

    const body = [
      '🔔 Nowe zapytanie — CzasKlimy.pl',
      '',
      `Imię: ${name}`,
      `Telefon: ${phone}`,
      `Email: ${email}`,
    ].join('\n');

    await client.messages.create({
      from: context.TWILIO_PHONE_NUMBER,
      to: context.NOTIFY_TO,
      body: body,
    });

    response.setBody({ ok: true });
    return callback(null, response);
  } catch (error) {
    console.error('Twilio SMS error:', error.message);
    response.setStatusCode(500);
    response.setBody({ ok: false, error: error.message });
    return callback(null, response);
  }
};
```

4. Kliknij **Save**

---

## Krok 4 — Wdróż (Deploy)

Kliknij przycisk **Deploy All** (u góry panelu). Poczekaj na zakończenie.

Po wdrożeniu skopiuj publiczny URL funkcji, np.:
```
https://czasklimy-notify-xxxx.twil.io/notify-lead
```

---

## Krok 5 — Wklej URL do projektu

Otwórz plik `src/config.ts` i ustaw:

```ts
export const TWILIO_WEBHOOK_URL = "https://czasklimy-notify-xxxx.twil.io/notify-lead";
```

---

## Krok 6 — Wgraj na GitHub i zbuduj

1. Wgraj zmienione pliki na GitHub (`src/config.ts`, `src/components/Contact.tsx`)
2. Poczekaj na zielony build w Actions
3. Pobierz nowy `index.html` i wgraj na Seohost

---

## Jak to działa

1. Klient wypełnia formularz → Web3Forms wysyła maila (zawsze działa)
2. Po sukcesie strona cicho woła Twilio Function
3. Twilio Function wysyła SMS na +48 788 304 845
4. Jeśli Twilio nie odpowie — formularz i tak się udaje (mail przychodzi)

SMS jest **dodatkiem**, nie blokuje głównego przepływu.
