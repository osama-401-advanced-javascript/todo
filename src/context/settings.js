import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [numberOfItems, setValue] = useState('3');
  const [completedTasks, setComplete] = useState(true);
  const [sort, setSort] = useState('descending');

  const state = {
    numberOfItems,
    completedTasks,
    sort,
    setValue,
    setComplete,
    setSort,
  };

  return <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>;
}

export default SettingsProvider;
