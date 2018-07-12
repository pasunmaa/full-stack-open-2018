import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'
import {FindCountries, ListCountries} from './components/countries'
import countryService from '.\\services\\countrydata'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      country: '',   // 'selected' country = filter
    }
  }

  componentDidMount() {
    countryService
      .getAllCountries()
      .then(response => {
        //console.log("DidMount", response)
        this.setState({ countries: response })
      })
  }

  handleCountryChange = (event) => {
    //console.log(event.target.value)
    this.setState({ country: event.target.value })
  }

  render() {
    return (
      <div>
        <FindCountries country={this.state.country} handleCountryChange={this.handleCountryChange} />
        <ListCountries allcountries={this.state.countries} filter={this.state.country} />
      </div>
    )
  }
}

export default App;
