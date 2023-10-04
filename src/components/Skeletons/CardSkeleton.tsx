import React from 'react';
import './style.css';
import SingleRow from './SingleRow';

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <SingleRow />
      <div>
        <SingleRow />
        <SingleRow />
      </div>
    </div>
  )
}

export default CardSkeleton;