
import './displayTimer.css';

function DisplayTimer({time1}) {

  const { ms , s , m , h} = time1;  //  ???????
  return(
      <div className='continer-displayTimer'>
          <span className='span-1'>
          {h >= 10 ? h : "0" + h} 
          </span >
          : 
          <span className='span-1'>
          {m >= 10 ? m : "0" + m}
          </span>
          :
          <span className='span-1'>
          {s >= 10 ? s : "0" + s}
          </span>
          :
          <span className='span-1'>
          {ms >= 10 ? ms : "0" + ms}
          </span>
      </div>
  )
}

export default DisplayTimer;



// const showtime = new Date().toLocaleTimeString()
// return (
//   <div className="continer-displayTimer">
//     <h1 className='h1-displayTimer'>{showtime}</h1>
//   </div>
// );
