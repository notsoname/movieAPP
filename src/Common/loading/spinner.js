import React from 'react';
import loading from './spinner.svg'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={loading}  alt='spinner'/>
        </div>

    )
}

export default Spinner;