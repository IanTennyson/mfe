console.log('CONTAINER!')
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />, 
    document.querySelector('#js_root')
  )

// Only "isolated" projects need to export "mount"
// We'll always want to render our container asap.