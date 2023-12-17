import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import EmployeeForm from './EmployeeForm';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employee-form" component={EmployeeForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
