import React from 'react';
import './App.css';
import Appbar from './componenet/appbar';
import Drawermenu from './componenet/drawer';
import List from './componenet/list';
function App() {
  return (
    <div>
      <Appbar/>
      <Drawermenu/>
      <List/>
    </div>
  );
}

export default App;
