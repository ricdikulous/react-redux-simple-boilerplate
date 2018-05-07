import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as genericActionCreator from './redux/actions/genericActionCreator';
import {getStuff} from "./redux/reducers/genericReducer";

class App extends Component {

    constructor(props) {
        super(props);
        this.props.genericActionCreator.doAction();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {this.props.stuff.property}
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stuff: getStuff(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        genericActionCreator: bindActionCreators(genericActionCreator, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
