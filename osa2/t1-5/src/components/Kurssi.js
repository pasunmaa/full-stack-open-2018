import React from 'react'

const Kurssi = (props) => {
    const kurssi = props.kurssi
    return(
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
      </div>
    )
  }
  
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => {
  const osat = props.kurssi.osat
  return(
    <div>
      {osat.map(osat => <Osa key={osat.id} osa={osat.nimi} tehtavia={osat.tehtavia} />)}
    </div>
  )
}

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>

const Yhteensa = (props) => {
  const osat = props.kurssi.osat
  let yhteensa = osat.reduce(
    (accumulator, currentValue) => accumulator + currentValue.tehtavia, 0)
  
  return(
    <p>yhteensä {yhteensa} tehtävää</p>
  )
}

export default Kurssi