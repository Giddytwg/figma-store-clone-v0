import { useEffect } from "react";
import Hero from "../Components/Hero";
import { useMyStore } from "../Store";
import ProductsGrid from "../Components/ProductGrid";


const Shop = () => {
    const { initInventory, isLoading} = useMyStore()
    useEffect(()=>{
        initInventory('/Products.json');
    }, [initInventory])
    return ( 
        <div className="shop">
            {isLoading && <div className="absolute h-screen w-full bg-white flex justify-center items-center">...Loading</div>}
            <Hero />
            <ProductsGrid />
        </div>
     );
}
 
export default Shop;
<div className="shop">
    <h1>Shop page</h1>
</div>