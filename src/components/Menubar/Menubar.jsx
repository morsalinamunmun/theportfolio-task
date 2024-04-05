import {  NavLink } from "react-router-dom";

const Menubar = () => {
    return (
        <div  className={`flex h-screen bg-[#333333] `}>
            <aside className="z-20 flex-shrink-0 hidden w-48 overflow-y-auto bg-[#333333] text-white md:block">
                <div>
                    <div className="text-blue-950 flex flex-col justify-between">
                        <div className="">
                            <div className="flex justify-center">
                                <div className="flex  flex-col justify-center items-center">
                                    <img
                                        className="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-2 border-blue-400"
                                        src=""
                                        alt=""
                                    />
                                    <p className="font-semibold text-base  text-gray-700 pt-2 text-center w-full">
                                        
                                    </p>
                                    <p className="text-white">Name</p>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-between">
                                <ul className="mt-6 leading-10 text-white">
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex active:bg-[#434343] items-center text-white w-full text-sm font-semibold  transition-colors duration-150 cursor-pointer  py-2 px-4"
                                            to={"home"}
                                        >
                                            <span className="ml-10">About</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative">
                                        <NavLink
                                            className="inline-flex text-white items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                                            to={"addTask"}
                                        >
                                            <span className="ml-4">Resume</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative ">
                                        <NavLink
                                            className="inline-flex text-white items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"taskManagement"}
                                        >
                                            <span className="ml-4">Projects</span>
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
                className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 ease-in-out duration-300 overflow-y-auto bg-[#333333]        
        md:hidden`}
            >
                <div className="text-blue-950 bg-[#333333]">
                    <div className="flex flex-col justify-between p-2 bg-[#333333]">
                        <div>
                            <div className="flex py-3 px-2 items-center">
                                <NavLink to={"/"}>
                                    <h2 className="md:text-2xl text-xl font-semibold">
                                        CSq<span className="text-[#409bd4]">Task Manager</span>
                                    </h2>
                                </NavLink>
                            </div>
                            <div className="flex flex-col justify-between">
                                <ul className="mt-6 leading-10">
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"home"}
                                        >
                                            <span className="ml-4">About</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"addTask"}
                                        >
                                            <span className="ml-4">Resume</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to="taskManagement"
                                        >
                                            <span className="ml-4">Projects</span>
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