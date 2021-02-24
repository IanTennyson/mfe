import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from 'react';

// Why are we doing this?
// This approach allows us to write our apps in any framework we like
// The following is generic enough to allow us to import a Vue app into this React "Container"

export default () => {
  const ref = useRef(null);
  
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
