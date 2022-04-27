import React from 'react';
import FetchedWeather from './components/FetchedWeather';

function App (){
  return (
  <div className='container'>
    <figure className='text-center'>
      <blockquote className='blockquote'>
        <p>Wather table</p>
      </blockquote>
    </figure>
      <FetchedWeather />
  </div>
  );
}

export default App;
