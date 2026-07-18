import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Cards from "../components/home/ProductCard";
import { useState, useContext } from "react";
import DataContext from "../context/ProductContext/ProductContext";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import useDataContext from "../customHooks/useDataContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const NewArrivals = () => {
   const { loading, error, product } = useDataContext();
   const [category, setCategory] = useState([])

   const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen((prev) => !prev);
};

   const handleChange = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    setCategory((prev) => [...prev, value]);
  } else {
    setCategory((prev) =>
      prev.filter((item) => item !== value)
    );
  }


};

const clearAll=(e)=>{
 
  setCategory([]);
}

const filteredProducts =
  category.length === 0
    ? product
    : product.filter((item) =>
        category.includes(item.category)
      );

  
  

  return (
    <main className="max-w-10xl mx-auto px-5 sm:px-10 xl:px-15 py-5 text-[#3B2F2F]">
      <div className="pb-10  ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold  ">
          New Arrivals
        </h1>
        <p className="captitalize opacity-70 text-xs sm:text-sm lg:text-base text-[#8B5E3C]">
          Discover the latest in minimalist{" "}
          <span className="uppercase">luxury</span>
        </p>
      </div>

      <section className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="sticky top-24 h-fit  hidden lg:flex flex-col gap-4 md:mr-6">
          <div className="flex items-center justify-between py-3 border-b border-black/30">
            <h1 className="text-lg font-bold">Filters</h1>
            <button onClick={clearAll} className="underline">
              Clear All
            </button>
          </div>
          <div className="flex items-center justify-between border-b border-black/20 pb-4  p-4">
            <ul>
              <li className="font-bold">Categories</li>
              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" 
                  value="beauty"
                  checked={category.includes("beauty")} 
                 onChange={handleChange}/> Beauty
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" 
                  value="furniture"
                  checked={category.includes("furniture")}
                  onChange={handleChange} /> Furniture
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox"
                   value="groceries"
                   checked={category.includes("groceries")}
                   onChange={handleChange} /> Groceries
                </label>
              </li>
              <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" 
                        value="fragrances"
                        checked={category.includes("fragrances")}
                        onChange={handleChange} /> Fragrances
                      </label>
                    </li>
                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" 
                        value="kitchen-accessories"
                        checked={category.includes("kitchen-accessories")}
                        onChange={handleChange} /> Accessories
                      </label>
                    </li>
            </ul>
            <ul>
              <li className="font-bold">
                <KeyboardArrowUpOutlinedIcon />
              </li>
              <li className="opacity-60">(45)</li>
              <li className="opacity-60">(32)</li>
              <li className="opacity-60">(18)</li>
              <li className="opacity-60">(40)</li>
              <li className="opacity-60">(30)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-b border-[#3B2F2F]/20 pb-4  p-4 text-[#3B2F2F]">
            <div className="flex items-center justify-between">
              <h1>Price Range</h1>
              <KeyboardArrowUpOutlinedIcon />
            </div>
            <div className="bg-[#DCC6A1] w-full h-1 relative">
              <div className="bg-[#8B5E3C] w-1/2 h-1 absolute left-1/4 right-1/4">
                <CircleOutlinedIcon
                  className=" absolute left-0 -top-2 "
                  sx={{
                    color: "#8B5E3C",
                    fontSize: 20,
                    backgroundColor: "white",
                  }}
                />
                <CircleOutlinedIcon
                  className="absolute right-0 -top-2 "
                  sx={{
                    color: "#8B5E3C",
                    fontSize: 20,
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between text-[#3B2F2F]">
              <div className="border border-[#3B2F2F] opacity-50 py-2 px-4 w-30">
                <h1> $50</h1>
              </div>
              <h1>-</h1>
              <div className="border border-[#3B2F2F] opacity-50 py-2 px-4 w-30">
                <h1> $500</h1>
              </div>
            </div>
          </div>
        </aside>

        {/* {mobile} */}
        <div className="lg:hidden ">
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={handleClick}
              className="bg-[#F7F4EF] text-sm sm:text-base px-3 py-2 rounded-full flex gap-2 items-center justify-center border border-[#3B2F2F] text-[#3B2F2F]"
            >
              <TuneOutlinedIcon sx={{ fontSize: { xs: 18 }, color:"#3B2F2F" }} />
              <span>Filter & Sort</span>
            </button>
            {/* <div className="bg-[#F7F4EF] px-3 py-2 rounded-full border border-[#3B2F2F]">
              <WidgetsOutlinedIcon sx={{ fontSize: { xs: 18 },color:"#3B2F2F" }} />
            </div> */}
          </div>
          {/* {isOpen && (
            <div className="mt-5 flex flex-col w-70">
              <div className=" flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-b border-black/30">
                  <h1 className="text-lg font-bold">Filters</h1>
                  <button onClick={clearAll} className="underline">
                    Clear All
                  </button>
                </div>
                <div className="flex items-center justify-between border-b border-black/20 pb-4  p-4">
                  <ul>
                    <li className="font-bold">Categories</li>
                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" 
                        value="beauty"
                        checked={category.includes("beauty")}
                        onChange={handleChange}/> Beauty
                      </label>
                    </li>

                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" value="furniture"
                         checked={category.includes("furniture")}
                         onChange={handleChange}/> Furniture
                      </label>
                    </li>

                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" value="groceries" 
                        checked={category.includes("groceries")}
                        onChange={handleChange}/> Groceries
                      </label>
                    </li>
                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" value="fragrances" 
                        checked={category.includes("fragrances")}
                        onChange={handleChange} /> Fragrances
                      </label>
                    </li>
                    <li className="">
                      <label className="flex gap-2 items-center ">
                        <input type="checkbox" value="kitchen-accessories" 
                        checked={category.includes("kitchen-accessories")}
                        onChange={handleChange} /> Accessories
                      </label>
                    </li>
                  </ul>
                  <ul>
                    <li className="font-bold">
                      <KeyboardArrowUpOutlinedIcon />
                    </li>
                    <li className="opacity-60">(45)</li>
                    <li className="opacity-60">(32)</li>
                    <li className="opacity-60">(18)</li>
                    <li className="opacity-60">(18)</li>
                    <li className="opacity-60">(18)</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4 border-b border-[#3B2F2F]/20 pb-4  p-4">
                  <div className="flex items-center justify-between">
                    <h1>Price Range</h1>
                    <KeyboardArrowUpOutlinedIcon />
                  </div>
                  <div className="bg-[#DCC6A1] w-full h-1 relative">
                    <div className="bg-[#8B5E3C] w-1/2 h-1 absolute left-1/4 right-1/4">
                      <CircleOutlinedIcon
                        className=" absolute left-0 -top-2 "
                        sx={{
                          color: "#8B5E3C",
                          fontSize: 20,
                          backgroundColor: "white",
                        }}
                      />
                      <CircleOutlinedIcon
                        className="absolute right-0 -top-2 "
                        sx={{
                          color: "#8B5E3C",
                          fontSize: 20,
                          backgroundColor: "white",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 items-center justify-between">
                    <div className="border opacity-50 py-2 px-4 w-30">
                      <h1> $50</h1>
                    </div>
                    <h1>-</h1>
                    <div className="border opacity-50 py-2 px-4 w-30">
                      <h1> $500</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>

        <div className="grid gap-2">
          <div className="lg:grid grid-cols-2 items-center hidden ">
            <p>Showing 1-12 of 120 results</p>
           
          </div>
          <div className="srink-0 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-10 ">
            {filteredProducts.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>







<>
  {/* Overlay */}
  <div
    onClick={() => setIsOpen(false)}
    className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 ${
      isOpen
        ? "visible opacity-100"
        : "invisible opacity-0"
    }`}
  />

  {/* Drawer */}
  <aside
    className={`fixed left-0 top-0 z-50 h-screen w-[320px] bg-[#FFFFEF] shadow-2xl transition-transform duration-300 lg:hidden ${
      isOpen
        ? "translate-x-0"
        : "-translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between border-b border-[#DCC6A1] p-5">

      <h2 className="text-2xl font-bold text-[#3B2F2F]">
        Filters
      </h2>

      <button
        onClick={() => setIsOpen(false)}
        className="rounded-full p-2 hover:bg-[#F7F4EF]"
      >
        <CloseOutlinedIcon />
      </button>

    </div>

    <div className="space-y-8 overflow-y-auto p-5">

      {/* Category */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-bold text-[#3B2F2F]">
            Categories
          </h3>

          <button
            onClick={clearAll}
            className="text-sm text-[#8B5E3C] underline"
          >
            Clear
          </button>

        </div>

        <div className="space-y-3">

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="beauty"
              checked={category.includes("beauty")}
              onChange={handleChange}
            />
            Beauty
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="furniture"
              checked={category.includes("furniture")}
              onChange={handleChange}
            />
            Furniture
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="groceries"
              checked={category.includes("groceries")}
              onChange={handleChange}
            />
            Groceries
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="fragrances"
              checked={category.includes("fragrances")}
              onChange={handleChange}
            />
            Fragrances
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="kitchen-accessories"
              checked={category.includes("kitchen-accessories")}
              onChange={handleChange}
            />
            Accessories
          </label>

        </div>

      </div>

      {/* Price */}

      <div>

        <h3 className="mb-5 font-bold text-[#3B2F2F]">
          Price Range
        </h3>

        <div className="relative h-1 rounded-full bg-[#DCC6A1]">

          <div className="absolute left-[20%] right-[20%] h-1 bg-[#8B5E3C]">

            <CircleOutlinedIcon
              className="absolute -left-2 -top-2"
              sx={{
                color: "#8B5E3C",
                fontSize: 20,
                backgroundColor: "white",
              }}
            />

            <CircleOutlinedIcon
              className="absolute -right-2 -top-2"
              sx={{
                color: "#8B5E3C",
                fontSize: 20,
                backgroundColor: "white",
              }}
            />

          </div>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <div className="rounded-lg border border-[#3B2F2F]/30 px-4 py-2">
            $50
          </div>

          <span>-</span>

          <div className="rounded-lg border border-[#3B2F2F]/30 px-4 py-2">
            $500
          </div>

        </div>

      </div>

    </div>
  </aside>
</>




    </main>
  );
};

export default NewArrivals;
