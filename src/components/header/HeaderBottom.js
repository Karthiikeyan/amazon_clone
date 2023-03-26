import React, { useEffect, useRef, useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from 'framer-motion'
import SideNav from './SideNav';
import {profile} from "../../assets/index";
import { useSelector } from 'react-redux';


const HeaderBottom = () => {
    const userInfo = useSelector((state) => state.amazon.userInfo);
    const ref=useRef();
    const [sidebar, setSidebar] = useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current)){
                setSidebar(false)
            }
        })
    },[ref,sidebar]
    )

  return (
    <div className='w-full text-white bg-amazon_light h-[36px] py-3 px-4 flex items-center'>
        <ul className='flex gap-2 items-center text-sm tracking-wide'>
            <li onClick={()=>setSidebar(true)} className='headerHover flex item-center gap-1'><MenuIcon/>All</li>
            <li className='headerHover hidden md:inline-flex'>Today's Deals</li>
            <li className='headerHover hidden md:inline-flex'>Customer Service</li>
            <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
            <li className='headerHover hidden md:inline-flex'>Registry</li>
            <li className='headerHover hidden md:inline-flex'>Sell</li>   
        </ul>

        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4}} className='w-[80%] md:w-[350px] h-full bg-white border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>

                             {
                                userInfo ?(
                                <img className='w-10 h-10 rounded-full'
                                src={profile}
                                alt="userImg"/>
                                ) :
                                (
                                <AccountCircleIcon/>
                                )
                             },
                            {
                                userInfo ?(
                                <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                    {userInfo.userName}
                                </h3>

                                ) :
                                (
                                <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                    Hello, Sign In
                                </h3>
                                )
                            }
                            </div>

                            
                            
                                
                            
                            <SideNav
                            title="Digital Content & Devices"
                            one= "Kindle E-readers & Books"
                            two = "Amazon Music"
                            three = "Amazon Appstore"
                            />
                            <SideNav
                            title="Shop By Department"
                            one= "Electronics"
                            two = "Computers"
                            three = "Smart Home"
                            />
                            <SideNav
                            title="Programs & Features"
                            one= "Gift Cards"
                            two = "Amazon Live"
                            three = "International Shopping"
                            />
                            <SideNav
                            title="Help & Settings"
                            one= "Your Account"
                            two = "Customer Service"
                            three = "Contact us"
                            />
                            <span onClick={()=>setSidebar(false)} className='cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 
                            text-black flex items-center justify-center border bg-gray-200 
                            hover:bg-red-500 hover:text-white duration-300'>
                                <CloseIcon/>
                            </span>
                        </motion.div>
                    </div>
                    
                </div>
            )
        }
    </div>
  )
}

export default HeaderBottom