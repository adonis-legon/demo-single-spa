import { useState, useEffect } from "react";

export default function Root(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h1>Welcome to APP 01!</h1>
      <p>
        Current date/time is: <span>{currentTime}</span>
      </p>
    </section>
  );
}
