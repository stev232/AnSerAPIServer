import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Graph from './components/Graph.tsx';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
        <Graph />
        <Navbar />
      </>
    </Router>
  );
}

export default App;
