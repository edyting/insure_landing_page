import React from 'react'
import Home from './Home';
import Calculated from './Calculated';

const RightsideToggle = () => {
    let a = false
  return (
    <div>
          { a ?<Home />:<Calculated/>}
    </div>
  );
}

export default RightsideToggle
