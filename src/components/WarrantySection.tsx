import { ShieldCheck, CalendarRange, Undo2, Award } from "lucide-react";
import { motion } from "motion/react";

export default function WarrantySection() {
  return (
    <section id="warranty-section" className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Certificate Border Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-[#fafdfb] rounded-3xl border-2 border-dashed border-emerald-300 p-8 sm:p-12 shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left"
        >
          {/* Certificate Badge overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/10 rounded-full blur-2xl" />

          {/* Left Side: Golden/Emerald Security Seal Display */}
          <div className="relative shrink-0 flex flex-col items-center">
            {/* Round Border circles */}
            <div className="relative w-32 h-32 rounded-full border-4 border-emerald-600/30 bg-emerald-50 flex items-center justify-center shadow-lg">
              <Award className="w-16 h-16 text-emerald-700 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-emerald-600 border-dashed animate-[spin_40s_linear_infinite]" />
            </div>
            
            <span className="mt-4 text-[10px] font-extrabold text-emerald-800 bg-emerald-100/60 border border-emerald-100 py-1 px-3 rounded-full uppercase tracking-wider">
              100% LIBRE DE RIESGO
            </span>
          </div>

          {/* Right Side: Detailed Copy */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-2 leading-tight">
              GARANTÍA INCONDICIONAL DE SATISFACCIÓN DE 7 DÍAS
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Queremos que adquieras el planificador con absoluta tranquilidad mental. Pruébalo a fondo en tu propia computadora o teléfono móvil. Registra tus cuentas, tus metas y tus deudas. 
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Si por cualquier motivo durante los primeros 7 días hábiles sientes que esta herramienta no simplifica tu control monetario o no vale cada centavo de tu inversión, escribes un mensaje rápido de soporte y <b>te reintegramos el 100% de tu dinero de inmediato</b>. Sin preguntas, sin trabas de soporte y sin letra pequeña en el proceso.
            </p>

            {/* Micro badges list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-4 border-t border-slate-200 text-xs text-slate-600 font-semibold uppercase">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Devolución rápida garantizada</span>
              </div>
              <div className="flex items-center gap-2">
                <Undo2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Gestión de reembolso por Hotmart</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
