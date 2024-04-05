
const Header = () => {
    return (
        <header className="z-40 py-5 bg-white fixed top-0 w-[1030px]">
            <div className="flex justify-between">
                <div className="flex items-center justify-between h-8 px-6">
                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                        aria-label="Menu"
                    >
                       {/*  {isSideMenuOpen ? (
                            <FaXmark className="w-6 h-6" />
                        ) : (
                            <FaBarsStaggered className="w-6 h-6" />
                        )} */}
                    </button>
                </div>
                <div className="mt-2 mr-4 w-fit mx-auto">
                    <h1 className="text-xl text-[#409bd4] fixed left-1/3 md:left-1/2"></h1>
                </div>
            </div>
        </header>
    );
};

export default Header;