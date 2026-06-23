import { HOTMART_CHECKOUT_URL } from "../constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, CheckCircle2, TrendingUp, Sparkles, ShieldAlert, Award } from "lucide-react";
import { trackInitiateCheckout } from "../lib/pixel";

export default function SolutionSimulator() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openZoom = (url: string) => {
    setZoomedImage(url);
  };

  return (
    <section id="solution-simulator" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#edf7f2]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100/60 border border-emerald-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Demostración en Alta Definición
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            MIRA EL PLANIFICADOR EN ACCIÓN
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Haz clic sobre cualquiera de los módulos para ampliarlos a pantalla completa. Hemos cuidado cada fórmula y gráfico para darte máxima legibilidad desde cualquier pantalla.
          </p>
        </div>

        {/* SUBSECTION A: Pago de Deudas con Bola de Nieve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Text details column */}
          <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
              <Award className="w-4.5 h-4.5 text-emerald-600" />
              <span>METODOLOGÍA BOLA DE NIEVE (DEBT SNOWBALL)</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              1. Planificador de Desamortización Psicológica de Deudas
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              La ciencia del comportamiento demuestra que pagar primero las deudas más pequeñas genera un estímulo psicológico de poder de victoria que te impulsa a continuar. 
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Orden automático inteligente de deudas según saldo pendiente e interés.",
                "Simulador dinámico: ingresa tu abono extra mensual y mira la fecha exacta de libertad.",
                "Efecto motivador visual: barra de progreso general y liberación real de flujo de caja.",
                "Sin fórmulas complejas: solo escribe el nombre del saldo y la cuota básica."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive image column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group cursor-pointer" onClick={() => openZoom("https://i.postimg.cc/Kjm6XtFx/Chat-GPT-Image-20-jun-2026-23-21-28.png")}>
              {/* Image Border Wrapper */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white p-2.5 rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/Kjm6XtFx/Chat-GPT-Image-20-jun-2026-23-21-28.png"
                  alt="Metodología Bola de Nieve Planificador de Deudas"
                  referrerPolicy="no-referrer"
                  className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Magnifying glass overlay */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <span className="bg-white/95 text-slate-900 px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" /> Ampliar pantalla
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSECTION B: Fondo de Ahorros Inteligente */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Interactive image column */}
          <div className="lg:col-span-6">
            <div className="relative group cursor-pointer" onClick={() => openZoom("https://i.postimg.cc/C1cgxZdW/c1f8e0ea-bf36-433f-a03b-414966154391.jpg")}>
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white p-2.5 rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/C1cgxZdW/c1f8e0ea-bf36-433f-a03b-414966154391.jpg"
                  alt="Seguimiento de Metas y Fondos de Ahorros"
                  referrerPolicy="no-referrer"
                  className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Magnifying glass overlay */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <span className="bg-white/95 text-slate-900 px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" /> Ampliar pantalla
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text details column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold border border-teal-100">
              <TrendingUp className="w-4.5 h-4.5 text-teal-600" />
              <span>SISTEMA DE SEGURIDAD PATRIMONIAL</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              2. Fondo de Ahorros y Metas Inteligentes
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              Ahorrar sin un propósito específico es una receta para gastárselo en el primer capricho. Nuestro gestor inteligente divide tu fondo en pilares de supervivencia y metas placenteras.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Calculadora de supervivencia: te dice los gastos fijos ideales de 3, 6 o 12 meses.",
                "Rastreador visual de metas de retiro acelerado y compra programada de activos.",
                "Porcentaje automático sugerido para diversificar sin afectar tu estilo de vida.",
                "Gráficos visuales de progreso que se actualizan automáticamente al registrar abonos."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Banner de Oferta Global: Caja oscura llamativa con borde esmeralda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl bg-slate-950 border-2 border-emerald-500 p-8 sm:p-12 shadow-2xl overflow-hidden mt-16 max-w-5xl mx-auto"
        >
          {/* Decorative background grid elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35" />
          <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4 animate-bounce text-emerald-400" />
              <span>Acceso Vitalicio • Pago Único</span>
            </div>

            <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl font-display mb-4">
              OBTÉN HOY UN DESCUENTO ÚNICO DE LANZAMIENTO DEL 80%
            </h4>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-8 font-normal">
              Evita pagar la suscripción mensual de aplicaciones confusas. Obtén acceso para siempre al Planificador Inteligente Completo y a todos los bonos listados por una única inversión simbólica.
            </p>

            <div className="flex items-center gap-6 justify-center mb-8 flex-wrap sm:flex-nowrap">
              <div className="text-center sm:text-right border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 sm:pr-8">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">PRECIO REGULAR</p>
                <p className="text-2xl text-slate-400 font-extrabold line-through font-mono">$45 USD</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-emerald-400 uppercase font-bold tracking-wider">🔥 HOY UN SOLO PAGO DE</p>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">$9</span>
                  <span className="text-xl font-bold text-slate-300">USD</span>
                </div>
              </div>
            </div>

            <motion.a
              id="btn-simulator-cta"
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg md:text-xl py-4 px-10 rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2.5 cursor-pointer leading-tight mb-4 border-b-4 border-emerald-700 active:translate-y-[2px] active:border-b-2"
            >
              <span>👉 Descargar Plantilla por $9 USD</span>
            </motion.a>

            <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-emerald-500/70" /> Compra segura garantizada. Recibes acceso inmediato en tu e-mail tras el pago.
            </p>

          </div>
        </motion.div>

      </div>

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 backdrop-blur-xs"
            onClick={() => setZoomedImage(null)}
          >
            {/* Close button with high visibility */}
            <button
              className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full shadow-lg border border-slate-700 focus:outline-hidden cursor-pointer"
              onClick={() => setZoomedImage(null)}
              aria-label="Cerrar ampliación"
            >
              <X className="w-5.5 h-5.5" />
            </button>

            {/* Scale Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] w-full bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedImage}
                alt="Ampliación Planificador de Control Financiero"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-xs sm:text-sm font-medium bg-slate-950/80 backdrop-blur-xs py-1.5 px-4 rounded-full inline-block border border-slate-800">
                  Planificador Completo en Alta Definición. Presiona <kbd className="font-mono bg-slate-800 text-slate-200 px-1 py-0.5 rounded text-xs select-all">Escape</kbd> o toca fuera para cerrar.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
