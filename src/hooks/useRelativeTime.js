import { useState, useEffect } from "react";

export function useRelativeTime(date) {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const diff = (now - date) / 1000;

            if (diff < 60) setTimeString(`hace ${Math.floor(diff)}s`);
            else if (diff < 3600) setTimeString(`hace ${Math.floor(diff / 60)}m`);
            else if (diff < 86400) setTimeString(`hace ${Math.floor(diff / 3600)}h`);
            else setTimeString(`hace ${Math.floor(diff / 86400)}d`);
        };

        updateTime(); // actualiza al montar
        const interval = setInterval(updateTime, 10000); // cada 10 segundos

        return () => clearInterval(interval); // limpiar al desmontar
    }, [date]);

    return timeString;
}