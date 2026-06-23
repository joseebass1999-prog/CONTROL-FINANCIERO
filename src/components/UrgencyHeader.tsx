import { HOTMART_CHECKOUT_URL } from "../constants";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface UrgencyHeaderProps {
  formattedTime: string;
  spotsLeft: number;
}

export default function UrgencyHeader({ formattedTime, spotsLeft }: UrgencyHeaderProps) {
  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const rawDay = days[new Date().getDay()];
  const currentDay = rawDay.charAt(0).toUpperCase() + rawDay.slice(1);

  return (
    <header id="urgency-header-bar" className="sticky top-0 z-50 w-full bg-slate-900 border-b border-rose-900/45 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        {/* Left container with Badge & Copy text */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          {/* Badge parpadeante */}
          <span className="shrink-0 bg-rose-500/20 text-rose-400 border border-rose-500/30 font-black text-[10px] md:text-xs tracking-widest px-2.5 py-1 rounded-sm uppercase animate-pulse">
            FOMO / CUPOS LIMITADOS
          </span>

          {/* Anuncio */}
          <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed tracking-tight">
            ¡Atención! Quedan solo <span className="text-amber-300 font-black px-1.5 py-0.5 bg-amber-500/10 rounded">{spotsLeft} licencias disponibles</span> para este <span className="font-bold text-white border-b border-dashed border-teal-500/80">{currentDay}</span>. Oferta de un único pago ($9) se cerrará pronto.
          </p>
        </div>

        {/* Right container with Countdown & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Countdown timer */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 text-xs font-semibold">El descuento expira en:</span>
            <span className="font-mono text-amber-300 font-extrabold bg-black/90 border border-slate-800 px-2 py-0.5 rounded-md text-xs sm:text-sm tracking-widest shadow-inner inline-block">
              {formattedTime}
            </span>
          </div>

          {/* Buy CTA */}
          <motion.a
            id="btn-header-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-full flex items-center gap-1.5 shadow-md shadow-emerald-600/10 cursor-pointer transition-colors"
          >
            <span>Comprar por $9 USD</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
            <Sparkles className="w-3 h-3 text-emerald-200 hidden lg:inline-block animate-pulse" />
          </motion.a>
        </div>

      </div>
    </header>
  );
}
