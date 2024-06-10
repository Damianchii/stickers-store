import React from 'react'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

const Hero = () => {
	return (
		<div className='h-full bg-hero-bg-radient flex '>
			<div className='flex-1 flex flex-col justify-center gap-5 pl-[180px] leading-[1.1]'>
				<h2 className='text-[#090909] text-2xl font-semibold '>NEW ARRIVALS ONLY</h2>
				<div>
					<div className='flex items-center gap-5'>
						<p className='text-[100px] font-bold  text-[#171717]'>new</p>
						<img className='w-[105px]' src={hand_icon} alt='hand-icon' />
					</div>
					<p className='text-[100px] font-bold  text-[#171717]'>collections</p>
					<p className='text-[100px] font-bold  text-[#171717]'>for everyone</p>
				</div>
				<div className='flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-full mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium'>
					<div>Latest Collection</div>
					<img src={arrow_icon} alt='arrow-icon' />
				</div>
			</div>
			<div className='flex-1 flex items-center justify-center'>
				<img src={hero_image} alt='hero-image' />
			</div>
		</div>
	)
}

export default Hero
