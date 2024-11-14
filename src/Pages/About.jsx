import about_pic from '/assets/About pic.jpg'
import { useMyStore } from '../Store';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const About = () => {
    
    const products = useMyStore(store => store.inventory)
    console.log(products)
    return ( 
        <div className="about w-[100vw] overflow-hidden ">
            <div className="about pt-20 flex flex-col justify-center items-center sm:flex-row mx-7">
                <div className="heptagon">
                    <img src={about_pic} alt="" />
                </div>
                 <img src="../assets/icons/person-male-svgrepo-com.svg" alt="" />
                <div className="about-details basis-3/5">
                    <h1 className='text-3xl font-bold mt-5'>About</h1>
                    <p className='text-xl font-medium mt-5'>Welcome to the Figma store, a collectedion of Figma apparels (layers) and accessories (components) designed for our community.</p>
                </div>
            </div>
            <div>
            </div>
        </div>
     );
}
 
export default About;