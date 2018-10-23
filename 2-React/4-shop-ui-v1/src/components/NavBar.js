import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand" href="/">shopIT</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;