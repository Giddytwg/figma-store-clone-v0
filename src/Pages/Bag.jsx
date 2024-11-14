import { useMyStore } from "../Store";

import delete_icon from '/assets/icons/cross-round-svgrepo-com.svg'




const Bag = () => {
    const { selectedProducts:products, deleteSelectedProduct } = useMyStore() 

    // Getting all selected product into an array
    const subTotals = [];
    products.forEach((p)=> {subTotals.push(p.price * p.qty)})

    // delete funtion
   

    return ( 
        <div className="bag py-20 px-6 md:px-16">
            <div className="text-xl font-bold border-b-[3px] border-black"><h1>{products.length} items in Cart</h1>
            </div>
            {/* Product Table for large screen */}
            <div className="hidden md:block">
                <table className="w-full text-left">
                    <thead className=" border-b-2 border-black">
                        <th className="py-3 w-1/2">Items</th>
                        <th className=" py-3">Price</th>
                        <th className=" py-3">Qty</th>
                        <th className=" py-3">Subtotal</th>
                    </thead>
                    {products.length == 0? <p className="text-2xl font-medium mt-5">Cart is empty</p> : 
                    <tbody className="">
                            {products.map((sp) => ( 
                            <tr key={sp.id} className="border-b-[.12rem] border-gray-400">
                                <td  className="w-1/2 flex gap-4 py-3">

                                {/* Delete button */}
                                    <button
                                    onClick={() => deleteSelectedProduct(sp.id)}>
                                        <img 
                                        className="w-7" src={delete_icon} alt="" 
                                        />
                                    </button>
                                
                                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                                        <img className="w-24 h-24 object-cover" src={sp.pictures[1]} alt="" />
                                    </div>
                                    <p className="font-bold">{sp.name}</p>
                                    </td>
                                    {/* Price */}
                                <td className="py-3">$ {sp.price}</td>
                                {/* quantity */}
                                <td className="py-3">{sp.qty}</td>
                                {/* Subtotal */}
                                <td className="py-3">$ {sp.qty * sp.price}</td>
                            </tr>
                            ))}
                    </tbody>}
                </table>
            </div>
            {/* Mobile Products table */}
            <div className="md:hidden">
                <p className="py-2 border-b-2 font-bold">Item</p>
                    {products.length == 0? <p className="text-2xl font-medium mt-5">Cart is empty</p> : <div className="bag-mobile">
                        {products.map((sp)=>(
                            <div key={sp.id} className="border-b-2 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-5 items-center">
                                        <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-24 h-24 object-cover" src={sp.pictures[1]} alt="" />
                                        </div>
                                        <p className="font-bold">{sp.name}</p>
                                    </div>
                                    <button
                                        onClick={() => deleteSelectedProduct(sp.id)}>
                                            <img 
                                            className="w-7" src={delete_icon} alt="" 
                                            />
                                        </button>
                                </div>
                                <div className="flex justify-between font-bold mt-4">
                                    <div className="flex gap-5">
                                        <p><span className="text-gray-400 text-xs">Qty:</span>  {sp.qty}</p>
                                        <p><span className="text-gray-400 text-xs">Unit:</span> $ {sp.price}</p>
                                    </div>
                                    <p><span className="text-gray-400 text-xs">Subtotal:</span> ${sp.qty * sp.price}</p>
                                </div>
                            </div>
                        ))}
                    </div> }
            </div>
                
            <div className="flex justify-between">
                <div></div>
                <div className=" flex flex-col gap-2">
                    <p className="md:text-xl font-bold">Shipping</p>
                    <p className="md:text-xl font-bold"><span className="text-gray-500">Total* </span>{products.length !==0?` $${subTotals.reduce((cv, n) => cv += n )}` : `$0`}</p>
                    <button className="text-bold uppercase font-bold outline-[.15rem] outline rounded-3xl py-1 px-4 bg-black text-white hover:none focus:bg-black focus:text-white"> check out</button>
                </div>
            </div>
        </div>
     );
}
 
export default Bag;

