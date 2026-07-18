import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/ProductContext/CartContext";

const ProductCard = ({ product }) => {
  const { setWishlist, setCart, toggleItem } =React.useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/collections/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleItem(product, setWishlist);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    toggleItem(product, setCart);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group h-full cursor-pointer overflow-hidden rounded-xl bg-white p-1 shadow-lg shadow-[#8B5E3C] border-2 border-[#8B5E3C] flex flex-col"
    >
      <div className="relative flex items-center justify-center bg-[#F7F4EF] pt-4">
        <span className="absolute left-5 top-5 rounded-full bg-[#3B2F2F] px-4 py-2 text-xs font-semibold text-white">
          {product.discountPercentage}%
        </span>

        <button
          onClick={handleWishlist}
          className="absolute right-5 top-5 rounded-full  bg-white p-2 shadow-md transition hover:bg-[#3B2F2F] hover:text-white"
        >
          <FavoriteBorderIcon fontSize="small" />
        </button>

        <div className="flex h-[200px] w-[240px] flex-col items-center justify-center rounded-t-full bg-[#DCC6A1]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-44 w-40 object-contain duration-300 group-hover:scale-110"
          />

          <p className="mt-4 text-sm font-bold uppercase tracking-[3px] text-[#8B5E3C]">
            {product.category.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-[#F7F4EF] p-5">
        <h2 className="min-h-[64px] text-2xl font-bold text-[#3B2F2F] line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 min-h-[48px] text-sm text-gray-600 line-clamp-2">
          {product.description.slice(0, 70)}...
        </p>

        <div className="mt-4 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <StarIcon key={item} sx={{ color: "#D89C2B", fontSize: 18 }} />
          ))}

          <span className="ml-2 text-sm text-gray-500">(128 Reviews)</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <h3 className="text-3xl font-bold text-[#3B2F2F]">
              $
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                0,
              )}
            </h3>

            <span className="text-lg text-gray-400 line-through">
              ${product.price.toFixed(0)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex  items-center gap-2 rounded-xl bg-[#3B2F2F] px-6 py-3 font-semibold text-[#F7F4EF] transition duration-300 hover:bg-[#8B5E3C]"
          >
            <ShoppingBagOutlinedIcon />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
