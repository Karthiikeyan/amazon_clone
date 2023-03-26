import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNav = ({title,one, two, three}) => {
  return (
    <div>
        <h3 className='font-titleFont font-semibold mb-1 px-6 py-2'>
            {title}
        </h3>
        <ul>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                {one}
                <span>
                    <KeyboardArrowRightIcon/>
                </span>
            </li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                {two}
                <span>
                    <KeyboardArrowRightIcon/>
                </span>
            </li>
            <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                {three}
                <span>
                    <KeyboardArrowRightIcon/>
                </span>
            </li>
        </ul>
    </div>
  )
}

export default SideNav