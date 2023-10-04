import React from 'react';
import './style.css'
import SingleRow from './SingleRow';

const TableSkeleton = () => {
  return (
    <div className='table-skeleton'>
      <SingleRow />
      <SingleRow />
      <SingleRow />
      <SingleRow />
      <SingleRow />
    </div>
  )
}

export default TableSkeleton