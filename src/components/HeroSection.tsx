import { HOTMART_CHECKOUT_URL } from "../constants";
import { Sparkles, TrendingUp, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";
import { trackInitiateCheckout } from "../lib/pixel";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-r from-[#edf7f2] via-[#f7fcf9] to-[#edf7f2]">
      {/* Decorative background grid pattern and blur blobs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2f0e8_1px,transparent_1px),linear-gradient(to_bottom,#e2f0e8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 tracking-wide shadow-xs"
            >
              <span>💡 CONTROL FINANCIERO SIMPLIFICADO</span>
            </motion.div>

            {/* Title in Uppercase */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-6 font-display break-words"
            >
              NO ES QUE GANES POCO DINERO… ES QUE{" "}
              <span className="text-[#047857] font-black inline-block">
                NO TIENES CONTROL SOBRE ÉL.
              </span>
            </motion.h1>

            {/* Subtext and rotulador highlighted text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              La tranquilidad financiera no llega cuando ganas más dinero. Llega cuando sabes{" "}
              <span className="inline-block bg-[#fcd34d] text-slate-950 font-black px-2 py-0.5 rounded-sm shadow-xs -rotate-1 transform scale-105 mx-1">
                exactamente
              </span>{" "}
              qué hacer con él.
            </motion.p>

            {/* CTA action block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col gap-4 mb-8"
            >
              <motion.a
                id="btn-hero-main-cta"
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-lg md:text-xl py-4.5 px-8 rounded-full shadow-xl shadow-emerald-600/20 cursor-pointer transition-all active:scale-95 duration-150 animate-pulse hover:animate-none"
              >
                <span>👉 Quiero ordenar mi dinero</span>
              </motion.a>
              
              {/* Payment disclaimer lines */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-5 gap-y-1.5 text-xs sm:text-sm text-emerald-800 font-bold">
                <span className="flex items-center gap-1">
                  ✓ Paga $9 una vez, úsala siempre
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  ✓ Garantía de reembolso de 7 días
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Side Mockup Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20 -z-10 transform rotate-3" />
              
              <div className="relative bg-white/40 p-2.5 sm:p-3.5 rounded-[2.5rem] border border-slate-200/40 shadow-2xl animate-float-sutil">
                <img
                  id="img-hero-mockup"
                  src="https://i.postimg.cc/j5MbSWC1/d294ecd7-4ba8-4cc8-9313-023c13359be6.jpg"
                  alt="Planificador Control Financiero Mockup"
                  referrerPolicy="no-referrer"
                  className="rounded-[1.8rem] w-full object-cover shadow-md aspect-[1.12] mix-blend-multiply"
                />
                
                {/* Floating micro indicators for visual premium feel */}
                <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white rounded-2xl p-3 shadow-xl max-w-[140px] border border-slate-800 text-left hidden sm:block">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono text-slate-400">EFECTIVO</span>
                  </div>
                  <p className="text-xs font-bold mt-1 text-slate-100">80% Descuento Ya Aplicado</p>
                </div>

                <div className="absolute -top-4 -right-4 bg-white text-slate-800 rounded-2xl py-2 px-3 shadow-xl border border-slate-100 hidden sm:block text-left">
                  <div className="text-amber-500 text-xs font-bold">⭐⭐⭐⭐⭐ 5.0</div>
                  <p className="text-[10px] text-slate-500 font-medium">Calificado por +150 compradores</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
