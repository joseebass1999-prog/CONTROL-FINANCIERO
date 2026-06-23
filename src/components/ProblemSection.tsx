import { PROBLEM_ITEMS } from "../constants";
import { AlertCircle, HelpCircle, XOctagon } from "lucide-react";
import { motion } from "motion/react";

export default function ProblemSection() {
  const getProblemIcon = (id: string) => {
    switch (id) {
      case "prob-1":
        return <HelpCircle className="w-6 h-6 text-amber-500" />;
      case "prob-2":
        return <XOctagon className="w-6 h-6 text-rose-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="problem-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
            La Dura Realidad Financiera
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            ¿TE SIENTES IDENTIFICADO CON ALGUNA DE ESTAS SITUACIONES?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 font-normal leading-relaxed">
            Nuestros padres nos enseñaron que para solucionar los apuros económicos hay que trabajar más duro o ganar más. Pero la realidad es diferente: <b>sin control, más ingresos solo se traducen en más gastos.</b>
          </p>
        </div>

        {/* Problems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEM_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-md shadow-slate-100/50 flex flex-col items-start text-left relative overflow-hidden"
            >
              {/* Highlight background tag */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-100/10 rounded-full blur-xl" />
              
              <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-6 shadow-2xs">
                {getProblemIcon(item.id)}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Micro conversion hook below problems */}
        <div className="mt-16 text-center border-t border-slate-200 pt-10 max-w-2xl mx-auto">
          <p className="text-slate-700 italic text-sm md:text-base">
            "No dejes que tu arduo esfuerzo diario se diluya en suscripciones olvidadas, recargos bancarios o deudas mal estructuradas que podrías liquidar hoy mismo."
          </p>
        </div>

      </div>
    </section>
  );
}
