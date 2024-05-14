import React from 'react'
import { useParams } from 'react-router-dom';
import Bluered from './Bluered';

const Cuatro = () => {
    const { valor } = useParams();
	const esNumero = !isNaN(valor);


	return (
		<>
			{esNumero ? (
				<div>
					<h1>El número es: {valor}</h1>
				</div>
			) : (
				<div>
                    <Bluered />
				</div>
			)}
		</>
	)
}

export default Cuatro
