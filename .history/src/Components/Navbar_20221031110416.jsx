import React, { useContext, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaperclip} from 'react-icons/bs';
import {TbFiles} from 'react-icons/tb';
import {MdLocalFireDepartment} from 'react-icons/md';
import {CgWebsite} from 'react-icons/cg';
import {FaYinYang} from 'react-icons/fa';
import {BiLogIn} from 'react-icons/bi';
import {SiMarketo} from 'react-icons/si';
import ethlogo from '../assets/eth.png';
import metaLogo from '../assets/metamask.png';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }

    const {connectWallet} = useContext(AuthContext);
    const {address}=useContext(AuthContext);
    const navigate=useNavigate();

    const logOut=()=>{
        localStorage.removeItem('tokenId');
        navigate('/login');
    }
    const logIn=()=>{
        navigate('/login');
    }
  return (

    <>
   
        <div className=' w-full md:h-auto lg:h-[55px] xl:h-auto  bg-[#343D46] border   border-b border-gray-900 ' >
            <div className='w-full  flex  lg:flex-row md:flex-col  mx-auto px-4 justify-between  items-center h-full'>
           <div className='' ><a href='https://client.aragon.org/#/IP/'><img src={Logo}  className='w-6 h-5'/></a></div>
            <div className='hidden md:flex  '>
                <ul className='flex md:my-3 md:justify-evenly md:items-center md:flex-wrap text-white text-center'>
               
                    {/* <li className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'><MdCall className='mx-1 text-xl'/>Call</li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiOutlineMail className='mx-1 text-xl'/> Email</li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><BsPaperclip className='mx-1 text-xl'/>Whitepaper</li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><TbFiles className='mx-1 text-xl'/>Register Patents</li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><MdLocalFireDepartment className='mx-1 text-xl'/>Our Ecosystem</li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><HiUsers className='mx-1 text-xl'/>Resources</li> */}
                    {
                        localStorage.getItem('tokenId') ?
                        <>
                    <li className='px-3  inline-flex items-center '><Link to='/'> <AiFillHome className=' text-xl'/></Link></li>
                        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900'  ><CgWebsite className='mx-1 text-xl'/><a href='https://www.cre8.wtf/index.html'> IP DAO</a></li>
                        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><FaYinYang className='mx-1 text-xl'/><Link to='/mint' > Mint</Link></li>
                        <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><FaYinYang className='mx-1 text-xl'/><Link to='/list' > Profile</Link></li>

                    <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><SiMarketo className='mx-1 text-xl'/><Link to='/marketplace' > Marketplace</Link></li>
                    <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' onClick={()=>connectWallet()} ><img src={metaLogo} className='w-4 h-4 mr-1'/> {address?'Connected' :'Add IP 2 MetaMask'}</li>
                        
                        </>
                        :
                        <>
                    <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><SiMarketo className='mx-1 text-xl'/><Link to='/marketplace' > Marketplace</Link></li>
                    <li  className='px-3 inline-flex items-center text-sm cursor-pointer hover:text-red-900' onClick={()=>connectWallet()} ><img src={metaLogo} className='w-4 h-4 mr-1'/> {address?'Connected' :'Add IP 2 MetaMask'}</li>
                        
                        </>
                        
                    }



                </ul>
            </div>
          {
                        localStorage.getItem('tokenId') ?
                        <>
            <div className='hidden md:block text-white cursor-pointer hover:text-red-900'  onClick={logOut}> <BiLogIn className=' text-xl inline-flex'/>  Log out </div>
                        
                        </>
                        :
                        <>
            <div className='hidden md:block text-white cursor-pointer hover:text-red-900'  onClick={logIn}> <BiLogIn className=' text-xl inline-flex'/>  Login </div>
                        
                        </>


          }
            <div onClick={handleNav} className='block md:hidden '>
                {nav? <AiOutlineClose size={30} className='text-white bg-slate-600 border   border-b border-gray-900 '/>:<AiOutlineMenu size={30} className='bg-slate-600 border   border-b border-gray-900 text-white '/>}
            </div>
            {/* mobile view  */}
            <div className={nav? 'md:hidden w-full  top-[32px] text-white left-0 absolute flex flex-row  items-center bg-[#343D46] left':' hidden'}>
            <ul>
                <li className='p-2'></li>
                {
                    localStorage.getItem('tokenId') ?
                    <>
                    <li className='px-2   items-center '><a href="#"><Link to='/'> <AiFillHome className=' text-xl'/></Link></a></li>
                    <li  className='px-2 pt-4 flex-col items-center text-sm cursor-pointer hover:text-red-900'  ><img src={ethlogo} className='w-3 inline-flex h-4 mr-1'/><a href='https://www.cre8.wtf/index.html'>IP DAO</a></li>
                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900'  ><img src={metaLogo} className='w-4 inline-flex h-4 mr-1'/><Link to='/mint' > Mint</Link></li>
                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900'  ><img src={metaLogo} className='w-4 inline-flex h-4 mr-1'/><Link to='/list' > Profile</Link></li>

                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900'  ><SiMarketo className='w-4 inline-flex h-4 mr-1'/><Link to='/marketplace' > Marketplace</Link></li>
                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900' onClick={()=>connectWallet()} ><img src={metaLogo} className='w-4 inline-flex h-4 mr-1'/>{address?'Connected' :'Add IP 2 MetaMask'}</li>
                    <li  className='px-0 pt-4 items-center text-sm cursor-pointer hover:text-red-900' onClick={logOut} ><BiLogIn className='mx-1 text-xl inline-flex'/>  Log Out </li>
                    
                    </>
                    :
                    <>
                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900'  ><SiMarketo className='w-4 inline-flex h-4 mr-1'/><Link to='/marketplace' > Marketplace</Link></li>
                    <li  className='px-2 pt-4 items-center text-sm cursor-pointer hover:text-red-900' onClick={()=>connectWallet()} ><img src={metaLogo} className='w-4 inline-flex h-4 mr-1'/>{address?'Connected' :'Add IP 2 MetaMask'}</li>
                    <li  className='px-0 pt-4 items-center text-sm cursor-pointer hover:text-red-900' onClick={logIn} ><BiLogIn className='mx-1 text-xl inline-flex'/>  Login </li>
                    
                    </>
                }
                    {/* <li className='px-1 pt-4  items-center text-sm cursor-pointer hover:text-red-900'><MdCall className='mx-1 inline-flex text-xl'/>Call</li> */}
                    {/* <li  className='px-1 pt-4 items-center text-sm cursor-pointer hover:text-red-900' ><HiOutlineMail className='mx-1 inline-flex text-xl'/>Email</li> */}
                    {/* <li  className='px-1 pt-4  items-center text-sm cursor-pointer hover:text-red-900' ><BsPaperclip className='mx-1 inline-flex text-xl'/>Whitepaper</li> */}
                    {/* <li  className='px-1 pt-4 items-center text-sm cursor-pointer hover:text-red-900' ><TbFiles className='mx-1 inline-flex text-xl'/>Register Patents</li> */}
                    {/* <li  className='px-1 pt-4 items-center text-sm cursor-pointer hover:text-red-900' ><MdLocalFireDepartment className='mx-1 inline-flex text-xl'/>Our Ecosystem</li> */}
                    {/* <li  className='px-1 pt-4 items-center text-sm cursor-pointer hover:text-red-900' ><HiUsers className='mx-1 inline-flex text-xl'/>Resources</li> */}
                    {/* <li  className='px-1 pt-4 items-center text-sm cursor-pointer hover:text-red-900' ><FaYinYang className='mx-1 inline-flex text-xl'/><Link to='/mint' > Our Tokenomics</Link></li> */}
                   


                    {/* <li className='px-1  inline-flex items-center '><Link to='/'> <AiFillHome className=' text-xl'/></Link></li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900'  ><img src={ethlogo} className='w-3 h-4 mr-1'/><a href='https://www.cre8.wtf/index.html'> IP DAO</a></li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' ><FaYinYang className='mx-1 text-xl'/><Link to='/mint' > Mint</Link></li> */}
                    {/* <li  className='px-1 inline-flex items-center text-sm cursor-pointer hover:text-red-900' onClick={()=>connectWallet()} ><img src={metaLogo} className='w-4 h-4 mr-1'/> {address?'Connected' :'Add IP 2 MetaMask'}</li> */}

                </ul>


            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar