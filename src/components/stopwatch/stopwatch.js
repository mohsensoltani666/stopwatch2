import React , { useState }from 'react';

import ButtonTimer from "../buttonTimer/buttonTimer";
import DisplayTimer from "../displayTimer/displayTimer";
import Save from "../displaySave/displaSave";

import "./stopwach.css";

function StopWatch() {

  const [time , setTime] = useState({ ms:0 , s:0 , m:0 , h:0 });
  const [list , setList] = useState([])

  return (
    <div className="sw-continer">
      <div className="header">
        <h1 className="sw-title">stopwatch</h1>
        <DisplayTimer time={time} />
      </div>
      <Save  list={list} setList={setList} />
      <ButtonTimer time={time} setTime={setTime} list={list} setList={setList}/>
    </div>
  );
}

export default StopWatch;