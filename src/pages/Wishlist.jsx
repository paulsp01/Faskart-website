import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarIcon from "@mui/icons-material/Star";
import { CartContext } from "../context/ProductContext/CartContext";
import DataContext from "../context/ProductContext/ProductContext";

const Wishlist = () => {
 const {wishlist,moveToCart,removeItem,setWishlist}=useContext(CartContext);
 
 

  return (
    <div className="min-h-screen  py-14">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-10 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <FavoriteIcon
              sx={{
                color: "#8B5E3C",
                fontSize: 36,
              }}
            />

            <div>
              <h1 className="text-4xl font-bold text-[#3B2F2F]">
                My Wishlist
              </h1>

              <p className="text-[#8B5E3C]">
                {wishlist.length} Saved Products
              </p>
            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {wishlist?.map((item) => {

            const discountPrice = (
              item.price -
              (item.price * item.discountPercentage) / 100
            ).toFixed(0);

            return (

              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl  bg-[#8B5E3C]  shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#DCC6A1] p-1"
              >

               <div className="bg-[#F7F4EF] rounded-3xl">

                <div className="relative flex justify-center  p-6">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-44 object-contain transition duration-300 group-hover:scale-110  bg-[#DCC6A1] rounded-full"
                  />

                  {/* Remove */}

                  <button  onClick={() => removeItem(item, setWishlist)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFEF] text-[#8B5E3C] shadow-md transition hover:scale-110">

                    <DeleteOutlineOutlinedIcon />

                  </button>

                  {/* Wishlist */}

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#3B2F2F] text-white">

                    <p>{item.discountPercentage.toFixed(0)}%</p>

                  </div>

                </div>


                <div className="pt-2 pb-5 px-5">

                  <h2 className="line-clamp-1 min-h-[55px] text-lg font-bold text-[#3B2F2F]">

                    {item.title}

                  </h2>

                  <div className="mt-1 flex items-center gap-1">

                    {[1,2,3,4,5].map((star)=>(
                      <StarIcon
                        key={star}
                        sx={{
                          color:"#D89C2B",
                          fontSize:18
                        }}
                      />
                    ))}

                    <span className="ml-2 text-sm text-gray-500">

                      {item.rating} 

                    </span>

                  </div>

                  <div className="mt-1 flex items-end gap-3">

                    <span className="text-3xl font-bold text-[#3B2F2F]">

                      ${discountPrice}

                    </span>

                    <span className="text-gray-400 line-through">

                      ${item.price}

                    </span>

                  </div>

                  <button onClick={()=>moveToCart(item)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3B2F2F] py-3 font-semibold text-[#FFFFEF] transition duration-300 hover:bg-[#8B5E3C]">

                    <ShoppingBagOutlinedIcon />

                    Move To Cart

                  </button>

                </div>
                </div>

              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;