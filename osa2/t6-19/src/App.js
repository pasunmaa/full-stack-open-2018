import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: 1 }
      ],
      newName: ''
    }
  }

  lisaaNimi = (event) => {
    event.preventDefault()

    if (this.state.persons.findIndex(
      person => this.state.newName === person.name) > -1) {
        //console.log(this.state.newName)
        alert(`${this.state.newName} on jo luettelossa`)
    }
    else {
      const personObject = {
        name: this.state.newName,
        /* date: new Date().toISOString(), */
        id: this.state.persons.length + 1
      }
    
      const persons = this.state.persons.concat(personObject)
    
      this.setState({
        persons: persons,
        personObject: ''
      })
    }
  }
  
  handlePersonChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <div>
          debug: {this.state.newName}
        </div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.lisaaNimi}>
          <div>
            nimi: <input 
              value={this.state.newName}
              onChange={this.handlePersonChange} />
          </div>
          <div>
            <button type="submit" >lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>{this.state.persons.map(
          person => <div key={person.id}>{person.name}</div>)}</div>
      </div>
    )
  }
}

export default App
