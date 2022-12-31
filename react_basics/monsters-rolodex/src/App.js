import { Component } from 'react';
import './App.css';

class App extends Component {
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
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); // Bota o valor digitado em lower case
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="monster"
          onChange={onSearchChange}
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
