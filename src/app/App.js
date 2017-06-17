import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}