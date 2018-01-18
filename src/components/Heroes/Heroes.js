import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Heroes.css';

class Heroes extends Component {
    render() {
        const { heroes } = this.props;

        return (
            <div>
                <h2>My Heroes</h2>
                <ul className="heroes">
                    {heroes && heroes.map(hero => (
                        <Link to={`/detail/${hero.id}`} key={hero.id}>
                            <span className="badge">{ hero.id }</span> { hero.name }
                        </Link>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Heroes;