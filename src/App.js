import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'

import Login from './Login';
import Registration from './Registration';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
