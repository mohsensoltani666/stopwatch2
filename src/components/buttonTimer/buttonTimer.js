import React , { useState }  from 'react';

import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

import './buttonTimer.css';

let counter = 0 ;

function ButtonTimer ({time , setTime, list , setList}) {

  const [inter , setInter] = useState(); // ???????????
  const [game, setGame] = useState('start');

  let microSecondes = time.ms , seconds = time.s , minute = time.m , hour = time.h

  const start = () => {
    run();
    setInter(setInterval(run , 10));
    setGame('stop')
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
      microSecondes = 0;
      seconds++;
    }
    microSecondes++;

    return setTime({ms:microSecondes ,s:seconds ,m:minute ,h:hour })
  }
  
  const save = () => {
    const list1 = [...list , {id : counter++ , ...time }]
    setList(list1)
  }

  const stop = () => {
    clearInterval(inter);
    setTime({ms:0, s:0 , m:0 , h:0 });
    let listLenght = list.length
    list.splice(0 ,listLenght);
    setGame('start')
  }

  const pause = () => {
    clearInterval(inter);
    setGame('play')
  }

  const render = () => {
    switch (game) {
      case 'start':
        return (
          <button className='bt-start-buttun' onClick={start} > 
            <PlayArrowIcon fontSize="smal" />          
          </button>
        )
      case 'stop':
        return (
          <div className='bt-stop2-buttun'>
            <button className='bt-buttun' onClick={save} >
              <TurnedInIcon />
            </button>
            <button className='bt-stop-buttun' onClick={stop} >
            <StopIcon fontSize="smal" />
            </button>
            <button className='bt-buttun' onClick={pause} >
              <PauseIcon />
            </button>
          </div>  
        )
        case 'play':
          return (
            <div className='bt-play-buttun' >
              <button className='bt-buttun' onClick={save} >
                <TurnedInIcon fontSize="smal" />
              </button>
              <button className='bt-stop-buttun' onClick={stop} >
                <StopIcon />
              </button>
              <button className='bt-buttun' onClick={start} >
                <PlayArrowIcon fontSize="smal" />
              </button>
            </div>  
          )
      default:
        return null
    }
  }

  return (
    <div className="bt-continer">
      {render()}
    </div>
  )
} 

export default ButtonTimer;