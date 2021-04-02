import React from 'react';

import FancyBox from './components/FancyBox'

const availableColors = ['Red', 'Yellow', 'DarkCyan', 'Blue', 'Pink', 'White', 'Lime'];

const App = () => {
  return (
    <FancyBox availableColors={availableColors} />
  );
}

export default App;
