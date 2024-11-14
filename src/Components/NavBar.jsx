// Import Icons and Logo
import logo from '/assets/icons/logo-full.static.svg';
import search_icon from '/assets/icons/search-svgrepo-com.svg';
import user_icon from '/assets/icons/person-male-svgrepo-com.svg';
import menu_icon from '/assets/icons/hamburger-round-svgrepo-com.svg'
import close_icon from '/assets/icons/circle-close-svgrepo-com.svg'


import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMyStore } from '../Store';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [drop, setDrop] = useState(false)


    const { selectedProducts, addSelectedProduct, setDraggedProduct, draggedProduct } = useMyStore()

    // Drag drop to Bag funtionality
    useEffect(()=>{console.log("was dragged", draggedProduct)}, [draggedProduct])


    return ( 
        <nav>
            <div className="nav font-myfont bg-transparent w-full py-2 px-6 flex justify-between items-center fixed md:py-4 md:px-16">

                <div>
                    <div className="nav-links hidden lg:flex justify-center items-center gap-2">
                            <NavLink 
                            to="/" className='nav-link'>Shop</NavLink>
                            <NavLink 
                            to="about" className='nav-link'>About</NavLink>
                        <div className="search">
                            <img className='icon' src={search_icon} alt="" />
                        </div>
                    </div>
                    <div className="nav-links lg:hidden items-center gap-2 ">
                        <button
                        className=''
                        onClick={()=>setIsMenuOpen(isMenuOpen => !isMenuOpen)}><img className='h-8'  src={!isMenuOpen? menu_icon : close_icon} alt="" /></button>
                    </div>
                </div>
                <div className="logo w-[10rem]">
                    <img src={logo} alt="" />
                </div>
                {/* BAG Nav */}
                <div
                onDragOver={(e)=>{
                    e.preventDefault();
                    setDrop(true);
                }}
                onDragLeave={(e)=>{
                    setDrop(false);
                    e.preventDefault();
                    console.log('leavng')
                }}
                onDrop={()=>{
                    setDrop(false)
                    addSelectedProduct(draggedProduct);
                    setDraggedProduct(null)
                }}>
                    {/* Bag for large screen */}
                    <div className="user-bag hidden lg:flex items-center gap-2">
                        <img className='icon' src={user_icon} alt="" />
                        <NavLink 
                        to="bag" 
                        className='nav-link'
                        >Bag {selectedProducts.length}</NavLink>
                    </div> 
                    {/* Bag for medium and small screen */}
                    <div className="user-bag-mobile">
                        <NavLink to="bag" className='nav-link hidden md:block lg:hidden'>Bag {selectedProducts.length}</NavLink>
                        <NavLink to="bag" className='nav-link md:hidden'>{selectedProducts.length}</NavLink>
                    </div> 
                    
                </div>
                
            </div>
            {/*Mobile Opening nav */}
           {<div className={` px-4 text-5xl fixed w-full font-medium -z-10 space-y-2 flex flex-col gap-4 overflow-hidden bg-white transition-all duration-500 ease-in-out ${!isMenuOpen? 'h-0' : 'h-screen pt-20'}`}>
                <Link to="/"
                className='font-myfont'
                onClick={()=> setIsMenuOpen(isMenuOpen=>!isMenuOpen)}>Shop</Link>
                <Link to="about" 
                onClick={()=> setIsMenuOpen(isMenuOpen=>!isMenuOpen)}>About</Link>
            </div>}
        </nav>
     );
}
 
export default NavBar;

