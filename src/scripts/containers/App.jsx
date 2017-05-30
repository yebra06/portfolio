import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import About from '../components/About.jsx';
import Home from '../components/Home.jsx';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-section brand">
                            <Link to="/">Alfredo Yebra Jr.</Link>
                        </div>
                        <div className="navbar-section">
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/">Projects</Link>
                            <Link className="nav-link" to="/">Work</Link>
                        </div>
                        <div className="navbar-section">
                            <div className="social-icon">
                                <a className="social-icon" href="https://github.com/yebra06">
                                    <FontAwesome name='github' size='lg'/>
                                </a>
                            </div>
                            <div className="social-icon">
                                <a className="social-icon" href="https://www.linkedin.com/in/alfredo-yebra-jr-688257116/">
                                    <FontAwesome name='linkedin' size='lg'/>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                </div>
            </Router>
        );
    }
}
