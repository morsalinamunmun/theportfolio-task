import { Outlet } from "react-router-dom";
//import Header from "../../components/Header/Header";
import Menubar from "../../components/Menubar/Menubar";

const Layout = () => {
    return (
        <div  className={`flex h-screen`}>
            <Menubar/>
                <main className="scroll-smooth bg-[#444444] w-full h-auto">
                    <Outlet></Outlet>
                </main>
        </div>
    );
};

export default Layout;