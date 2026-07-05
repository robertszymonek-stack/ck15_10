import Icon from "./Icon";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href="tel:+48788304845"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition active:scale-95"
      >
        <Icon name="phone" className="h-4 w-4" />
        Zadzwoń
      </a>
      <a
        href="#kontakt"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/30 transition active:scale-95"
      >
        📝 Napisz
      </a>
    </div>
  );
}
