import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/'

const getAllCountries = () => {
  const url = baseUrl+'all?fields=name;nativeName;capital;population;flag' 
  //console.log(url)
  const request = axios.get(url)
  return request.then(response => {
      //console.log('number ALL of countries: ', response.data.length)
      //console.log(response.data)
      // set id for each country: use array index
      const countries = response.data.map((country, index) => { //...country, id: country.index })
          const countryObject = { ...country, id: index }
          return countryObject })
      //console.log('countries = ', countries)
      return countries
  })
}

export default { getAllCountries }