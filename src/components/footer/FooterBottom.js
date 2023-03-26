import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-content-center text-gray-400 mb-6'>
          {
            footerBottomItem.map((item)=>(
              <div className='group cursor-pointer' key={item._id}>
                <h3 className='w-30 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]'>
                  {item.title}
                </h3>
                <p className='w-30  text-[12px] tracking-wide text-[#999] group-hover:underline leading-3'>
                  {item.des}
                </p>
              </div>
            ))
          }
        </div>
        <div className='w-full flex flex-col gap-1 items-center justify-center py-6'>
          
            <p className='text-[12px] text-[#DDD] leading-3 mb-[2px] ml-3'>Conditions of Use & Sale{" "}<span className='ml-3'>Privacy Notice</span><span className='ml-3'>Interest-Based Ads</span></p>          
            <p className='text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          
        </div>
      </div>
    </div>
  )
}

export default FooterBottom