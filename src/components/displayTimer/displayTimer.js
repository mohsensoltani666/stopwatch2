
import './displayTimer.css';

function DisplayTimer({time}) {

  const { ms , s , m , h} = time;  //  ???????
  return(
      <div className='dt-continer'>
          <span className='dt-continer-span'>
          {h >= 10 ? h : "0" + h} 
          </span >
          : 
          <span className='dt-continer-span'>
          {m >= 10 ? m : "0" + m}
          </span>
          :
          <span className='dt-continer-span'>
          {s >= 10 ? s : "0" + s}
          </span>
          :
          <span className='dt-continer-span'>
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
