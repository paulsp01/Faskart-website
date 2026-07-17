import { useState, useContext, useMemo } from "react";
import useDataContext from "../../customHooks/useDataContext.jsx";
import Cards from "./ProductCard.jsx";
import CategoryCard from "./CategoryCard.jsx";
import Heading from "./Heading.jsx";
import CardTwo from "./CardTwo.jsx";

export default function FeatureProducts({category,setCategory}) {
  const { product, loading, error } = useDataContext();
 
const data = useMemo(() => {
    const allProducts = product?.products || product;

    if (!allProducts || !Array.isArray(allProducts)) {
      return [];
    }
    return allProducts.filter((item) => item.category === category);
  }, [product, category]);
  return (
    
    <div className="w-full ">
    
     

      <main>
        {loading && <p>Loading global data...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data.length > 0 && !loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data.map((item) => (
              <Cards key={item.id} product={item}  />
            ))}
          </div>
        )}
        {data.length === 0 && !loading && !error && (
          <p>No products found for {category}.</p>
        )}
      </main>
    </div>
  );
}
