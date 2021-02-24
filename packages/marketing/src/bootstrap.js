import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  );
}

// If: we are in 'development' and 'isolation' mount immediately.
if (process.env.NODE_ENV === 'development'){
  const isolatedRoute = document.querySelector("#js_marketing_isolation");

  if (isolatedRoute) {
    mount(isolatedRoute)
  }
}

// Else: we are running through our container, export the mount function.
export { mount };