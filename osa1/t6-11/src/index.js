import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Button vastaa yksittäistä palautteenantonappia
const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
        {text}
        </button>
    )
}

// Statistic huolehtii yksittäisen tilastorivin, esim. keskiarvon näyttämisestä
const Statistic = ({ tilastotieto, arvo, yksikko }) => {
    return (
        <tr>
            <td>{tilastotieto}</td> 
            <td>{arvo} {yksikko}</td>
        </tr>
    )
}
   
// Statistics huolehtii tilastojen näyttämisestä
const Statistics = ({ hyva, neutraali, huono }) => {
    const summa = (a, b, c) => a + b + c
    const keskiarvo = (a, b, c) => (a * 1 + b * 0 + c * -1) / summa(a, b, c)
    const naytakeskiarvo = (a, b, c) => summa(a, b, c) ? roundToOne(keskiarvo(a, b, c)) : 0 
    const positiivisia = (a, b, c) => a / summa(a, b, c)
    const naytapositiivisia = (a, b, c) => summa(a, b, c) ? roundToOne(positiivisia(a, b, c) * 100) : 0
    const roundToOne = (num) => {    
        return + (Math.round(num + "e+1")  + "e-1");
    }

    if (summa(hyva, neutraali, huono))
        return (
            <div>
                <h1>statistiikka</h1>
                <table>
                    <tbody>
                    <Statistic tilastotieto="hyvä" arvo={hyva}></Statistic>
                    <Statistic tilastotieto="neutraali" arvo={neutraali}></Statistic>
                    <Statistic tilastotieto="huono" arvo={huono}></Statistic>
                    <Statistic tilastotieto="keskiarvo" arvo={naytakeskiarvo(hyva, neutraali, huono)}></Statistic>
                    <Statistic tilastotieto="positiivisia" arvo={naytapositiivisia(hyva, neutraali, huono)} yksikko="%"></Statistic>
                    </tbody>
                </table>
            </div>
        )
    else   
        return (
            <div>
                <h1>statistiikka</h1>
                ei yhtään palautetta annettu
            </div>
        )
}

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
      }
    }
  
    render() {    
        const setToValue = (valueitem, newValue) => () => { 
            this.setState({ [valueitem]: newValue })
        }
    
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button handleClick={setToValue("hyva", this.state.hyva+1)} text="hyvä"></Button>
                <Button handleClick={setToValue("neutraali", this.state.neutraali+1)} text="neutraali"></Button>
                <Button handleClick={setToValue("huono", this.state.huono+1)} text="huono"></Button>

                <Statistics 
                    hyva={this.state.hyva} 
                    neutraali={this.state.neutraali} 
                    huono={this.state.huono}> 
                </Statistics>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
