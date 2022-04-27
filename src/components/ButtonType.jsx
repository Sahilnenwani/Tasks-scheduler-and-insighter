import React from 'react'
import { Button } from 'bootstrap';

const ButtonType = ({props}) => {
  return (
    <div style={{size:"10"}}>
        <Button variant={props.variant}>Info</Button>{' '}
    </div>
  )
}
export default ButtonType;