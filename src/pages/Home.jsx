import React from "react";
import Hero from "../components/Hero";
import Heading from "../components/home/Heading";
import CategoryCard from "../components/home/CategoryCard";
import CardTwo from "../components/home/CardTwo";
import ProductCard from "../components/home/ProductCard";
import useDataContext from "../customHooks/useDataContext";
import FeatureProducts from "../components/home/FeatureProducts";

const Home = () => {
  const { loading, error } = useDataContext();
   const [category, setCategory] = React.useState("beauty");
  

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }
  return (
    <>
      <Hero />
      <Heading heading="shop by category"/>

      <div className="px-5 sm:px-10 xl:px-15 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
       
        <CategoryCard category={category} setCategory={setCategory} />
      </div>
      <div className="px-5 sm:px-10 xl:px-15 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
      </div>
      <Heading heading="current category" category={category} setCategory={setCategory}/>
      <div className="px-5 sm:px-10 xl:px-15 py-5 ">
       
       
          <FeatureProducts   category={category} setCategory={setCategory} /> 
     
      </div>
    </>
  );
};

export default Home;
