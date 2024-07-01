import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'

const Offers = () => {
	return (
		<div>
			{/*offers*/}
			<div>
				{/*offers left*/}
				<h1>Exclusive</h1>
				<h1>Offers For You</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<button>Check Now</button>
			</div>
			<div>
				{/*offers right*/}
				<img src={exclusive_image} alt='exclusive image' />
			</div>
		</div>
	)
}

export default Offers
