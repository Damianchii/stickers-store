import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'

const Offers = () => {
	return (
		<div className='w-[65%] h-[60vh] flex m-auto px-[140px] mb-[150px] bg-hero-bg-radient'>
			<div className='flex flex-1 flex-col justify-center'>
				<h1 className='text-#171717 text-[80px] font-[600]'>Exclusive</h1>
				<h1 className='text-#171717 text-[80px] font-[600]'>Offers For You</h1>
				<p className='text-[#171717] text-[22px] font-[600]'>ONLY ON BEST SELLERS PRODUCTS</p>
				<button className='w-[282px] bg-[#ff4141] text-[22px] h-[70px] rounded-full border-none text-white font-[500] mt-[30px] cursor-pointer'>
					Check Now
				</button>
			</div>
			<div className='flex-1 flex items-center justify-items-end pt-[50px]'>
				<img src={exclusive_image} alt='exclusive image' />
			</div>
		</div>
	)
}

export default Offers
