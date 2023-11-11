import React, { useEffect, useState } from "react";
import { getTime } from "./api/getTime";

export default function App() {
  const [time, setTime] = useState("");
  useEffect(() => {
    getTime("Asia/Seoul").then((data) => {
      setTime(`${data.hour}:${data.minute}:${data.seconds}`);
    });
  });

  return (
    <div>
      <h1>React Query</h1>
      <p> 지금 시간 : {time}</p>
      <button>캐시 무효화</button>
    </div>
  );
}
