import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/home/ProductCard.jsx";
import useDataContext from "../customHooks/useDataContext.jsx";
import { CartContext } from "../context/ProductContext/CartContext.jsx";

const CollectionsDetails = () => {
  const {setCart,toggleItem}=useContext(CartContext);
  const { id } = useParams();
  const { loading, error, product } = useDataContext();
  const selectedProduct = product.find((item) => item.id === Number(id));

  
  
  const galleryImages = selectedProduct?.images?.length
    ? selectedProduct.images
    : [selectedProduct?.thumbnail].filter(Boolean);

  
  const [selectedImage, setSelectedImage] = useState({
    productId: null,
    image: "",
  });

  const activeImage =
    selectedImage.productId === selectedProduct?.id
      ? selectedImage.image
      : galleryImages[0] || "";

      
  const relatedProducts = selectedProduct
    ? product
        .filter(
          (item) =>
            item.id !== selectedProduct.id &&
            item.category === selectedProduct.category,
        )
        .slice(0, 4)
    : [];

  const discountPercentage = selectedProduct?.discountPercentage || 0;
  const originalPrice = selectedProduct
    ? selectedProduct.price / (1 - discountPercentage / 100)
    : 0;

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading product...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }

  if (!selectedProduct) {
    return <p className="text-center text-2xl mt-10">Product not found.</p>;
  }


  const handleAddToCart = (e) => {
    e.stopPropagation();
    toggleItem(selectedProduct, setCart);
  };

  return (
    <main className="bg-[#f1f3f6] px-3 py-6 sm:px-6">
  <section className="mx-auto grid max-w-7xl gap-6  p-4 lg:grid-cols-[48%_1fr]">
        <div className="grid gap-4 sm:grid-cols-[84px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
            {galleryImages.map((image) => (
              <button
                type="button"
                key={image}
                onClick={() =>
                  setSelectedImage({
                    productId: selectedProduct.id,
                    image,
                  })
                }
              className={`h-20 w-20 shrink-0 rounded-xl border-2 bg-[#F7F4EF] p-1 transition-all duration-300 ${
  activeImage
    === image
      ? "border-[#8B5E3C] shadow-md"
      : "border-[#DCC6A1] hover:border-[#8B5E3C]"
}`}
              >
                <img
                  src={image}
                  alt={selectedProduct.title}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>

        <div className="order-1 flex min-h-80 items-center justify-center rounded-2xl border border-[#DCC6A1] bg-[#F7F4EF] p-4 shadow-lg sm:order-2">
            <img
              src={activeImage || selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="max-h-[520px] w-full object-contain"
            />
          </div>

          <div className="order-3 grid gap-3 sm:col-start-2 sm:grid-cols-2">
            <button onClick={handleAddToCart} className="rounded-xl bg-[#DCC6A1] px-4 py-4 text-base font-semibold uppercase text-[#3B2F2F] duration-300 hover:bg-[#8B5E3C] hover:text-white">
              Add to Cart
            </button>
            <button className="rounded-xl bg-[#3B2F2F] px-4 py-4 text-base font-semibold uppercase text-white duration-300 hover:bg-[#8B5E3C]">
              Buy Now
            </button>
          </div>
        </div>

       <div className="flex flex-col gap-10 rounded-2xl border border-[#DCC6A1] bg-[#FFFFEF] p-6 shadow-lg">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8B5E3C]">
              {selectedProduct.brand || selectedProduct.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-[#3B2F2F]">
              {selectedProduct.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#8B5E3C] px-3 py-1 text-sm font-semibold text-white">
              {selectedProduct.rating} ★
            </span>
            <span className="text-sm font-semibold text-[#8B5E3C]">
              {selectedProduct.stock} items available
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#8B5E3C]">
              Special price
            </p>
            <div className="mt-1 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-bold text-[#3B2F2F]">
                ${selectedProduct.price}
              </span>
              {discountPercentage > 0 && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="rounded-full bg-[#DCC6A1] px-3 py-1 text-sm font-semibold text-[#3B2F2F]">
                    {Math.round(discountPercentage)}% off
                  </span>
                </>
              )}
            </div>
          </div>

         <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-[#3B2F2F]">Offers</h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-[#3B2F2F]">
              <li>
                <span className="font-semibold">Bank Offer:</span> 10% instant
                discount on selected cards
              </li>
              <li>
                <span className="font-semibold">Exchange Offer:</span> Save
                more with eligible product exchange
              </li>
              <li>
                <span className="font-semibold">Delivery:</span>{" "}
                {selectedProduct.shippingInformation || "Fast delivery available"}
              </li>
            </ul>
          </div>

          <div className="grid gap-4 border-t border-[#DCC6A1] pt-4 sm:grid-cols-[140px_1fr]">
            <h2 className="text-sm font-semibold uppercase text-[#8B5E3C]">
              Highlights
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-[#3B2F2F]">
              <li>{selectedProduct.description}</li>
              <li>Category: {selectedProduct.category}</li>
              <li>Minimum order quantity: {selectedProduct.minimumOrderQuantity}</li>
              <li>{selectedProduct.warrantyInformation}</li>
            </ul>
          </div>

          <div className="grid gap-4 border-t border-[#DCC6A1] pt-4 sm:grid-cols-[140px_1fr]">
            <h2 className="text-sm font-semibold uppercase text-[#8B5E3C]">
              Seller
            </h2>
            <div className="text-sm leading-7 text-[#3B2F2F]">
              <p className="font-semibold text-[#3B2F2F]">FASKART Retail</p>
              <p>{selectedProduct.returnPolicy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-10xl bg-white p-4">
        <div className="mb-2 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-[#212121]">
            Related Products
          </h2>
          <Link
            to="/collections"
            className="bg-[#8B5E3C] px-4 py-2 text-sm font-semibold uppercase text-white"
          >
            View All
          </Link>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {relatedProducts.map((item) => (
              <Cards key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-base font-semibold text-gray-500">
            No related products found.
          </p>
        )}
      </section>
    </main>
  );
};

export default CollectionsDetails;
