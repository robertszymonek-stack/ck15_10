// Konfiguracja integracji z zewnętrznymi usługami.

// Google Tag Manager ID
export const GTM_ID = "GTM-568SGH24";

// Twilio Function URL do powiadomień SMS o nowym leadzie.
// Utwórz funkcję w panelu Twilio (instrukcja w TWILIO_INTEGRATION.md)
// i wklej tutaj jej publiczny URL, np.:
// "https://twoja-usluga-xxxx.twil.io/notify-lead"
//
// Jeśli pusty string — powiadomienie SMS nie będzie wysyłane (tylko mail przez Web3Forms).
export const TWILIO_WEBHOOK_URL = "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY0MDYzNDA0MzI1MjY1NTUzNSI_3D_pc/IjU3NjcwNTZlMDYzNTA0MzE1MjZiNTUzMDUxM2Ii_pc";
