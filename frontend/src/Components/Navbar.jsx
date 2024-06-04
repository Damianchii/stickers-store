import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [menu, setMenu] = useState('shop')

	return (
		<div className='flex justify-around p-4 shadow-md'>
			<div className='flex items-center gap-2.5'>
				<img src={logo} alt='logo' />
				<p className='color-[#171717] text-3xl font-semibold'>Shopper</p>
			</div>
			<ul className='flex items-center list-none gap-12 text-[#626262] text-xl font-medium'>
				<li className='navbar-li' onClick={() => setMenu('shop')}>
					<Link to='/'>Shop</Link>
					{menu === 'shop' ? <hr /> : <></>}
				</li>
				<li className='navbar-li' onClick={() => setMenu('men')}>
					<Link to='men'>Men</Link>
					{menu === 'men' ? <hr /> : <></>}
				</li>
				<li className='navbar-li' onClick={() => setMenu('women')}>
					<Link to='women'>Women</Link>
					{menu === 'women' ? <hr /> : <></>}
				</li>
				<li className='navbar-li' onClick={() => setMenu('kids')}>
					<Link to='kids'>Kids</Link>
					{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
			<div className='flex items-center gap-12'>
				<Link to='/login'>
					{' '}
					<button className='w-[117px] h-[48px] outline-none rounded-full text-[#515151] text-xl font-medium bg-white cursor-pointer border-2 border-[#7a7a7a] active:bg-[#f3f3f3]'>
						Login
					</button>
				</Link>

				<img src={cart_icon} alt='cart' />
				<div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-full text-md text-white bg-red-400'>
					0
				</div>
			</div>
		</div>
	)
}

export default Navbar
