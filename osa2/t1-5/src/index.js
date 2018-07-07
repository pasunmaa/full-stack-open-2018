import React from 'react'
import ReactDOM from 'react-dom'

const Kurssit = (props) => {
    const kurssit = props.kurssit
    return(
      <div>
        {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)}
      </div>
    )
  }

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

const App = () => {
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
          osat: [
            {
              nimi: 'Reactin perusteet',
              tehtavia: 10,
              id: 1
            },
            {
              nimi: 'Tiedonvälitys propseilla',
              tehtavia: 7,
              id: 2
            },
            {
              nimi: 'Komponenttien tila',
              tehtavia: 14,
              id: 3
            }
          ]
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
    ]

  return (
    <div>
      <Kurssit kurssit={kurssit}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)