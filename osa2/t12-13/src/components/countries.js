import React from 'react'

const FindCountries = ({country, handleCountryChange}) => {
    return(
      <div>
        find countries:
        <input 
          value={country}
          onChange={handleCountryChange} />
      </div>
    )
} 
  
const ListCountries = ({allcountries, filter, clickhandler}) => {
    //console.log('ListCountries: ', allcountries)
    const countries = allcountries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    //const countries = allcountries.filter(country => country.name === filter)
    //console.log('countries.length = ', countries.length)
    if (countries.length === 1)
        return(
            <div>
                <h1>
                    {countries[0].name + " " + countries[0].nativeName}
                </h1>
                <div>
                    capital: {countries[0].capital}
                    <br/>
                    population: {countries[0].population}
                    <br/>
                    <br/>
                    <img src={countries[0].flag} width="400" className="Flag" alt="flag" />
                </div>
            </div>
        )
    else if (countries.length >= 10) {
        return(<div>too many matches, specify another filter</div>)
    }
    else
        return(
            countries.map(country =><div onClick={clickhandler(country.id)} key={country.id}>{country.name}</div>)
    )
} 
  
export {FindCountries, ListCountries};