import {  NavLink } from "react-router-dom";

const Menubar = () => {
    return (
        <div  className={`flex h-screen bg-[#333333] `}>
            <aside className="z-20 flex-shrink-0 hidden w-48 overflow-y-auto h-screen bg-[#333333] text-white md:block">
                <div>
                    <div className="text-blue-950 flex flex-col justify-between">
                        <div className="">
                            <div className="flex justify-center">
                                <div className="flex  flex-col justify-center items-center">
                                    <img
                                        className="hidden h-24 w-24 rounded-lg sm:block object-cover mr-2 border-2 border-[#ff714a]"
                                        src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
                                        alt=""
                                    />
                                    <p className="font-semibold text-base text-gray-700 pt-2 text-center w-full">
                                        
                                    </p>
                                    <p className="text-white">John doe</p>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-between">
                                <ul className="mt-6 leading-10 text-white">
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to='/'
                                        >
                                            <span className="ml-10">About</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/resume"
                                        >
                                            <span className="ml-10">Resume</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/projects"
                                        >
                                            <span className="ml-10">Projects</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/skills"
                                        >
                                            <span className="ml-10">Skills</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/contact"
                                        >
                                            <span className="ml-10">Contact</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="fixed inset-0 -z-10 flex items-end bg-[#333333] bg-opacity-50 sm:items-center sm:justify-center"></div>
            <aside
                className={`fixed inset-y-0 z-20 h-screen flex-shrink-0 w-64 ease-in-out duration-300 overflow-y-auto bg-[#333333]        
        md:hidden`}
            >
                <div className="text-blue-950 bg-[#333333]">
                    <div className="flex flex-col justify-between p-2 bg-[#333333]">
                        <div>
                            <div className="flex py-3 px-2 items-center">
                                <NavLink to={"/"}>
                                    <h2 className="md:text-2xl text-xl font-semibold">
                                        Morsalina<span className="text-[#409bd4]">Munmun</span>
                                    </h2>
                                </NavLink>
                            </div>
                            <div className="flex flex-col justify-between">
                                <ul className="mt-6 leading-10">
                                    <li className="relative">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to='/about'
                                        >
                                            <span className="ml-4">About</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to='/resume'
                                        >
                                            <span className="ml-10">Resume</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="projects"
                                        >
                                            <span className="ml-10">Projects</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/skills"
                                        >
                                            <span className="ml-10">Skills</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex py-3 focus:bg-[#434343] focus:border-r-4 focus:border-r-[#ff714a] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer px-4"
                                            to="/contact"
                                        >
                                            <span className="ml-10">Contact</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Menubar;