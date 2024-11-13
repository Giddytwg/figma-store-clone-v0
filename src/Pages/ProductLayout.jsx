import { Outlet } from "react-router-dom";


export const ProductLayout = () => {
    return ( 
        <div className="product-layout">
            <Outlet />
        </div>
     );
}