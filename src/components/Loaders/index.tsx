import React from 'react';
import './style.css';
import Spinner from './Spinner';
import HorizontalSlider from './HorizontalSlider';

const Loaders = () => {
  return (
    <div>
      <h1>Loader</h1>
      <div className='container'>
        <div>
          <Spinner />
          <h5>Circle Spinner</h5>
        </div>

        <div>
          <HorizontalSlider />
          <h5>Horizontal Slider</h5>
        </div>
      </div>
    </div>
  )
}

export default Loaders;