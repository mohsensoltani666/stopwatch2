import { useState } from "react";
import ButtonTimer from "../buttonTimer/buttonTimer";
import DisplayTimer from "../displayTimer/displayTimer";
import "./stopwach.css";
import Save from "../displaySave/displaSave";

function Stopwatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  return (
    <div className="continer-stopwatch">
      <div className="top">
        <h1 className="h1-stopwatch">stopwatch</h1>
        <DisplayTimer time1={time} />
      </div>
      <Save display={setTime} />
      <ButtonTimer time2={time} setTime1={setTime} />
    </div>
  );
}

export default Stopwatch;
