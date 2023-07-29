// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SignIn from './components/Regristration/SignIn';
import SignUp from './components/Regristration/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Route path="/signin" element={SignIn} />
        <Route path="/signup" ele={SignUp} />
      </div>
    </Router>
  );
};

export default App;
