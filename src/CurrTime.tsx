import { useState, useEffect } from "react";

export default function CurrTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <pre>
        Time: {date.toLocaleTimeString()}
        {"\t"}Date: {date.toLocaleDateString()}
      </pre>
    </>
  );
}
