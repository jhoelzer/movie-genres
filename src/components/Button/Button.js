import React from 'react';
import './Button.css'

const Button = (props) => {
		return(
			<button className='button' onClick={props.handleSubmit}>View List</button>
		)
}

export default Button;