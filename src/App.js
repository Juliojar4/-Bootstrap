import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Container</h1>
      <div className='container-md border bg-dark text-white'>
        <p>Este contaniner é fixedEste contaniner é fixedEste contaniner é 
          fixedEste contaniner é fixedEste contaniner é fixedEste contaniner 
          é fixedEste contaniner é fixedEste contaniner é fixedEste 
          contaniner é fixedEste contaniner é fixedEste contaniner é fixedEste 
          contaniner é fixedEste contaniner é fixedEste contaniner é fixedEste c
          ontaniner é fixedEste contaniner é fixedEste d</p>
      </div>
      <div className='container-sm border bg-primary'>
        <p>Este contaniner é fixedEste contaniner é fixedEste contaniner é 
          fixedEste contaniner é fixedEste contaniner é fixedEste contaniner 
          é fixedEste contaniner é fixedEste contaniner é fixedEste 
          contaniner é fixedEste contaniner é fixedEste contaniner é fixedEste 
          contaniner é fixedEste contaniner é fixedEste contaniner é fixedEste c
          ontaniner é fixedEste contaniner é fixedEste d</p>
      </div>
      <h1>Grid</h1>
      <div className='container-fluid border border-primary p-5'>

        <div className='row'>
          <div className='col border'>Coluna 1</div>
          <div className='col border'>Coluna 2</div>
          <div className='col border'>Coluna 3</div>
        </div>

        <div className='row'>
          <div className='col border'>Coluna 1</div>
          <div className='col-3 border'>Coluna 2</div>
          <div className='col border'>Coluna 3</div>
        </div>

      </div>
    </div>
  );
}

export default App;
