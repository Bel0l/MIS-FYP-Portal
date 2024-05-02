// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';
import Login from './Login';

const App = () => {
    return (
        
            <div>
                <Router>
                    <Route path="/FYP_portal" exact component={Login} />
                    <Route path="/admin" component={AdminDashboard} />
                    <Route path="/student" component={StudentDashboard} />
                    </Router>
            </div>
        
    );
};

export default App;
