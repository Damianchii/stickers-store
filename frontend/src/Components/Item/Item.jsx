import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
	return (
		<div className='w-[350px] hover:scale-105 hover:duration-[0.6s]'>
			{console.log(props)}
			<Link to={`/product/${props.name}`}>
				<img src={props.image} alt='' />
			</Link>
			<p className='my-6'>{props.name}</p>
			<div className='flex gap-[20px]'>
				<div className='text-[#374151] text-[18px] font-semibold'>${props.new_price}</div>
				<div className='text-[#8c8c8c] text-[18px] font-medium line-through'>${props.old_price}</div>
			</div>
		</div>
	)
}

export default Item
