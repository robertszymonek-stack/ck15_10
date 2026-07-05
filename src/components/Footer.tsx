export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {/* KONTAKT */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
              <span>📞</span> Kontakt
            </h4>
            <div className="space-y-1.5 text-sm">
              <p className="text-white">Robert — Twój doradca klimatyzacji</p>
              <a href="tel:+48788304845" className="block text-lg font-bold text-sky-400 hover:underline">
                788 304 845
              </a>
              <a href="mailto:kontakt@czasklimy.pl" className="block hover:text-white">
                kontakt@czasklimy.pl
              </a>
              <a href="https://czasklimy.pl" className="block hover:text-white">
                www.CzasKlimy.pl
              </a>
            </div>
          </div>

          {/* AUTORYZACJE */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
              <span>🏆</span> Autoryzowany montaż
            </h4>
            <div className="space-y-1 text-sm text-white/80">
              <p>Mitsubishi Electric • LG • Gree • Haier • Fuji Electric</p>
              <p>Rotenso • Kaisai • AUX</p>
              <p className="font-medium text-emerald-400">✅ F-GAZ • SEP</p>
            </div>
          </div>
        </div>

        {/* DOLNA CZĘŚĆ */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          <div className="flex flex-col items-start justify-between gap-y-3 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} CzasKlimy.pl •{' '}
              <a href="#/polityka-prywatnosci" className="hover:text-white">Polityka prywatności</a> •{' '}
              <a href="#/regulamin" className="hover:text-white">Regulamin</a>
            </p>

            <p className="text-[10px] text-white/40">
              Usługi montażowe wykonuje firma posiadająca aktualne uprawnienia F-GAZ i SEP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
