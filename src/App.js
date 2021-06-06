import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AddComboVariants from './components/ComboVariants/AddComboVariants';
import AddComboGroup from './components/ComboVariants/AddComboGroup';
import ComboVariantGroups from './components/ComboVariants/ComboVariantGroups';
import ComboVariantGroup from './components/ComboVariants/ComboVariantGroup';

function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/combo-variant-groups">
          <ComboVariantGroups />
        </Route>
        <Route exact path="/combo-group">
          <ComboVariantGroup />
        </Route>
        <Route exact path="/add-combo-variants">
          <AddComboVariants />
        </Route>
        <Route exact path="/add-combo-group">
          <AddComboGroup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
