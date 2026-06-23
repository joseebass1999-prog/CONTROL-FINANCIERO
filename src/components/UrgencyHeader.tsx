import { HOTMART_CHECKOUT_URL } from "../constants";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { trackInitiateCheckout } from "../lib/pixel";

interface UrgencyHeaderProps {
  formattedTime: string;
  spotsLeft: number;
}

export default function UrgencyHeader({ formattedTime, spotsLeft }: UrgencyHeaderProps) {
  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const rawDay = days[new Date().getDay()];
  const currentDay = rawDay.charAt(0).toUpperCase() + rawDay.slice(1);

  return (
    <header id="urgency-header-bar" className="sticky top-0 z-50 w-full bg-[#0a0e1a] border-b border-rose-950/40 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        {/* Left container with Badge & Copy text */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Badge FOMO / CUPOS LIMITADOS matching image layout precisely */}
          <span className="shrink-0 bg-[#3d0f1e] text-[#ff4c7b] border border-[#a11c47] font-black text-[10px] sm:text-xs tracking-wider px-2.5 py-1 rounded-[4px] uppercase select-none">
            FOMO / CUPOS LIMITADOS
          </span>

          {/* Active indicator with glowing circle & Anuncio */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4c7b] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#de1f52]"></span>
            </span>
            <p className="text-slate-200 text-xs sm:text-sm font-semibold leading-relaxed tracking-tight">
              ¡Atención! Quedan solo{" "}
              <span className="text-[#ffd500] font-black bg-amber-500/10 px-1.5 py-0.5 rounded-[4px]">
                {spotsLeft} licencias disponibles
              </span>{" "}
              para este <span className="text-white font-bold border-b border-dashed border-[#00ab7c] pb-0.5 capitalize">{currentDay}</span>. Oferta de un único pago ($9) se cerrará pronto.
            </p>
          </div>
        </div>

        {/* Right container with Countdown & CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end shrink-0">
          
          {/* Aesthetic Unified Countdown matching the image perfectly */}
          <div className="flex items-center gap-2 select-none">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
              El descuento expira en:
            </span>
            <div className="font-mono text-sm sm:text-base text-[#ffd500] font-black tracking-widest bg-black/95 px-2.5 py-0.5 rounded-md border border-slate-800 shadow-inner select-none">
              {formattedTime}
            </div>
          </div>

          {/* Buy CTA */}
          <motion.a
            id="btn-header-comprar"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-[#00ab7c] hover:bg-[#009169] text-white font-black text-xs sm:text-sm py-2 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/15 cursor-pointer transition-colors"
          >
            <span>Comprar por $9 USD</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-100" />
            <Sparkles className="w-3 h-3 text-emerald-100 animate-pulse hidden sm:inline-block" />
          </motion.a>

        </div>

      </div>
    </header>
  );
}


