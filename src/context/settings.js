import React from 'react';
import localStorageHook from '../hooks/useLocalStorage';

export const SettingsContext = React.createContext();
const defaultPreference = {
  numberOfItems: '3',
  completedTasks: 'true',
  sort: 'descending',
};
function SettingsProvider(props) {
  // as a state : title, twitter
  const { value, handleChange, handleSubmit } = localStorageHook('preferences', { ...defaultPreference });
  const state = {
    value,
    handleChange,
    handleSubmit,
  };

  return <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>;
}

export default SettingsProvider;
