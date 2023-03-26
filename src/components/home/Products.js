import React from 'react'
import { listItems } from '../../constants'
import StarIcon from '@mui/icons-material/Star';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ApiIcon from '@mui/icons-material/Api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';

const Products = () => {
  const dispatch = useDispatch()
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lgl:gap-10 px-5' >
        {
            listItems.map((item)=>(
              <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent
              shadow-none hover:shadow-testshadow duration-200 relative'> 
                <span className='text-xs captitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
                <div className='w-full h-auto flex items-center justify-center z-0 relative group'>
                    <img className='w-52 h-64 object-contain' src={item.image} alt="productImg" />
                    <ul className='w-full invisible group-hover:visible h-36 bg-gray-100 absolute bottom-[-20px] flex flex-col items-col items-end justify-center
                    gap-2 font-titleFont px-2 border-l border-r group-hover:bottom-0 z-0 duration-400'>
                      <li className='productLi'>
                        Compare{" "} 
                        <span><ApiIcon/></span>
                      </li>
                      <li className='productLi'>
                        Add to Cart{" "} 
                        <span><ShoppingCartIcon/></span>
                      </li>
                      <li className='productLi'>
                        View Details{" "} 
                        <span><ArrowCircleRightIcon/></span>
                      </li>
                      <li className='productLi'>
                        Add to Wish List{" "} 
                        <span><FavoriteIcon /></span>
                      </li>
                    
                    </ul>
                  
                    
                </div>
                
                <div className='px-5  bg-white '>
                  <div className='flex items-center justify-between'>
                    <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium z-10'>{item.title.substring(0,20)}</h2>
                    <p className='text-sm text-gray-600 font-semibold z-10'>${item.price}</p>
                    
                  </div>
                  <div className='text-sm'>
                    {item.description.substring(0,100)}
                    <div className='text-yellow-500'>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                    </div>
                    <button onClick={()=>dispatch(addToCart({
                      id:item.id,
                      title:item.title,
                      description:item.description,
                      price:item.price,
                      category:item.category,
                      image:item.image,
                      quantity:1,

                    }))} className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 oy-1.5 rounded-md mt-5'>
                      Add to cart
                    </button>

                  </div>
                </div>
              </div>
                
            ))
        }
    </div>
  )
}

export default Products