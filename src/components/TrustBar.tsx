import { SECURITY_LABELS } from "../constants";
import { Lock, CheckSquare, ShieldCheck, HeartHandshake } from "lucide-react";

export default function TrustBar() {
  const getIcon = (id: string) => {
    switch (id) {
      case "sec-1":
        return <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />;
      case "sec-2":
        return <CheckSquare className="w-4 h-4 text-teal-600 shrink-0" />;
      case "sec-3":
        return <Lock className="w-4 h-4 text-emerald-600 shrink-0" />;
      case "sec-4":
        return <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />;
    }
  };

  return (
    <div id="trust-bar" className="w-full bg-white/60 border-y border-slate-200/60 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center w-full md:w-auto mb-2 md:mb-0">
            COMPATIBILIDAD Y SEGURIDAD CERTIFICADA:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {SECURITY_LABELS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-lg border border-slate-100 shadow-xs text-xs sm:text-sm font-semibold hover:border-emerald-200 transition-colors"
              >
                {getIcon(item.id)}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
