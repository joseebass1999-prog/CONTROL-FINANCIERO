import React from "react";
import { HOTMART_CHECKOUT_URL } from "../constants";
import { ShieldCheck, HelpCircle, Mail, Globe, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

interface FooterCTAProps {
  formattedTime: string;
  spotsLeft: number;
}

export default function FooterCTA({ formattedTime, spotsLeft }: FooterCTAProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer-cta" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Call to action redundant block */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-12 border-b border-slate-900">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-6 inline-block">
            Toma Acción Hoy Mismo
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            ESTÁS A UN SOLO PASO DE TRANSFORMAR TU FUTURO FINANCIERO desde ya
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            La oferta promocional con un <b>80% de descuento</b> y todos los bonos listados se cerrará pronto. Toma las riendas de tu presupuesto hoy.
          </p>

          {/* Connected Timer Status box */}
          <div className="bg-slate-900/60 max-w-md mx-auto rounded-2xl py-3 px-6 border border-slate-800 flex items-center justify-between gap-4 mb-8">
            <div className="text-left">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Tiempo restante</span>
              <span className="text-emerald-400 font-mono text-xl sm:text-2xl font-bold">{formattedTime} mins</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Cupos Disponibles</span>
              <span className="text-rose-400 font-mono text-xl sm:text-2xl font-bold">{spotsLeft} cupos</span>
            </div>
          </div>

          <motion.a
            id="btn-footer-cta-main"
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-lg sm:text-xl py-4.5 px-10 rounded-2xl shadow-xl shadow-emerald-500/10 flex items-center justify-center gap-2.5 cursor-pointer border-b-4 border-emerald-700 active:translate-y-[2px]"
          >
            <span>👉 SÍ, QUIERO TOMAR EL CONTROL TOTAL HOY</span>
          </motion.a>

          {/* Quick legal badge */}
          <div className="mt-4 flex justify-center items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-500/70" />
            <span>Pago Único Seguro de $9 USD • Descarga Instantánea de por vida</span>
          </div>
        </div>

        {/* Informative directories block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
          
          {/* Column A: Logo, desc */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-4 font-display">
              <span className="p-1.5 bg-emerald-600/30 border border-emerald-500/30 rounded-lg text-emerald-400">📊</span>
              <span>PLANIFICADOR INTELIGENTE</span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Nuestra misión es ayudar a profesionales, familias e independientes a erradicar de su vida el estrés e incertidumbre causados por la falta de un presupuesto estructurado.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>Soporte Técnico Especializado: <a href="mailto:joseebass.1999@gmail.com" className="underline hover:text-white">joseebass.1999@gmail.com</a></span>
            </div>
          </div>

          {/* Column B: Links */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Enlaces Corporativos e Legales
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#benefits-offer-section" className="hover:text-white transition-colors">Características Planificador</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">Cómo Iniciar la Configuración</a>
              </li>
              <li>
                <a href="#testimonials-section" className="hover:text-white transition-colors">Preguntas de Alumnos & Casos Exitosos</a>
              </li>
              <li>
                <a href="#why-this-planner" className="hover:text-white transition-colors">Términos de Uso y Políticas de Privacidad</a>
              </li>
            </ul>
          </div>

          {/* Column C: Safety check disclaimer */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Garantía Hotmart® Oficial
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Hotmart es la plataforma tecnológica líder en distribución de herramientas digitales en todo Iberoamérica. Tus transacciones de compra están totalmente protegidas de forma blindada por encriptación avanzada de 256 bits.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:text-emerald-300 transition-colors cursor-pointer focus:outline-hidden"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Volver arriba de la página
            </button>
          </div>

        </div>

        {/* Legal disclosures disclaimer */}
        <div className="border-t border-slate-900 pt-8 text-center text-[10px] text-slate-600 leading-normal space-y-4 max-w-5xl mx-auto">
          <p>
            <b>DESCARGO DE RESPONSABILIDAD:</b> Los testimonios compartidos corresponden a personas particulares y obedecen a su disciplina, ingresos e historial financiero específico. Los resultados financieros individuales varían sensiblemente y ningún contenido expuesto en esta landing representa una promesa implícita o explícita de ganancia o riqueza instantánea. Por favor, consulta un regulador certificado ante decisiones monetarias de alto riesgo.
          </p>
          <p>
            Este sitio web no está afiliado de ningún modo a Meta Platforms, Inc., Google, LLC, Facebook Ads o TikTok, ni cuenta con patrocinio comercial directo de las citadas corporaciones. Las marcas de Microsoft Excel y Google Sheets corresponden a sus respectivos legados corporativos y sólo se referencian por compatibilidad práctica.
          </p>
          <p className="font-semibold text-slate-500">
            © 2026 Planificador de Control Financiero Inteligente - Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
