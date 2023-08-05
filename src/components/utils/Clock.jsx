import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {}, []);
  return (
    <time className="border-2 px-4 py-0.5 rounded-lg text-lg">
      {time.toLocaleTimeString()}
    </time>
  );
}
