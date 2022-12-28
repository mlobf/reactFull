import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super(); //Call the underline constructor of all classes that we are extended from...
        this.state = {
            name: 'Marcos Leme de Oliveira Borba Filho',
        };
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Hi {this.state.name}</p>
                    <button>Change Name</button>
                </header>
            </div>
        );
    }
}

export default App;
