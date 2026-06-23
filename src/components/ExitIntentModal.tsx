import React, { useState, useEffect } from "react";
import { HOTMART_CHECKOUT_URL } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import { X, AlertTriangle, Check, ShieldCheck, HeartCrack, Sparkles, Smile } from "lucide-react";
import { trackInitiateCheckout } from "../lib/pixel";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"ALTO_AHI" | "MAPACHE_GANO">("ALTO_AHI");
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // If modal already triggered, don't hook again
    if (hasTriggered) return;

    // Trigger on mouse leave window from the top (PC)
    const handleMouseLeave = (e: MouseEvent) => {
      // clientY < 15 is standard trigger for exit intent
      if (e.clientY < 15 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Trigger on mobile after 35 seconds of active reading
    const mobileTimer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 35000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggered]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleReject = (e: React.MouseEvent) => {
    e.preventDefault();
    setStage("MAPACHE_GANO");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="exit-intent-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0" onClick={closeModal} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative bg-white w-full max-w-lg rounded-[2rem] border border-emerald-100 shadow-2xl p-6 sm:p-8 overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Icon Button */}
            <button
              id="exit-modal-close-btn"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full cursor-pointer transition-colors"
              onClick={closeModal}
              aria-label="Cerrar ventana"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Stage A: ALTO AHÍ MAPACHE */}
            {stage === "ALTO_AHI" ? (
              <div className="text-left space-y-5">
                
                {/* Visual Header */}
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 p-4 rounded-2xl">
                  <AlertTriangle className="w-8 h-8 text-amber-500 animate-pulse shrink-0 mt-1" />
                  <div>
                    <h3 className="text-slate-950 font-black text-lg tracking-tight leading-tight uppercase font-display">
                      ¡ALTO AHÍ! 🛑
                    </h3>
                    <p className="text-sm font-bold text-slate-700 leading-tight">
                      Tu billetera te está mirando...
                    </p>
                  </div>
                </div>

                {/* Sub-headline */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  El <strong>"Mapache del Despilfarro" 🦝</strong> estuvo a milímetros de convencerte de volver al piloto automático: el mismo donde gastas $15 USD en cosas que no recuerdas mañana mientras tus deudas siguen intactas.
                </p>

                {/* Benefits List */}
                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/60 space-y-2.5">
                  <p className="text-[10px] font-extrabold text-emerald-800 tracking-wider uppercase">Ventajas en caja de confianza:</p>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Acceso Vitalicio Seguro:</strong> Con un único pago de solo $9 USD (sin suscripciones ocultas).</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Reembolso del 100%:</strong> Prueba el sistema por 7 días. Si no ahorras tu primer dólar de inmediato, te lo devolvemos todo.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Soporte Directo + Plantillas de Regalo:</strong> Todo pre-configurado y listo.</span>
                  </div>
                </div>

                {/* State Buttons buttons */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <motion.a
                    id="exit-modal-cta-hotmart"
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackInitiateCheckout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2 border-b-2 border-emerald-800"
                  >
                    <span>🚀 ¡Sí, quiero salvar a mi billetera por $9!</span>
                  </motion.a>

                  <button
                    id="exit-modal-reject-funny-btn"
                    onClick={handleReject}
                    className="w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 text-xs py-2 px-4 rounded-xl border border-slate-200 transition-colors font-medium cursor-pointer italic"
                  >
                    No, prefiero seguir regalándole dinero mensual al banco en intereses misteriosos 💸
                  </button>
                </div>

              </div>
            ) : (
              /* Stage B: EL MAPACHE GANÓ */
              <div className="text-center space-y-6 py-4">
                
                {/* Sad emoji display block */}
                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-4xl border border-rose-100 animate-bounce">
                  🦝🍂
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                    El Mapache Financiero ganó esta ronda... 🦝🍂
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto font-normal">
                  Tus deudas están celebrando en silencio porque no les vas a aplicar la Bola de Nieve hoy. Pero no te guardamos rencor. Tu descuento de 80% sigue activo si cambias de opinión antes de cerrar definitivamente.
                </p>

                {/* Final Reconsider Buttons buttons */}
                <div className="flex flex-col gap-2.5 max-w-sm mx-auto pt-2">
                  <button
                    id="exit-modal-reconsider-cta"
                    onClick={() => setStage("ALTO_AHI")}
                    className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2 border-b-2 border-emerald-800"
                  >
                    <span>👈 Espera, volver a pensarlo seguro</span>
                  </button>

                  <button
                    id="exit-modal-close-definitely-btn"
                    onClick={closeModal}
                    className="w-full text-center bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Cerrar y seguir gastando sin control 💔
                  </button>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
