import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([]);
useEffect(()=>{
fetch('ProductsData.json')
.then(res => res.json())
.then(data => setProducts(data))

},[]);
    return (
        <div className="w-11/12 mx-auto mt-16">
        <div className="border-t-1 text-center py-6 border-b-1 border-dashed border-[#13131833] my-12">
           <h2 className="font-bold text-3xl">Our New Products</h2> 
            <p className="text-[#13131899] mt-4">
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat <br /> dolor. Purus urna in sit nullam proin. 
            </p>
            </div> 
            <div className="mt-6 md:grid grid-cols-2 gap-6 space-y-6 md:space-y-0">
              {
                products.map(product => <Product key={product.id} product={product}></Product>)
              }  
                </div>   
        </div>
    );
};

export default Products;