import React from 'react';

// HOC
import WithLocalData from './WithLocalData';

const ShowName = ({ localData }) => {
  return <span>El nombre es: <b>{localData}</b></span>;
};

export default WithLocalData(ShowName, 'name');
