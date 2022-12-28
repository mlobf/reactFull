import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Add a new obj .... the 'name' object
    constructor() {
        super(); //Call the underline constructor of all classes that we are extended from...
        this.state = {
            name: { firstName: 'Marcos', lastName: 'Filho' },
            company: 'Kiowaki',
        };
    }
    // Event Handler
    //  Basic Concept => Is something that I want to happen ever a event happen
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Hi my name is {this.state.name.firstName} and I work at
                        {this.state.company}
                    </p>
                    <button
                        onClick={() => {
                            this.setState({
                                name: {
                                    firstName: 'Lin',
                                    lastName: 'Oliveira',
                                },
                            });
                        }}
                    >
                        Change Name
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
