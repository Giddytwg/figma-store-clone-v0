

const Spinner = () => {
    return ( 
        <div className="spinner">
            <div className=" w-20 h-20 md:w-32 md:h-32 rounded-full outline-2 outline flex justify-center items-center animate-my-spin absolute top-[400px] right-[30px] group text-3xl">✋<span className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">👋</span> </div>
        </div>
     );
}
 
export default Spinner;