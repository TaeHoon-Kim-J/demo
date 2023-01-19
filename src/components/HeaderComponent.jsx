import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:8080" className="navbar-brand"> 헤더입니다. </a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;