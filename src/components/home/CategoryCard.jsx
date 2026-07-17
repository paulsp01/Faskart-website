import React from 'react'
import useDataContext from '../../customHooks/useDataContext'

const CategoryCard = ({category,setCategory}) => {
 
   
  const cat=[
    {
    name: "Beauty",
    category:"beauty",
    img:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },

   {
    name: "Furniture",
    category:"furniture",
    img:"https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
  },
   {
    name: "Groceries",
    category:"groceries",
    img:"https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
  },
   {
    name: "Fragrances",
    category:"fragrances",
    img:"https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
  },
   {
    name: "Accessories",
    category:"kitchen-accessories",
    img:"https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp"
  },
]
  return (
    
   <>
   {cat.map((c,index) => (
     <div key={index} 
      onClick={() => setCategory(c.category)}
      className='bg-amber-950 w-50 h-50 rounded-full flex items-center justify-center'>
      <div className='bg-[#F7F4EF] w-45 h-45 rounded-full flex flex-col items-center justify-center p-1'>
      <img className='w-30 h-30' src={c.img}/>
      <h1 className='text-[#3B2F2F] font-semibold  text-wrap'>{c.name}</h1>
    </div>
    </div>
   ))}
   </>
  )
}

export default CategoryCard