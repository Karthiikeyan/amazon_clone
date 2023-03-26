import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import {logo} from "../../assets/index"
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../redux/amazonSlice';

const Header = () => {
    const [showAll,setShowAll]= useState(false)
    const auth = getAuth();
    const dispatch = useDispatch()
    const products = useSelector((state) => state.amazon.products);
    const userInfo = useSelector((state) => state.amazon.userInfo);
    const handleLogout=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(userSignOut())
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div className='w-full sticky top-0 z-50'>
            
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>

                {/* Amazon Logo image */}
                <Link to='/'>
                    <div className='headerHover'>
                        <img className='w-24 mt-2' src={logo} alt="logo"/>
                    </div>
                </Link>
                
                {/* Location Logo */}
                <div className='headerHover hidden mdl:inline-flex'>
                    <LocationOnIcon/>
                    <p className='text-sm text-lightText font-light flex flex-col'>
                    Delivered to{" "}
                    <span className='text-sm font-semibold text-whiteText'>
                        Oman
                    </span>
                    </p>
                </div>

                {/*Elements ArrowDropDown */}
                <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
                    <span 
                    onClick={() => setShowAll(!showAll)}
                    className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                        All
                        <span><ArrowDropDownIcon/></span>
                    </span>
                    {showAll && (
                        <div>
                            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                                {
                                    allItems.map((item) => (
                                        <li className='text.sm tracking wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'
                                        key={item._id}>
                                            {item.title}
                                        </li>
                                ))
                                }
                                
                            </ul>
                        </div>
                    )
                    }
                    <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
                        type="text"  />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchIcon/>
                    </span>
                </div>

                {/* Sign in OR Login Button */}
                <Link to="/signin">
                    <div className='headerHover  flex flex-col items-start justify-center'>
                    {
                        userInfo ? (
                            <p className='text-sm font-medium text-whiteText hidden lgl:inline-flex'>
                                {userInfo.userName}
                            </p>
                        ) :
                        (
                        <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light text-left'>
                        Hello! Sign in{" "} 
                        </p>   
                        )
                    }
                        
                        <p  className='text-sm font-semibold text-whiteText hidden lgl:inline-flex'>
                            Accounts & Lists
                            <span>
                                <ArrowDropDownIcon/> 
                            </span>
                        </p>
                    </div>
                </Link>

                {/* Return & Order Buttons */}
                <div className='headerHover hidden  lgl:flex flex-col items-center justify-center '>
                    
                    <p className='text-sm text-lightText font-light flex flex-col'>
                        Returns{" "}
                        <span className='text-sm font-semibold text-whiteText'>& Orders</span>
                    </p>
                </div>

                {/* Add to cart Button */}
                <Link to='/cart'>
                    <div className='flex items-start justify-center headerHover relative'>
                        <ShoppingCartIcon/>
                        <p className='text-xs font-semibold mt-3 text-whiteText'>
                            Cart {" "}
                            <span className='absolute text-xs top-0 left-6 font-semiboldp-1 h-4 bg-[#f3a847] w-4 text-amazon_blue rounded-full flex justify-center items-center'>
                                {products.length > 0 ? products.length : 0}
                            </span>
                        </p>
                    </div>
                </Link>

                {/* Logout Button */}
                <Link>
                {
                    userInfo && (
                        <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
                            <LogoutIcon/>
                            <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>
                                Logout
                            </p>
                        </div>
                    )
                }
                </Link>


            </div>
            <HeaderBottom />
        </div>
    )
}

export default Header