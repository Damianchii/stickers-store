import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
	return (
		<div className='flex justify-around p-4 shadow-md'>
			<div className='flex items-center gap-2.5'>
				<img src={logo} alt='logo' />
				<p className='color-[#171717] text-3xl font-semibold'>Shopper</p>
			</div>
			<ul className='flex items-center list-none gap-12 text-[#626262] text-xl font-medium'>
				<li className='navbar-li'>
					Shop <hr />
				</li>
				<li className='navbar-li'>Men</li>
				<li className='navbar-li'>Women</li>
				<li className='navbar-li'>Kids</li>
			</ul>
			<div className='flex items-center gap-12'>
				<button className='w-[117px] h-[48px] outline-none rounded-full text-[#515151] text-xl font-medium bg-white cursor-pointer border-2 border-[#7a7a7a] active:bg-[#f3f3f3]'>
					Login
				</button>
				<img src={cart_icon} alt='cart' />
			</div>
		</div>
	)
}

export default Navbar
