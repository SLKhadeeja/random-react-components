import React from 'react';
import './style.css'
import { Calendar, Timer1 } from 'iconsax-react';

const HiddenDateTimeInput = () => {
  return (
    <div>
      <h1>input with Hidden date calender icon</h1>
      <div className='input-wrapper'>
        <Calendar
          size="32"
          color="#FF8A65"
        />
        <input type="date" id="date" name="date" />
      </div>
      <div className='input-wrapper'>
        <Timer1
          size="32"
          color="#FF8A65"
        />
        <input type="date" id="date" name="date" placeholder="12:00 PM" />
      </div>
    </div>
  )
}

export default HiddenDateTimeInput;