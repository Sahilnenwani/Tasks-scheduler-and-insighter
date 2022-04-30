import React from 'react'
import { Button } from 'react-bootstrap';
import "./log.scss"


const LogSignButton = (props) => {
  return (
    <div className='button-style'>
       <Button variant="primary" type="submit" className='style-button' > 
               <span className='text-style'>{props.text}</span>
       </Button>
    </div>
  )
}


export default LogSignButton;