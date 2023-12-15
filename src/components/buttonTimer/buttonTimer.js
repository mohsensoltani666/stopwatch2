import { useState } from 'react';
import './buttonTimer.css';


function ButtonTimer ({time2 , setTime1}) {

  const [inter, setInter] = useState();
  const [status , setStatus] = useState(0);

  var updatedMs = time2.ms , updatedS = time2.s , updatedM = time2.m , updatedH = time2.h ;

  const start = () => {
    run();
    setInter(setInterval(run , 10));
    setStatus(1);
  }

  const run = () => {
    if(updatedM === 60){
      updatedM = 0;
      updatedH++;
    }
    if(updatedS === 60){
      updatedS = 0;
      updatedM++;
    }
    if(updatedMs === 99){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;

    return setTime1({ms:updatedMs , s:updatedS , m:updatedM , h:updatedH })
  }

  const save = () => {
    // list.push(time2)
    // setList(list) 
    // setList([...list , time2 ])
    setStatus(1)
  }

  const stop = () => {
    clearInterval(inter);
    setTime1({ms:0, s:0 , m:0 , h:0 });
    setStatus(0);
  }

  const pause = () => {
    clearInterval(inter);
    setStatus(3);
  }

  return (
      <div className='continer-buttonTimer'>
          {status === 0 && <button className='buttun-start-buttonTimer' onClick={start} >start</button>}
          {status === 1 && 
              <div>
                  <button className='buttun-buttonTimer' onClick={save} >save</button>&nbsp;
                  <button className='buttun-buttonTimer' onClick={stop} >stop</button>
                  <button className='buttun-buttonTimer' onClick={pause} >pause</button>
              </div>    
          }
          {status === 3 && 
              <div>
                  <button className='buttun-buttonTimer' onClick={save} >save</button>&nbsp;
                  <button className='buttun-buttonTimer' onClick={stop} >stop</button>
                  <button className='buttun-buttonTimer' onClick={start} >start</button>
              </div>    
          }    
      </div>
  )
} 

export default ButtonTimer;