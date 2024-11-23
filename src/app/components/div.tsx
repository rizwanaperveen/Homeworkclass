import React from 'react'
import Image from 'next/image'

const Div = () => {
  return (
    <>
    
    <div className='flex flex-col md:flex-cols-2 lg:flex-row mt-10 items-center w-full justify-around gap-4'>
        <div className='w-full lg:w-screen mt-10 border-2 border-green-200 p-10 items-center'>
            <div className='flex items-center justify-center'><Image src="/sh1.jpeg" alt="Logo" width={200} height={200}/></div>
            <div className='text-center p-2'>Head&Shoulder</div>
            <div className='text-center p-2'>Price : 10$</div>
            <div className='text-center p-2 bg-green-950 text-white h-10 w-30 md:h-15 md:w-50 lg:w-40 rounded w-28 flex items-center justify-center ml-12'>
            <button>Add to cart</button>
            </div>
        </div>
        <div className='w-full lg:w-screen mt-10 border-2 border-green-200 p-10'>
            <div className='flex items-center justify-center'><Image src="/s2.jpg" alt="Logo" width={135} height={135}/></div>
            <div className='text-center p-2'>Head&Shoulder</div>
            <div className='text-center p-2'>Price : 10$</div>
            <div className='text-center p-2 bg-green-950 text-white h-10 w-30 md:h-15 md:w-50 lg:w-40 rounded w-28 flex items-center justify-center ml-12'>
            <button>Add to cart</button>
            </div>
        </div>
        <div className='w-full lg:w-screen mt-10 border-2 border-green-200 p-10'>
            <div className='flex items-center justify-center'><Image src="/s4.webp" alt="Logo" width={200} height={200} /></div>
            <div className='text-center p-2'>Head&Shoulder</div>
            <div className='text-center p-2'>Price : 10$</div>
             <div  className='text-center p-2 bg-green-950 text-white h-10 w-30 md:h-15 md:w-50 lg:w-40 rounded w-28 flex items-center justify-center ml-12'>
            <button>Add to cart</button>
            </div>
    
        </div>
      </div>
     </>
  )
}

export default Div