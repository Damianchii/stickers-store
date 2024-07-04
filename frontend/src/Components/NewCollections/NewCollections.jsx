import React from 'react'
import new_collection from '../../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
	return (
		<div className='flex flex-col items-center gap-[10px] mb-[100px]'>
			<h1 className='text-[#171717] text-[50px] font-semibold'>NEW COLLECTIONS</h1>
			<hr className='200px 6px rounded-full bg-[#252525]' />
			<div className='grid mt-[50px] grid-cols-4 gap-[30px] '>
				{new_collection.map((item, key) => {
					return (
						<Item key={key} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
					)
				})}
			</div>
		</div>
	)
}

export default NewCollections
