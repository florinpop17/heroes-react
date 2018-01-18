import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        const { topHeroes } = this.props;

        return (
            <div>
                <h3>Top Heroes</h3>
                <div className="grid grid-pad">
                    {topHeroes && topHeroes.map(hero => (
                        <Link to={`/detail/${hero.id}`} className="col-1-4" key={hero.id}>
                            <div className="module hero">
                                <h4>{hero.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Dashboard;