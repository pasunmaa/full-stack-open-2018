import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: 1, name: 'Arto Hellas', phonenumber: '040-123456' },
        { id: 2, name: 'Martti Tienari', phonenumber: '040-123456' },
        { id: 3, name: 'Arto Järvinen', phonenumber: '040-123456' },
        { id: 4, name: 'Lea Kutvonen', phonenumber: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
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
        id: this.state.persons.length + 1,
        name: this.state.newName,
        phonenumber: this.state.newNumber
      }
    
      const persons = this.state.persons.concat(personObject)
    
      this.setState({
        persons: persons,
        personObject: ''
      })
    }
  }
  
  handleFilterChange = (event) => {
    //console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  handlePersonChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    //console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    const personsToShow =
      this.state.filter === '' ?
        this.state.persons :
        this.state.persons.filter(
          person => person.name.includes(this.state.filter))
        
    return (
      <div>
        <div>
          {/* debug: filter = {this.state.filter} */}
        </div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: <input 
              value={this.state.filter}
              onChange={this.handleFilterChange} />
        </div>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.lisaaNimi}>
          <div>
            nimi: <input 
              value={this.state.newName}
              onChange={this.handlePersonChange} />
          </div>
          <div>
            numero: <input 
              value={this.state.newNumber}
              onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit" >lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>{personsToShow.map(
            person => <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.phonenumber}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
