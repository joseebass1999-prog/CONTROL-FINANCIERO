import { BONUSES, HOTMART_CHECKOUT_URL } from "../constants";
import { Gift, ArrowRight, CheckCircle2, BadgePercent, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { trackInitiateCheckout } from "../lib/pixel";

export default function BenefitsOffer() {
  const getBonusIcon = (id: string) => {
    switch (id) {
      case "bonus-1":
        return <BadgePercent className="w-6 h-6 text-emerald-600" />;
      case "bonus-2":
        return <Gift className="w-6 h-6 text-emerald-600" />;
      case "bonus-3":
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="benefits-offer-section" className="py-20 md:py-28 bg-gradient-to-b from-[#edf7f2] via-[#fbfdfc] to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Regalos Extra: Bonos Incluidos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            TODO LO QUE OBTIENES HOY CON TU REGISTRO VITALICIO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            No te vendemos una hoja en blanco. Te entregamos un ecosistema financiero estructurado que te guiará de la mano hacia tu tranquilidad monetaria.
          </p>
        </div>

        {/* Bonuses Grid - Symmetric 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {BONUSES.map((bn, index) => (
            <motion.div
              key={bn.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-lg shadow-slate-100/50 flex flex-col justify-between text-left relative overflow-hidden group hover:border-emerald-300 hover:shadow-emerald-100/50 transition-all duration-300"
            >
              <div>
                {/* Category indicator bar with custom badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${bn.accent}`}>
                    {bn.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400 font-medium line-through">Valorada en {bn.priceValue}</span>
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">$0.00</span>
                  </div>
                </div>

                {/* Bonus Heading */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100/60 shadow-2xs group-hover:bg-emerald-100 transition-colors">
                    {getBonusIcon(bn.id)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base sm:text-lg tracking-tight font-display leading-snug">
                      {bn.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {bn.description}
                </p>
              </div>

              {/* Verified Bonus Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Acceso y Descarga Inmediata</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stacked Value Comparison Section */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug mb-1">
              ¿Listo para dar el paso definitivo?
            </h4>
            <p className="text-sm text-slate-500">
              Valor de bonos de <span className="line-through font-semibold">$71 USD</span> hoy incluidos <span className="font-bold text-emerald-700">Completamente Gratis</span> con tu orden única.
            </p>
          </div>
          <motion.a
            id="btn-benefits-inline-cta"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-3 px-6 rounded-2xl shadow-md cursor-pointer flex items-center justify-center gap-2 border-b-2 border-emerald-800"
          >
            <span>👉 Obtener todo por $9 USD</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
