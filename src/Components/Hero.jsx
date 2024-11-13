
import NewSlider from "./NewSlider";
import { useMyStore } from "../Store";
import Spinner from "./Spinner";


// Icons
import asterisk_icon from '../assets/icons/word-symbol-burst.static.svg'
import hourglass_icon from '../assets/icons/word-symbol-hourglass.static.svg';
import dots_icon from '../assets/icons/word-symbol-dots.static.svg';
import zag_icon from '../assets/icons/word-symbol-zag.static.svg';
import sun_icon from '../assets/icons/word-symbol-sun.static.svg'
import comet_icon from '../assets/icons/word-symbol-comet.static.svg'
import snake_icon from '../assets/icons/word-symbol-snake.static.svg'
import tri_icon from '../assets/icons/word-symbol-tri.static.svg'




const Hero = () => {
    const products = useMyStore(store => store.inventory)

    return ( 
        <div className="hero w-[100vw] ">
            <div className="hero-slider h-fit bg-myyellow pt-20 lg:py-10 lg:pt-20 justify-center items-center outline outline-2 md:block m-auto w-[100%] overflow-hidden">
            <div className="hidden lg:block">
                <NewSlider products={products} slidesNo={4} />
                </div>
                <div className="hidden md:block lg:hidden ">
                <NewSlider products={products} slidesNo={3} />
                </div>
                <div className="md:hidden ">
                <NewSlider products={products} slidesNo={1} />
                </div>
            </div> 

            <Spinner />

            <header className="hero-header py-10 px-2 flex justify-center text-center md:py-16 md:px-10 text-balance">
                <h1 className='uppercase text-2xl md:text-5xl  lg:text-6xl font-extrabold'>Figma`s <img className='icon2' src={asterisk_icon}></img> collection <img  className='icon2' src={hourglass_icon} alt="" /> of <span className='underline'>layers</span> <img  className='icon2' src={zag_icon} alt="" /> and <img  className='icon2' src={dots_icon} alt="" /> <span className='underline'>Components</span><img  className='icon2' src={sun_icon} alt="" /> for you <img  className='icon2' src={comet_icon} alt="" />
                 and <img  className='icon2' src={snake_icon} alt="" /> your <img  className='icon2' src={tri_icon} alt=""/> friends </h1>
            </header>

        </div>
     );
}
 
export default Hero;


