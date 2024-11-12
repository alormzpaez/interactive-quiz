import React, { FC, useEffect, useState } from 'react'


interface TimerProps {
    time:string, 
    onComplete: () => void
}
export const Timer:FC<TimerProps> = ({time, onComplete}) => {
    // Parseamos los minutos y segundos a partir del string "mm:ss"
  const [minutes, seconds] = time.split(':').map(Number);
  const [totalTime, setTotalTime] = useState(minutes * 60 + seconds);

  useEffect(() => {
    if (totalTime <= 0) {
      onComplete(); // Llamamos a la función cuando el tiempo llega a 0
      return;
    }

    // Creamos un intervalo para actualizar el tiempo cada segundo
    const timerId = setInterval(() => {
      setTotalTime((prevTime) => prevTime - 1);
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(timerId);
  }, [totalTime, onComplete]);

  // Calculamos los minutos y segundos restantes
  const displayMinutes = String(Math.floor(totalTime / 60)).padStart(2, '0');
  const displaySeconds = String(totalTime % 60).padStart(2, '0');

  return (
    <h2>
        Tiempo Faltante: <span className="font-bold text-lg">{displayMinutes}:{displaySeconds}</span>
    </h2>
  )
}
