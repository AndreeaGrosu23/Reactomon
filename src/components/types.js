import React, { Component} from 'react';
import axios from 'axios'

export default class TypeList extends Component {
    state = {
        types: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => {
                const types = res.data.results;
                this.setState({ types });
            })
    }

    render() {
        return (
            <div>
                <ol>
                    { this.state.types.map(type => <li>{type.name}</li>) }
                </ol>
            </div>
        );
    }
}