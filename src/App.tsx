import React from 'react';
import logo from './logo.svg';
import './App.css';
import HiddenDateTimeInput from './components/HiddenDateTimeInput';
import Toggle from './components/Toggle';
import CustomScrollbar from './components/CustomScrollbar';
import Skeletons from './components/Skeletons';
import Loaders from './components/Loaders';
import FloatingInput from './components/FloatingInput';

function App() {
  return (
    <div className="App">
      <FloatingInput id='email' label='Email' />
      <HiddenDateTimeInput />
      <Toggle />
      <CustomScrollbar />
      <Skeletons />
      <Loaders />
    </div>
  );
}

export default App;
