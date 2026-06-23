import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingBag } from "lucide-react";

interface LiveSalesNotifierProps {
  spotsLeft: number;
}

const randomCities = [
  "Bogotá",
  "Medellín",
  "Santiago",
  "Ciudad de México",
  "Lima",
  "Buenos Aires",
  "Quito",
  "San José",
  "Guayaquil",
  "Caracas",
  "Montevideo",
  "Asunción",
  "Ciudad de Panamá",
  "Guatemala"
];

const randomAttendees = [
  "Carlos M.",
  "Andrea G.",
  "Luis F.",
  "Sofía R.",
  "Mateo S.",
  "Camila V.",
  "Diego A.",
  "Valentina P.",
  "Sebastián T.",
  "Mariana L."
];

export default function LiveSalesNotifier({ spotsLeft }: LiveSalesNotifierProps) {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState("");
  const [buyerName, setBuyerName] = useState("");

  useEffect(() => {
    // Initial delay before showing the first notification
    const startTimeout = setTimeout(() => {
      triggerNotification();
    }, 4000);

    const triggerNotification = () => {
      const selectedCity = randomCities[Math.floor(Math.random() * randomCities.length)];
      const selectedBuyer = randomAttendees[Math.floor(Math.random() * randomAttendees.length)];
      setCity(selectedCity);
      setBuyerName(selectedBuyer);
      setVisible(true);

      // Hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setVisible(false);
        // Schedule next random trigger in 9-16 seconds
        const nextInterval = Math.random() * 7000 + 9000;
        scheduleTimeout = setTimeout(triggerNotification, nextInterval);
      }, 5000);

      timeouts.push(hideTimeout);
    };

    const timeouts: NodeJS.Timeout[] = [startTimeout];
    let scheduleTimeout: NodeJS.Timeout;

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      if (scheduleTimeout) clearTimeout(scheduleTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 z-40 max-w-[340px] bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-2xl p-4 shadow-xl border border-emerald-500/20 flex items-center gap-3"
        >
          {/* Glowing Green Shop Icon */}
          <div className="relative shrink-0 w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-emerald-200">
            <ShoppingBag className="w-5 h-5 animate-pulse" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>

          {/* Dynamic Content */}
          <div className="text-left">
            <p className="text-xs font-semibold leading-relaxed text-slate-100">
              🔥 Alguien en <span className="text-yellow-300 font-extrabold">{city}</span> acaba de adquirir <span className="text-white font-extrabold shadow-xs">"Dinero en Orden"</span>. ¡Quedan sólo <span className="text-amber-300 font-extrabold font-mono bg-black/40 px-1.5 py-0.5 rounded">{spotsLeft}</span> cupos!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
