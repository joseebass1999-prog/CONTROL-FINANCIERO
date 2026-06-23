import { useState } from "react";
import { Play, X, Video, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VideoData {
  id: string;
  title: string;
  subtitle: string;
  embedUrl: string;
  duration: string;
  badge: string;
  thumbnail: string;
  description: string;
}

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<VideoData | null>(null);

  const videos: VideoData[] = [
    {
      id: "vid-1",
      title: "Cómo funciona",
      subtitle: "TODAS LAS FUNCIONES",
      embedUrl: "https://jumpshare.com/embed/mVRcTuwZq3455BQAVkMS",
      duration: "02:40",
      badge: "TODAS LAS FUNCIONES",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=711",
      description: "Demostración interactiva de la Pestaña Principal (Presupuesto consolidado automático)"
    },
    {
      id: "vid-2",
      title: "Ejemplo Real",
      subtitle: "Así funciona la plantilla",
      embedUrl: "https://jumpshare.com/embed/6d8vw2niidTRS4KKo7mF",
      duration: "03:15",
      badge: "Así funciona la plantilla",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400&h=711",
      description: "Gastos imprevistos e impacto en Tablero de Control táctico en vivo"
    }
  ];

  return (
    <section id="videos-section" className="py-20 md:py-28 bg-[#f2fcf6] border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <Video className="w-3.5 h-3.5" /> Tutoriales Prácticos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight font-display">
            Mira la plantilla por dentro
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Haz clic en reproducir para ver los vídeos explicativos de cómo funciona el sistema y un ejemplo práctico.
          </p>
        </div>

        {/* Telephone Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto justify-center">
          
          {videos.map((vid) => (
            <div key={vid.id} id={`container-${vid.id}`} className="flex flex-col items-center">
              
              {/* Telephone Frame */}
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setActiveVideo(vid)}
                className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16] bg-slate-950 rounded-[2.5rem] p-3 sm:p-4 shadow-2xl border-4 border-slate-800 cursor-pointer overflow-hidden group/phone"
              >
                {/* Smartphone Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Display Aspect Content */}
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-900">
                  {/* Thumbnail Image */}
                  <div className="absolute inset-0">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-60 group-hover/phone:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  {/* Overlays / Badges */}
                  <div className="absolute top-8 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="bg-emerald-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full tracking-wider shadow-md">
                      {vid.badge}
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full border border-slate-800">
                      ⏱️ {vid.duration}
                    </span>
                  </div>

                  {/* Play Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative">
                      {/* Pulse Circle Rings */}
                      <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping scale-150 opacity-40" />
                      <div className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform transform group-hover/phone:scale-110 duration-300">
                        <Play className="w-6 h-6 fill-slate-950 ml-1 translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Info Box bottom */}
                  <div className="absolute bottom-6 left-4 right-4 z-10 text-left">
                    <h3 className="text-white font-extrabold text-sm sm:text-base leading-snug tracking-tight mb-1 font-display group-hover/phone:text-emerald-300 transition-colors">
                      {vid.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-2">
                      {vid.subtitle}
                    </p>
                  </div>

                </div>

                {/* Home indicator bar at bottom */}
                <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-slate-800/80 rounded-full" />

              </motion.div>

              {/* Outside metadata descriptions */}
              <div className="mt-5 text-center max-w-[280px] sm:max-w-[310px]">
                <p className="text-slate-700 font-semibold text-sm flex items-center justify-center gap-1.5 mb-1">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>Enfoque 100% Mobile Ready</span>
                </p>
                <p className="text-xs text-slate-500 leading-normal">
                  {vid.description}
                </p>
              </div>

            </div>
          ))}

        </div>
        
        {/* Dynamic guarantee note below */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-emerald-100 shadow-3xs max-w-md">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Todos los vídeos están explicados de forma amena y clara.</span>
          </div>
          <p className="text-slate-600 text-sm italic font-medium mt-1">
            “Si sabes escribir números, puedes usarlo.”
          </p>
        </div>

      </div>

      {/* EMBEDDED MODAL LIGHTBOX PLAYER */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-3 sm:p-6 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button with high visibility */}
            <button
              className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full shadow-lg border border-slate-700 focus:outline-hidden cursor-pointer"
              onClick={() => setActiveVideo(null)}
              aria-label="Cerrar reproductor"
            >
              <X className="w-5.5 h-5.5" />
            </button>

            {/* Scale Image/Iframe Container - Video format */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-lg w-full bg-slate-900 p-2 rounded-3xl border border-slate-800 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Aspect Ratio for Jumpshare embed video frame */}
              <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-slate-800 relative shadow-inner">
                <iframe
                  title={activeVideo.title}
                  src={activeVideo.embedUrl}
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Active description details inside modal */}
              <div className="p-4 sm:p-5 text-left text-white bg-slate-950 rounded-b-2xl border-t border-slate-900">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-emerald-600 text-white font-bold text-[9px] px-2 py-0.5 rounded">
                    {activeVideo.badge}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    Duración: {activeVideo.duration} mins
                  </span>
                </div>
                <h4 className="font-extrabold text-base sm:text-lg leading-snug font-display text-emerald-300">
                  {activeVideo.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {activeVideo.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
