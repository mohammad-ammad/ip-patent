import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='w-full h-[90px] bg-black' >
            <div className='max-w-[1240px] mx-auto px-4 justify-between items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff'>Icon P</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white text-center'>
                    <li>Home Icon</li>
                    <li>Call</li>
                    <li>Email</li>
                    <li>Whitepaper</li>
                    <li>Register Patents</li>
                    <li>Our Ecosystem</li>
                    <li>Resources</li>
                    <li>Our Tokenomics</li>
                    <li>Pool(Testing)</li>
                    <li>Add IP 2 Meta</li>

                </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar