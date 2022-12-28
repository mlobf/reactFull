import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Add a new obj .... the 'name' object
    constructor() {
        super(); //Call the underline constructor of all classes that we are extended from...
        this.state = {
            monsters: [
                { name: 'Marcos', id: '123kajkdj' },
                { name: 'Linda', id: 'fkjalfjale1' },
                { name: 'Franky', id: 'ieorwjer ' },
                { name: 'Jacky', id: 'asfkjalsjf 323' },
                { name: 'Andrea', id: '123kajkdj' },
            ],
        };
    }
    // Event Handler
    //  Basic Concept => Is something that I want to happen ever a event happen
    render() {
        return (
            <div className="App">
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
