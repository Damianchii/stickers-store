import React from 'react'

const NewsLetter = () => {
	return (
		<div className='w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] gap-[30px] bg-hero-bg-radient'>
			<h1 className='text-[#454545] text-[55px] font-600'>Get Exclusive Offers On Your Email</h1>
			<p className='text-[#454545] text-[20px] '>Subscribe to our newsletter and stay updated</p>
			<div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border-2 border-[#e3e3e3]'>
				<input
					type='email'
					className='w-[500px] ml-[30px] border-0 outline-none text-[#616161] text-[16px]'
					placeholder='Your Email Id'
				/>
				<button className='w-[210px] h-[70px] rounded-full bg-black text-white text-16px cursor-pointer'>
					Subscribe
				</button>
			</div>
		</div>
	)
}

export default NewsLetter
