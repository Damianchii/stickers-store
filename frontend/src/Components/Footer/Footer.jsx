import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pinterest_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-[50px]'>
			<div className='flex items-center gap-[20px]'>
				<img src={footer_logo} alt='footer-logo' />
				<p className='text-[#383838] text-[46px] font-700'>SHOPPER</p>
			</div>
			<ul className='flex list-none gap-[50px] text-[#252525] text-[20px]'>
				<li className='cursor-pointer'>Company</li>
				<li className='cursor-pointer'>Products</li>
				<li className='cursor-pointer'>Offices</li>
				<li className='cursor-pointer'>About</li>
				<li className='cursor-pointer'>Contact</li>
			</ul>
			<div className='flex gap-[20px] p-3 pb-[6px] bg-[#fbfbfb] border-2 border-[#ebebeb]'>
				<div className='flex gap-[20px]'>
					<img src={instagram_icon} alt='instagram-icon' />
				</div>
				<div className='flex gap-[20px]'>
					<img src={pinterest_icon} alt='pinterest-icon' />
				</div>
				<div className='flex gap-[20px]'>
					<img src={whatsapp_icon} alt='whatsapp-icon' />
				</div>
			</div>
			<div className='w-full gap-[30px] items-center flex-col flex mb-[30px] text-[#1a1a1a] text-[20px]'>
				<hr className='w-[80%] border-0 h-[3px] rounded-full bg-[#c7c7c7]' />
				<p>Copyright @ 2024 - All Rights Reserved</p>
			</div>
		</div>
	)
}

export default Footer
