import { TESTIMONIALS } from "../constants";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="py-20 md:py-28 bg-[#f5fbf8] border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" /> Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            Lo que dicen quienes ya ordenaron sus finanzas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Personas reales que recuperaron la claridad de su dinero gracias al sistema. Sin adornos políticos, testimonios honestos de la comunidad.
          </p>
        </div>

        {/* Bento Grid testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/70 shadow-md flex flex-col justify-between text-left hover:border-emerald-300 transition-all"
            >
              <div>
                {/* 5 Star Rating Rating block */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review message text */}
                <p className="text-slate-700 font-normal text-xs sm:text-base leading-relaxed mb-6 italic">
                  "{test.content}"
                </p>
              </div>

              {/* Bottom Customer Info card */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-emerald-100 shadow-3xs"
                  />
                  <div>
                    <h4 className="text-slate-900 font-bold text-xs sm:text-sm leading-tight">
                      {test.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] sm:text-xs">
                      {test.role}
                    </p>
                  </div>
                </div>

                {/* Quantitative highlighted outcome badge */}
                <div className="bg-emerald-50 text-emerald-800 text-[10px] sm:text-xs py-1 px-3.5 border border-emerald-100/60 rounded-full font-extrabold text-right shrink-0">
                  🎯 {test.result}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Verification note badge */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-[11px] font-medium">
            ✔ Todos los testimonios aquí descritos corresponden a alumnos y compradores reales verificados mediante encuestas de satisfacción de Hotmart.
          </p>
        </div>

      </div>
    </section>
  );
}
