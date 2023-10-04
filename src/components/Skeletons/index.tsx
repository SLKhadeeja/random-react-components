import React from 'react';
import './style.css'
import SingleRow from './SingleRow';
import CardSkeleton from './CardSkeleton';
import TableSkeleton from './TableSkeleton';

const Skeletons = () => {
  return (
    <div>
      <h1>Skeletons</h1>

      <div className='container'>
        <div>
          <h5>Single Row</h5>
          <SingleRow />
        </div>

        <div>
          <h5>Card Skeleton</h5>
          <CardSkeleton />
        </div>

        <div>
          <h5>Table Skeleton</h5>
          <TableSkeleton />
        </div>
      </div>
    </div>
  )
}

export default Skeletons;