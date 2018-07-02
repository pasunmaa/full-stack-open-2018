import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
        const summa = (a, b, c) => a + b + c
        const keskiarvo = (a, b, c) => (a * 1 + b * 0 + c * -1) / summa(a, b, c)
        const naytakeskiarvo = (a, b, c) => summa(a, b, c) ? keskiarvo(a, b, c) : 0 
        const positiivisia = (a, b, c) => a / summa(a, b, c)
        const naytapositiivisia = (a, b, c) => summa(a, b, c) ? roundToOne(positiivisia(a, b, c) * 100) : 0
        const roundToOne = (num) => {    
            return + (Math.round(num + "e+1")  + "e-1");
        }
        
        const setToValue = (valueitem, newValue) => () => { 
            if (valueitem === "hyva")
                this.setState({ hyva: newValue })
            else if (valueitem === "neutraali")
                this.setState({ neutraali: newValue })
            else 
                this.setState({ huono: newValue })
        }
    
        return (
        <div>
            <h1>anna palautetta</h1>
            <button onClick={setToValue("hyva", this.state.hyva+1)}>hyvä</button>
            <button onClick={setToValue("neutraali", this.state.neutraali+1)}>neutraali</button>
            <button onClick={setToValue("huono", this.state.huono+1)}>huono</button>

            <h1>statistiikka</h1>
            <ul>hyvä: {this.state.hyva}</ul>
            <ul>neutraali: {this.state.neutraali}</ul>
            <ul>huono: {this.state.huono}</ul>
            <ul>keskiarvo: {naytakeskiarvo(this.state.hyva, this.state.neutraali, this.state.huono)}</ul>
            <ul>positiivisia: {naytapositiivisia(this.state.hyva, this.state.neutraali, this.state.huono)} %</ul>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
