import React from 'react'
import FilterPerson from '.\\components\\FilterPerson'
import {AddPerson, ShowPerson} from '.\\components\\Person'
import personService from '.\\services\\persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      maxId: 0 // this is used to provide unique for all new persons
    }
  }

  componentDidMount() {
    //console.log('did mount')
    personService
      .getAll()
      .then(response => {
        // find max used id number from response
        //console.log("response = ", response)
        let maxUsedId = response.reduce( ( accumulator, person ) => Math.max(accumulator, person.id), -1 )
        //console.log("maxUsedId = ", maxUsedId)
        this.setState({ persons: response, maxId: maxUsedId })
      })
  }

  lisaaNimi = (event) => {
    event.preventDefault()

    // allow adding only then fields have inserted values
    if (this.state.newName !== '' && this.state.newNumber !== '' )
    {
      if (this.state.persons.findIndex(
        person => this.state.newName === person.name) > -1) {
          //console.log(this.state.newName)
          alert(`${this.state.newName} on jo luettelossa`)
      }
      else {
        const newId = this.state.maxId + 1
        const personObject = {
          id: newId,
          name: this.state.newName,
          phonenumber: this.state.newNumber
        }
      
        personService
          .create(personObject)
          .then(response => {
            const persons = this.state.persons.concat(personObject)
            this.setState({
              persons: persons,
              personObject: '',
              newName: '',
              newNumber: '',
              maxId: newId
            })
        })
      }
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

  handlePersonDelete = (id) => {
    return () => {
      if (window.confirm(`Poistetaanko ${this.state.persons.filter(person => person.id === id)[0].name} ?`)) {
        personService
          .remove(id)
          .then(response => {
            const persons = this.state.persons.filter(person => person.id !== id)
            //console.log(persons)
            this.setState({
              persons: persons,
              /* personObject: '',
              newName: '',
              newNumber: '' */})
        })
      }
    }
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
              number={person.phonenumber}
              handleDelete={this.handlePersonDelete(person.id)} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
