import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import menuItems from '../data/menuItems.json';
import ToggleButton from './ToggleButton/ToggleButton';

const App1 = () => {
  return (
    <>
      <MainMenu items={menuItems} />
      <ToggleButton text="Click me" type="button" />
    </>
  );
};

export default App1;
