import React from 'react'
import FilterPerson from '.\\components\\FilterPerson'
import {AddPerson, ShowPerson} from '.\\components\\Person'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    //console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        //console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
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

      axios.post('http://localhost:3001/persons', personObject)
        .then(response => {
          //console.log(response)
          this.setState({
            persons: persons,
            personObject: '',
            newName: '',
            newNumber: ''})
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
        <h2>Puhelinluettelo</h2>
          <FilterPerson filter={this.state.filter} handlechange={this.handleFilterChange} />
        <h2>Lisää uusi</h2>
          <AddPerson 
              name={this.state.newName} 
              number={this.state.newNumber}
              handlePersonChange={this.handlePersonChange}
              handleNumberChange={this.handleNumberChange}
              lisaaNimi={this.lisaaNimi}/>
        <h2>Numerot</h2>
        <table>
          <tbody>{personsToShow.map(person => 
            <ShowPerson 
              key={person.id} 
              name={person.name}
              number={person.phonenumber} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
