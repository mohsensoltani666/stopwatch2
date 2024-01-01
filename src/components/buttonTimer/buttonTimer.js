
import { useState } from 'react';
import './buttonTimer.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function ButtonTimer ({time , setTime}) {

  const [inter , setInter] = useState();
  const [game, setGame] = useState('start')

  let microSecondes = time.ms , seconds = time.s , minute = time.m , hour = time.h
  // var updatedMs = time.ms , updatedS = time.s , updatedM = time.m , updatedH = time.h ;


  const start = () => {
    run();
    setInter(setInterval(run , 10));
    setGame('playing')
  }

  const run = () => {
    if(minute === 60){
      minute = 0;
      hour++;
    }
    if(seconds === 60){
      seconds = 0;
      minute++;
    }
    if(microSecondes === 99){
      seconds++;
      microSecondes = 0;
    }
    microSecondes++;

    return setTime({ms:microSecondes ,s:seconds ,m:minute ,h:hour })
  }

  const save = () => {
    // list.push(time2)
    // setList(list) 
    // setList([...list , time2 ])
  }

  const stop = () => {
    clearInterval(inter);
    setTime({ms:0, s:0 , m:0 , h:0 });
    setGame('start')
  }

  const pause = () => {
    clearInterval(inter);
  }

  return (
    <div className="bt-continer">
      {(() => {
        switch (game) {
          case 'start':
            return (
              <button className='bt-start-buttun' onClick={start} >
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
              </button>)
          case 'playing':
            return (
              <div>
                <button className='bt-buttun' onClick={save} >
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </button>
                <button className='bt-stop-buttun' onClick={stop} >
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </button>
                <button className='bt-buttun' onClick={pause} >
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </button>
              </div>  
            )
          default:
            return null
        }
      })()}
    </div>
  )
} 

export default ButtonTimer;