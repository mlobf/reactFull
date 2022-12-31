import { Component } from 'react';
import './App.css';

class App extends Component {
    // Add a new obj .... the 'name' object
    constructor() {
        super(); //Call the underline constructor of all classes that we are extended from...
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState(() => {
                    return { monsters: users };
                });
            });
    }
    // Event Handler
    //  Basic Concept => Is something that I want to happen ever a event happen
    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            let retorno = monster.name
                .toLocaleLowerCase()
                .includes(this.state.searchField);
            return retorno;
        });
        return (
            <div className="App">
                <br />
                <input
                    className="search-box"
                    type="search"
                    placeholder="monster"
                    onChange={(event) => {
                        const searchField =
                            event.target.value.toLocaleLowerCase(); // Bota o valor digitado em lower case
                        this.setState(() => {
                            return { searchField };
                        });
                    }}
                />
                <h1>
                    {filteredMonsters.map((monster) => {
                        return (
                            <div key={monster.id}>
                                <h4>{monster.name}</h4>
                            </div>
                        );
                    })}
                </h1>
            </div>
        );
    }
}

export default App;
