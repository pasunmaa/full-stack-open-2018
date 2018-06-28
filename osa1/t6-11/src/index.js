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
        const setToValue = (valueitem, newValue) => () => { 
            if (valueitem == "hyva")
                this.setState({ hyva: newValue })
            else if (valueitem == "neutraali")
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
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
