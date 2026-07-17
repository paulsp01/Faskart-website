import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import useDataContext from "../../customHooks/useDataContext.jsx";

const ProductCard = ({product}) => {


  return (
 <>
  
     <div key={product.id} className="group  shadow-[#8B5E3C] p-1 shadow-lg  rounded-xl  ">
    <div className="relative bg-[#F7F4EF] flex items-center justify-center pt-4">
    <div className="bg-[#DCC6A1]  w-fit p-4 rounded-t-full flex items-center justify-center   ">
       <button
          className="
          absolute
          top-5
          right-5
          z-20
          bg-[#F7F4EF]
          p-2
          rounded-full
          shadow-md
          hover:bg-[#3B2F2F]
          hover:text-white
          duration-300"
        >
          <FavoriteBorderIcon fontSize="small" />
        </button>

        {/* Discount Badge */}
        <span
          className="
          absolute
          top-5
          left-5
          bg-[#3B2F2F]
          text-white
          text-xs
          px-3
          py-1
          rounded-full
          font-semibold"
        >
         {product.discountPercentage}%
        </span>

    <div className="flex flex-col justify-center items-center">
       <img
          src={product.thumbnail}
          alt=""
          className="
          w-40
          object-contain
          duration-500
          group-hover:scale-110"
        />
     <p className="text-[#8B5E3C] text-sm font-bold uppercase tracking-widest  rounded-full">
         {(product.category).toUpperCase()}
        </p>
    </div>
   </div>
    

  </div>
   <div className="bg-[#FFFFEF] p-4 ">
   
        <h2
          className="
          text-2xl
          font-bold
          text-[#3B2F2F]
          mt-2"
        >
         {product.title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
         {product.description}
        </p>

        <div className="flex items-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <StarIcon key={item} sx={{ color: "#D89C2B", fontSize: 18 }} />
          ))}

          <span className="ml-2 text-sm text-gray-500">(128 Reviews)</span>
        </div>

       
        <div className="flex items-end gap-3">
          <h3 className="text-3xl font-bold text-[#3B2F2F]">$34</h3>

          <span className="line-through text-gray-400">$46</span>

  <button
          className="
          mt-6
          w-full
          bg-[#3B2F2F]
          text-[#F7F4EF]
          py-3
          rounded-xl
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          hover:bg-[#372110a9]
          duration-300"
        >
          <ShoppingBagOutlinedIcon />
          Add To Cart
        </button>

        </div>

      
      


   </div>
   </div>
  
 </>
  );
};

export default ProductCard;
