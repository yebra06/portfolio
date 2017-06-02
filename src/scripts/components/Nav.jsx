import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Route, Link } from 'react-router-dom';

import About from '../components/About.jsx';
import Home from '../components/Home.jsx';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-section">
                        <div className="brand">
                            <Link to="/" className="nav-link show-mobile-md">AYJ</Link>
                            <Link to="/" className="nav-link hide-mobile-md">Alfredo Yebra Jr.</Link>
                        </div>
                    </div>
                    <div className="navbar-section hide-mobile-md">
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/">Projects</Link>
                        <Link className="nav-link" to="/">Work</Link>
                    </div>
                    <div className="navbar-section hide-mobile-md">
                        <a className="social-icon" href="https://github.com/yebra06">
                            <FontAwesome name='github' size='lg'/>
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/in/alfredo-yebra-jr-688257116/">
                            <FontAwesome name='linkedin' size='lg'/>
                        </a>
                    </div>
                    <div className="navbar-section show-mobile-md">
                        <div className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
            </div>
        );
    }
}
