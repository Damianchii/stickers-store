import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
	return (
		<div className='flex flex-col items-center gap-[10px] h-[90vh]'>
			<h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN WOMEN</h1>
			<hr className='200px 6px rounded-full bg-[#252525]' />
			<div className='flex mt-[50px] gap-[30px]'>
				{data_product.map((item, key) => {
					return (
						<Item
							key={key}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Popular
