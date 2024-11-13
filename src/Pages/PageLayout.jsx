
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return ( 
        <div className="page-layout">
            <div className="absolute z-50 top-0 left-0 w-full">
            <NavBar />
            </div>
            <div className="margin-top "></div>
            <Outlet />
        </div>
     );
}
 
export default PageLayout;