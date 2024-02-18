import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import TourIcon from '@mui/icons-material/Tour';

import './displaysave.css';

function Save ({list , setList}) {

    const removeHandler = (id) => {
        setList(list.filter( item => item.id !== id))
    }

    return (
        <div className='s-continer'>
            {list.map((item , index ) => (
                <p key={index} className='s-p-row'  >
                    <DeleteIcon fontSize="smal" color="white"  onClick={() => removeHandler(item.id)} />
                    <div >
                        id {item.id} - {item.h} : {item.m} : {item.s} : {item.ms}
                        <TourIcon color="action"/>
                    </div>
                </p>)
            )}
        </div>
    )
}

export default Save;