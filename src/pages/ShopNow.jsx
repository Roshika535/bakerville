import React, { useEffect, useState } from 'react';
import cakesData from './Shopnow.json';


const ShopNow = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    setCakes(cakesData.cakes);
  }, []);

  const handleQuantityChange = (id, change) => {
    setCakes(prevCakes => 
      prevCakes.map(cake => 
        cake.id === id ? { ...cake, quantity: Math.max(1, (cake.quantity || 1) + change) } : cake
      )
    );
  };

  return (
    <>
      
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Enjoy Our Cakes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden" key={cake.id}>
                <img className="h-60 w-full object-cover" src={cake.image} alt={cake.title} />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{cake.title}</h2>
                  <p className="text-gray-600 mt-2">{cake.previewDescription}</p>
                  <p className="text-gray-600 mt-2">{cake.detailDescription}</p>
                  <p className="text-gray-800 mt-2 font-semibold">${cake.price.toFixed(2)}</p>
                  <div className="flex items-center mt-4">
                    <button 
                      className="bg-gray-300 text-gray-800 py-1 px-3 rounded-l hover:bg-gray-400" 
                      onClick={() => handleQuantityChange(cake.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-800">{cake.quantity || 1}</span>
                    <button 
                      className="bg-gray-300 text-gray-800 py-1 px-3 rounded-r hover:bg-gray-400" 
                      onClick={() => handleQuantityChange(cake.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNow;
