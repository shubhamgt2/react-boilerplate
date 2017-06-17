import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        );
    }
}