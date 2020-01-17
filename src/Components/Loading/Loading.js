import React from 'react';
import './Loading.scss'
import Vinyl from '../../images/vinyl.svg'

const SpinningRecord = () => {
  return(
    <div className="Loading">
      <img alt="loadimage" className="loading-image" src={ Vinyl } />
    </div>
  )
}

export default SpinningRecord;
