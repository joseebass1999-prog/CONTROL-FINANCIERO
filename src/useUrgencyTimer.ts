import { useState, useEffect } from "react";

export function useUrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("urgency_time_left");
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed > 0 && parsed <= 895) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Error reading countdown from localStorage:", e);
    }
    return 895; // 14 mins and 55 secs
  });

  useEffect(() => {
    try {
      localStorage.setItem("urgency_time_left", timeLeft.toString());
    } catch (e) {
      console.error("Error saving countdown to localStorage:", e);
    }
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 895; // Sincronizado, reinicia automáticamente
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Bracket system:
  // más de 750s = 7 cupos
  // >600s = 6 cupos
  // >450s = 5 cupos
  // >300s = 4 cupos
  // <150s = 3 cupos (and between 150s and 300s we keep 4 cupos to ensure smoothness)
  const getSpotsLeft = () => {
    if (timeLeft > 750) return 7;
    if (timeLeft > 600) return 6;
    if (timeLeft > 450) return 5;
    if (timeLeft > 300) return 4;
    return 3;
  };

  return {
    timeLeft,
    formattedTime: formatTime(),
    spotsLeft: getSpotsLeft(),
  };
}
