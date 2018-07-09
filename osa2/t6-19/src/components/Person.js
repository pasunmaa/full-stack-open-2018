import React from 'react'

const AddPerson = ({name, number, handlePersonChange, handleNumberChange, lisaaNimi}) => {
  return (
    <form onSubmit={lisaaNimi}>
      <div>
        nimi: <input 
          value={name}
          onChange={handlePersonChange} />
      </div>
      <div>
        numero: <input 
          value={number}
          onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" >lisää</button>
      </div>
    </form>
  )
}

const ShowPerson = ({name, number, handleDelete}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      <td><button onClick={handleDelete}>poista</button></td>
    </tr>
  )
}

export {AddPerson, ShowPerson}