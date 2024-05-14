import React from 'react'
import { useParams } from 'react-router-dom';

const Bluered = () => {

	const { color, backgroundColor } = useParams();
	const { valor } = useParams();

	console.log(color);
	console.log(backgroundColor);

	return (

		<div style={{ color: (color), backgroundColor: (backgroundColor) }}>
			<h1>La palabra es: { valor }</h1>
		</div>
    )
}

export default Bluered
