import React from 'react';
import { sayHello } from './utils';

const Home = () => (
  <p>
    {sayHello()}
    Haz login y dirígete al panel de administración para ver el código secreto de hoy.
  </p>
);

export default Home;
