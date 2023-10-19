import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

// import { useEffect, useState } from "react";



const Products = () => {
    const {products} = useLoaderData();

    // const [products,setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/products`)
    //     .then(res => res.json())
    //     .then(data=>setProducts(data))
    // },[]);
    // console.log(products);
    return (
        <div className="grid grid-cols-3 gap-5 px-10 py-10">
          {
            products.map(data=><ProductsCard key = {data.id} product = {data}></ProductsCard>)
          }
        </div>
    );
};

export default Products;