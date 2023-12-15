
import React, { useState } from 'react';

import './displaysave.css';

function Save ({display , id}) {

    const [ list , setList ] = useState([id])

    function clickHandler () {
        list.push(display)
        setList(list) 
        setList([...list , display ])
    }

    return (
        <div className='continer-save'>
            <button onClick={clickHandler}>click</button>
            {
                
                list.map((item , index ) => <p key={1} >{item}</p> )
            }
        </div>
    )
}

export default Save;