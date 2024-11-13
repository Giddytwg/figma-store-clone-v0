import { Link } from "react-router-dom";
import { useMyStore } from "../Store";


const ProductsGrid = () => {

    // fetch products from servers
    const { inventory, setDraggedProduct } = useMyStore()
    
    // useEffect(()=>{console.log("was dragged", draggedProduct)}, [draggedProduct])
    

    return ( 
        <div className="products py-4 px-10 lg:py-28">
            <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {inventory.map((product)=>(
                    
                    <div key={product.id} 
                    draggable
                    onDragStart={() => setDraggedProduct(product)}
                    className="w-full cursor-pointer"
                    ><Link to={`${product.id}`} 
                    className="card">
                        <div className="rounded-3xl overflow-hidden outline-4">
                        <img
                        className="object-contain" src={product.pictures[0]} alt="" /> 
                        </div>
                        <div className="flex justify-between mt-3">
                            <h2 className="font-bold">{product.name}</h2>
                            <h2 className="font-medium">${product.price}</h2>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
            
     );
}
 
export default ProductsGrid

