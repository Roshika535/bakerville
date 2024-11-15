import React from 'react'
import { useNavigate } from 'react-router-dom';





const Body = () => {
  const navigate = useNavigate();
  const toMenu = () => {
    navigate('/ShopNow');
  }
  return (
    <>
    <div className="relative w-full bg-">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-orange-400 md:text-4xl lg:text-6xl">
          The Sweetest Heaven For Freshly Baked
          </h1>
          <p className="mt-8 text-lg text-orange-400">
            A delightful taste that combines the comforting charms of freshly baked with the rich, luminous and delicious taste of sweet treats.
          </p>
          
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md border border-transparent bg-orange-400 px-5 py-3 text-base font-medium text-white hover:bg-orange-300"
            >
              <span onClick={toMenu}>Explore Menu →</span>
            </a>
            </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[580px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1534432182912-63863115e106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBhc3RyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        



      </div>
    </div>

    <div className="mt-16 border-l border-black-300 h-20" >
  <hr className='border-gray-500' />
  <marquee behavior="scroll" direction="left">
   ⁕ 100% BAKED ITEMS THAT ENSURE ULTIMATE FRESHNESS ⁕ FLAVORS THAT TRANSPORT YOU TO A REALM BEYOND IMAGINATION ⁕ FRESH ITEM FROM US TO YOUR DOORSTEPS ⁕
  </marquee>
  <hr className='border-gray-500'/>
</div>

<div class="flex items-center space-x-4  ">
<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ml-8">
<div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
<h1 className="mt-8 text-2xl font-bold tracking-tight text-orange-400  ">Nutrition Rich</h1>
      <p className=" text-orange-400">
      Nutrition rich delights, confined to nourish your taste buds.
      </p>
</div>
</div>
  <div class="mt-8 border-l border-gray-300 h-20"></div>
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
<div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
<h1 className="mt-8 text-2xl font-bold tracking-tight text-orange-400">100% Baked</h1>
      <p className=" text-orange-400">
      Serving 100% baked items from our oven to your plate.
      </p>
</div>
</div>
<div class="mt-8 border-l border-gray-300 h-20"></div>
<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
<div className=" relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
<h1 className=" mt-8 text-2xl font-bold tracking-tight text-orange-400  ">Secure packing</h1>
      <p className=" text-orange-400">
      Enjoy peace of mind with our secure packing.
      </p>
</div>
</div>
</div>



<div className=" border-l border-gray-300 h-20 mb-12 ">
  <h1 className="mt-16 mb-8 text-center text-5xl font-bold tracking-tight text-orange-500  ">New <span className="font-bold tracking-tight text-orange-400">BestSellers</span></h1>
  <div className="flex items-center space-x-4 mt-8 ">
  <div className='mx-auto max-w-7xl lg:grid hover:scale-105 button hover:bg-orange-400 hover:text-white '>
  <img 
  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]"
  src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpZXMlMjBhbmQlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
  <span>
    Chocolate Covered Cookie'wich
  </span> 
  <h2>$6.99</h2>
  </div>
  <div className='mx-auto max-w-7xl lg:grid hover:scale-105 button hover:bg-orange-400 hover:text-white '>
  <img
  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]" 
  src="https://images.unsplash.com/photo-1628815756611-7b1b8f68d460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpZXMlMjBhbmQlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  <span>
    Ice-Cream Deluxe Cookie
  </span> 
  <h2>$7.99</h2>
  </div>
  <div className='mx-auto max-w-7xl lg:grid hover:scale-105 button hover:bg-orange-400 hover:text-white'>
  <img 
  className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]" 
  src="https://images.unsplash.com/photo-1592054942245-ac44762110f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvb2tpZXMlMjBhbmQlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  <span>
    Ham Cookie'wich
  </span> 
  <h2>$10.50</h2>
  </div>
  <div className='mx-auto max-w-7xl lg:grid hover:scale-105 button hover:bg-orange-400 hover:text-white'>
  <img
  className='aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9]'
  src="https://images.unsplash.com/photo-1703168080814-3cd5ba68343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNyb3NzYWludHN8ZW58MHx8MHx8fDA%3D" alt="" />
  <span>
    Swiss Croissant
  </span> 
  <h2>$8.75</h2>
  </div>
</div>
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br />
<hr className="my-6 border-gray-400" />
    


</>
  )
}

export default Body