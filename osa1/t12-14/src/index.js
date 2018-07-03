import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
        {text}
        </button>
    )
}

const randomAnecdote = (tablesize) => {return Math.floor((Math.random() * tablesize))}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  render() {
    const setToValue = (newValue) => () => { 
        this.setState({ selected: newValue })
    }

    const voteCurrentAnecdote = () => () => {
        const votescopy = [...this.state.votes]
        votescopy[this.state.selected] += 1
        this.setState({ votes: votescopy })
    }

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        has {this.state.votes[this.state.selected]} votes.
        <br></br>
        <Button text="Show next anecodote" handleClick={setToValue(randomAnecdote(anecdotes.length))}></Button>
        <Button text="Vote" handleClick={voteCurrentAnecdote() }></Button>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)