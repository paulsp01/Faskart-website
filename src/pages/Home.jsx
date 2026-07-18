import React from "react";
import Hero from "../components/Hero";
import Heading from "../components/home/Heading";
import CategoryCard from "../components/home/CategoryCard";
import CardTwo from "../components/home/CardTwo";
import ProductCard from "../components/home/ProductCard";
import useDataContext from "../customHooks/useDataContext";
import FeatureProducts from "../components/home/FeatureProducts";
import {
  FiAward,
  FiTruck,
  FiRefreshCw,
  FiCreditCard,
} from "react-icons/fi";

const Home = () => {
 const features = [
   {
     id: 1,
     icon: <FiAward/>,
     title: "Premium Quality",
     subtitle: "Finest materials",
   },
   {
     id: 2,
     icon: <FiTruck/>,
     title: "Fast Delivery",
     subtitle: "On time, every time",
   },
   {
     id: 3,
     icon: <FiRefreshCw/>,
     title: "Easy Returns",
     subtitle: "30 day return policy",
   },
   {
     id: 4,
     icon: <FiCreditCard/>,
     title: "Secure Payment",
     subtitle: "100% secure payment",
   },
 ];
  
  const { loading, error } = useDataContext();
   const [category, setCategory] = React.useState("beauty");
  

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }
  return (
    <div className="max-w-10xl mx-auto">
      <Hero />
      <div className="mt-10">
        <Heading heading="shop by category"/>
      </div>

      <div className="px-5 sm:px-10 xl:px-15 place-items-center  py-5 sm:mb-10 grid grid-cols-2 sm:grid-cols-5  gap-10 bg-[#8B5E3C]">
       
        <CategoryCard category={category} setCategory={setCategory} />
      </div>
      <div className="px-5 sm:px-10 xl:px-15 place-items-center py-5 sm:my-10 grid grid-cols-2  lg:grid-cols-4  gap-10 ">
       {features.map((item)=> <CardTwo key={item.id} features={item} />)}
       
      </div>
      <Heading heading="current category" category={category} setCategory={setCategory}/>
      <div className="px-5 sm:px-10 xl:px-15 py-5 sm:mb-5 ">
       
       
          <FeatureProducts   category={category} setCategory={setCategory} /> 
     
      </div>
    </div>
  );
};

export default Home;
