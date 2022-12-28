import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Add a new obj .... the 'name' object
    constructor() {
        super(); //Call the underline constructor of all classes that we are extended from...
        this.state = {
            monsters: [],
        };
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        console.log(this.state);
                    }
                );
            });
    }
    // Event Handler
    //  Basic Concept => Is something that I want to happen ever a event happen
    render() {
        console.log('render');
        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="monster"
                    onChange={(event) => {
                        console.log(event.target.value);
                    }}
                />
                ;
                <h1>
                    {this.state.monsters.map((monster) => {
                        return (
                            <div key={monster.id}>
                                <h1>{monster.name}</h1>
                            </div>
                        );
                    })}
                </h1>
            </div>
        );
    }
}

export default App;
