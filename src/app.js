import React from 'react';
import SettingsProvider from './context/settings';

import ToDo from './components/todo/todo.js';

export default function App() {
  return (
    <>
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    </>
  );
}
