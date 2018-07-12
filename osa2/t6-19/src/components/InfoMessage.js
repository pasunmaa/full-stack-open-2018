import React from 'react'

const InfoMessage = ({message}) => {
  if (message === '' || message === null) {
    //console.log('empty info message')
    return(<div></div>) //<div>debug: NO message</div>)
  }
  else
    return (
        <div className="info">
            {message}
        </div>
    )
}

export default InfoMessage