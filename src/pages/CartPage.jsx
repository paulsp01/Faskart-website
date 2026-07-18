import React, { use, useState } from "react";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { CartContext } from "../context/ProductContext/CartContext";
import DataContext from "../context/ProductContext/ProductContext";

const CartPage = () => {
const {cart,removeItem,setCart}=React.useContext(CartContext);


  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.state,
    0
  );

  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen  py-12">
      <div className="mx-auto max-w-7xl px-5">

        <h1 className="mb-10 text-4xl sm:text-5xl font-bold text-[#3B2F2F]">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-[#F7F4EF] p-5 shadow-lg shadow-[#DCC6A1]"
              >

                <div className="flex items-center gap-5">

                  <div className="h-32 w-32 rounded-xl bg-[#DCC6A1] flex items-center justify-center">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="h-24 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#3B2F2F]">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-lg font-semibold text-[#8B5E3C]">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="mt-6 md:mt-0 flex items-center gap-6">

                  <div className="flex items-center rounded-xl border border-[#DCC6A1]">

                    <button  className="px-4 py-3 hover:bg-[#DCC6A1]">
                      <RemoveCircleOutlineOutlinedIcon />
                    </button>

                    <span className="px-5 text-lg font-semibold">
                    0
                    </span>

                    <button  className="px-4 py-3 hover:bg-[#DCC6A1]">
                      <AddCircleOutlineOutlinedIcon />
                    </button>

                  </div>

                  <button onClick={()=>removeItem(item,setCart)} className="rounded-xl bg-[#DCC6A1] p-3 text-[#8B5E3C] hover:bg-red-200">
                    <DeleteOutlineOutlinedIcon />
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Order Summary */}

          <div className="h-fit rounded-3xl bg-[#3B2F2F] p-8 text-[#FFFFEF] sticky top-24">

            <h2 className="mb-8 text-3xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>

              <hr className="border-[#8B5E3C]" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

            </div>

            <button className="mt-8 w-full rounded-xl bg-[#8B5E3C] py-4 text-lg font-semibold transition hover:bg-[#DCC6A1] hover:text-[#3B2F2F]">
              Proceed To Checkout
            </button>

            <button className="mt-4 w-full rounded-xl border border-[#DCC6A1] py-4 transition hover:bg-[#FFFFEF] hover:text-[#3B2F2F]">
              Continue Shopping
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;