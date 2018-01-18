import React from 'react';
import { Link } from 'react-router-dom';
import './Heroes.css';

const Heroes = ({ heroes }) => (
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

export default Heroes;