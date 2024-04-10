import React, { useState, useEffect } from "react";
import mainImage from "./assets/main-image.webp";
const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const endDate = new Date("2025-03-01T00:00:00").getTime();
    const timeRemaining = endDate - now;
    return timeRemaining;
  }

  function formatTime(milliseconds) {
    const totalDays = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${totalDays} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثواني`;
  }

  return (
    <div id="countdown">
      {timeRemaining >= 0 ? (
        <div className="countdown-container">
          <div>
            <img src={mainImage} alt="main" className="main-image" />
          </div>
          <h2>{formatTime(timeRemaining)}</h2>
        </div>
      ) : (
        <>انتهى العد التنازلي ✨</>
      )}
    </div>
  );
};

export default CountdownTimer;
