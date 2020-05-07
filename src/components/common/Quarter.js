import React from 'react';

import withWindowSizes from './WithWindowSizes';

const Quarter = ({ width = 200, height = 100 }) => {
  return <div style={{ backgroundColor: 'green', width: width / 4, height: height / 4 }}></div>
}

export default withWindowSizes(Quarter);