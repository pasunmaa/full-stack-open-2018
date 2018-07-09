import React from 'react'

const FilterPerson = ({filter, handlechange}) => {
  return (
    <div>
      {/* <div>debug: filter = {filter}</div> */}
      <div>
      rajaa näytettäviä: <input 
          value={filter}
          onChange={handlechange} />
      </div>
    </div>
  )
}

export default FilterPerson