import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import Heroes from './components/Heroes';

import { MockHeroes } from './mock-heroes';

class App extends Component {
    state = {
        heroes: MockHeroes
    }

    render() {
        const { heroes } = this.state;
        const topHeroes = heroes.slice(1, 5);

        return (
            <Router>
                <div>
                    <h1>Tour of Heroes</h1>

                    <nav>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/heroes">Heroes</Link>
                    </nav>
                    <Switch>
                        <Route path="/detail/:id" component={HeroDetail} />
                        <Route path="/heroes" component={() => ( <Heroes heroes={heroes} /> )} />
                        <Route component={() => ( <Dashboard topHeroes={topHeroes} /> )} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
