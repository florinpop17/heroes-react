import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MockHeroes } from '../../mock-heroes';

class HeroDetail extends Component {
    state = {
        id: undefined,
        hero: undefined,
        inputVal: ''
    }

    changeName = (e) => {
        const { hero } = this.state;

        this.setState({
            inputVal: e.target.value,
            hero: {
                ...hero,
                name: e.target.value
            }
        });
    }

    componentDidMount = () => {
        const id = +this.props.match.params.id;
        const hero = MockHeroes.find(hero => hero.id === id);

        this.setState({
            id,
            hero,
            inputVal: hero.name
        })
    }

    render() {
        const { hero, inputVal } = this.state;

        return (
            <div>
                {hero && (
                    <div>
                        <h2>{ hero.name.toUpperCase() } Details</h2>
                        <div><span>id: </span> { hero.id }</div>
                        <div>
                            <label>
                                name:
                                <input type="text" placeholder="name" value={inputVal} onChange={this.changeName}/>
                            </label>
                        </div>
                        <Link to='/'><button>go back</button></Link>
                    </div>
                )}
            </div>
        );
    }
}

export default HeroDetail;