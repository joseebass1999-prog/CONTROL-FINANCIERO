import { Download, Edit3, HeartHandshake, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      id: "step-1",
      number: "01",
      icon: <Download className="w-6 h-6 text-emerald-600" />,
      title: "1. Descarga e Importación Directa",
      description: "Recibe un enlace digital instantáneo e infalible tras tu pago de $9 USD. Descarga el archivo para Microsoft Excel o haz una copia en un solo clic directamente a tu cuenta de Google Drive para Sheets."
    },
    {
      id: "step-2",
      number: "02",
      icon: <Edit3 className="w-6 h-6 text-teal-600" />,
      title: "2. Ingresa Datos Clave Básicos",
      description: "Completa el asistente inteligente ingresando tus ingresos promedio, egresos fijos aproximados y saldos de deudas pendientes. Sin subir tus claves bancarias reales: total privacidad garantizada."
    },
    {
      id: "step-3",
      number: "03",
      icon: <Eye className="w-6 h-6 text-emerald-600" />,
      title: "3. Disfruta de la Automatización",
      description: "Observa proyecciones automáticas de liquidación de pasivos, tableros informativos de ahorros y gráficos interactivos fáciles de leer que actualizarán tus porcentajes de forma instantánea."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Step-by-Step Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Súper Fácil De Usar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            CÓMO FUNCIONA EN SÓLO 3 PASOS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            No necesitas ser un experto en programación ni tener amplios conocimientos financieros. Hemos diseñado la plantilla para que funcione de forma intuitiva desde el minuto uno.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 -z-10" />

          {steps.map((st, index) => (
            <motion.div
              key={st.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-250/30 shadow-2xs"
            >
              <div className="flex items-center justify-between w-full mb-6">
                <div className="p-3 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                  {st.icon}
                </div>
                <span className="text-3xl font-extrabold text-slate-300 font-display">
                  {st.number}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 tracking-tight font-display">
                {st.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {st.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
