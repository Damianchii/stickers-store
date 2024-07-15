import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
	const { all_product } = useContext(ShopContext)
	return (
		<div>
			<img src={props.banner} className='block my-[30px] mx-auto w-[82%]' alt='banner' />
			<div className='flex my-0 mx-[170px] justify-between items-center'>
				<p>
					<span className='font-[600]'>Showing 1-12</span> out of 36 products
				</p>
				<div className='px-[20px] py-[10px] rounded-full'>
					Sort by <img src={dropdown_icon} alt='dropdonw-icon' />
				</div>
			</div>
			<div className='my-[20px] mx-[170px] grid gap-x-[80px] grid-cols-4 '>
				{all_product.map((prouct, key) => {
					if (props.category === prouct.category) {
						return (
							<Item
								key={key}
								image={prouct.image}
								name={prouct.name}
								new_price={prouct.new_price}
								old_price={prouct.old_price}
							/>
						)
					} else {
						return null
					}
				})}
			</div>
			<div className='flex justify-center items-center my-[150px] mx-auto w-[233px] [h-[69px] rounded-full p-4 cursor-pointer text-[#787878] text-[18px] font-medium bg-[#ededed]'>
				Explore More
			</div>
		</div>
	)
}

export default ShopCategory
