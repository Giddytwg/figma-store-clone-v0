import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useMyStore } from "../Store";




const ProductDetails = () => {
    const ref = useRef(null)
    const { id } = useParams();
    const { inventory, isLoading } = useMyStore()
    const product = inventory.find( p => p.id === parseInt(id))
    const [qty, setQty] = useState(1)
    const addSelectedProduct = useMyStore(store => store.addSelectedProduct)
    const [showMessage, setShowMessage] = useState(false)

    console.log(product.pictures)

    console.log(id)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return ( 
        <div className="ProductDetails pt-24 pb-24 px-12 h-screen ">
            
            {isLoading && <div className="absolute h-screen w-full bg-myyellow flex justify-center items-center">...Loading</div>}

            {/* Large screen */}
           
                <div className="flex flex-col justify-around lg:flex-row lg:gap-8">
                    {/* 1st flex child picture switch hidden on mobile */}
                    <div className="pic-controls hidden lg:flex flex-col gap-3 basis-[10%]">
                    {product.pictures.map((p, i)=> (
                        <div key={i}
                        onClick={()=> ref.current.attributes.src.value = p} 
                        className=" w-24 h-24 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <img src={p} alt="" />
                        </div>
                    ))}
                    </div>
                    {/* 2nd flex child */}
                    <div className="rounded-[4rem] overflow-hidden basis-[45%] max-h-[30rem] hidden lg:block">
                        <img ref={ref} src={product.pictures[1]} alt=""className="" />
                    </div>
                    {/* 3 flex xhild */}
                    <div className="left basis-[40%] flex flex-col gap-6">
                        <div>
                            <p className="bg-mygreen py-2 px-7 w-fit rounded-full uppercase font-bold text-xl md:text-2xl">Component</p>
                        </div>
                        <div>
                            <h2 className=" text-3xl md:text-5xl lg:text-6xl font-bold">{product.name}</h2>
                        </div>

                        {/* Only shows on mobile */}
                        <div className="lg:hidden">
                        <Slider {...settings}>
                               {product.pictures.map((p, i)=>(
                                <div key={i} className="m-auto px-3">
                                    <div className="rounded-[4rem] overflow-hidden border h-[20rem] w-full md:h-[40rem]">
                                        <div>
                                            <img src={p} alt="ddd" />
                                        </div>
                                    </div>
                                </div>
                               ))}
                            </Slider>
                        </div>
                        <div className="size-guide flex flex-col gap-7">
                            <p className="underline font-semibold lg:text-xl">Size guide</p>
                            <div className="flex gap-4">
                            {['S', 'M', 'L', 'XL', '2XL'].map((size, i)=>(
                                <div key={i} className="rounded-full w-10 h-10 md:w-12 md:h-12 outline-[.15rem] outline flex justify-center items-center cursor-pointer text-s font-bold">
                                    {size}
                                </div>
                            ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 lg:gap-7">
                            <div className="increase-decrease flex gap-9 justify-start items-center">
                                    <div className="rounded-full w-10 h-10 md:w-12 md:h-12 outline-[.15rem] outline flex justify-center items-center cursor-pointer text-2xl font-bold"
                                    onClick={()=> qty <= 1? setQty(1):setQty(count => count -1)}>-</div>
                                    <p className="text-xl font-bold p-4">{qty}</p>
                                    <div className="rounded-full w-10 h-10 md:w-12 md:h-12 outline-[.15rem] outline flex justify-center items-center cursor-pointer text-2xl font-bold"
                                    onClick={()=> setQty(count => count + 1)}>+</div>
                            </div>
                            <p className={`${showMessage? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-out`}>Added to cart</p>
                            <button className="text-base uppercase font-bold outline-[.15rem] outline rounded-3xl py-2 px-5 hover:bg-black hover:text-white"
                        onClick={()=> {
                            addSelectedProduct(product, qty);
                            setShowMessage(true)
                        }}
                        >Add ${product.price}</button>

                            <p className="text-xl font-medium my-3">{product.tagline}</p>
                        </div>
                    </div>
                </div>

        </div>
     );
}
 
export default ProductDetails
