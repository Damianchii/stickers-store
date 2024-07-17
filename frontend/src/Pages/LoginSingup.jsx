import React from 'react'

const LoginSingup = () => {
	return (
		<div className='w-full h-[70vh] bg-[#fce3fe] pt-[100px]'>
			<div className=' w-[580px] h-[800px] bg-white m-auto py-[40px] px-[60px]'>
				<h1 className='my-[20px] text-[35px] mx-[0px]'>Sign Up</h1>
				<div className='flex flex-col mt-[30px] gap-[29px]'>
					<input className='input-loginSingup' type='text' placeholder='Your Name' />
					<input className='input-loginSingup' type='email' placeholder='Email Adress' />
					<input className='input-loginSingup' type='password' placeholder='Password' />
				</div>
				<button className='w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] cursor-pointer font-[500]'>
					Continue
				</button>
				<p className='mt-[20px] text-[#5c5c5c] text-[18px] font-[500]'>
					Already have an account? <span className='text-[#ff4141] font-[600]'>Login here</span>
				</p>
				<div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-[500]'>
					<input type='checkbox' name='' id='' />
					<p>By continuing, i agree to te term of use & privacy polocy.</p>
				</div>
			</div>
		</div>
	)
}

export default LoginSingup
