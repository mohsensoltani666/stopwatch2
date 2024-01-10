import { useState } from "react";
import ButtonTimer from "../buttonTimer/buttonTimer";
import DisplayTimer from "../displayTimer/displayTimer";
import "./stopwach.css";
import Save from "../displaySave/displaSave";

function StopWatch() {
  const [time, setTime] = useState({ ms:0 , s:0 , m:0 , h:0 });

  return (
    <div className="sw-continer">
      <div className="header">
        <h1 className="sw-title">stopwatch</h1>
        <DisplayTimer time={time} />
      </div>
      <Save display={setTime} />
      <ButtonTimer time={time} setTime={setTime} />
    </div>
  );
}

export default StopWatch;
