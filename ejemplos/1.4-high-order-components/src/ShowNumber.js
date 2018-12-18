import React from 'react';

// HOC
import WithLocalData from './WithLocalData';

const ShowNumber = ({ localData }) => {
  return <span>El número es: <b>{localData}</b></span>;
};

export default WithLocalData(ShowNumber, 'number');
