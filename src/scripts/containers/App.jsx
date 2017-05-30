import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Contact from '../components/Contact.jsx';
import Home from '../components/Home.jsx';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </nav>

                    <Route exact path="/" component={ Home } />
                    <Route path="/contact" component={ Contact } />
                </div>
            </Router>
        );
    }
}
