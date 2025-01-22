import React from 'react'

function Header() {
    return (
        <header>
            <div className="header p-[10px] bg-[#fff]">
                <div className="header_box flex items-center justify-between">
                    <div className="logo flex items-center gap-[10px] md:gap-[20px]">
                        <img className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]' src="https://cdn-icons-png.flaticon.com/128/1319/1319561.png" alt="Logo_icon" />
                        <h1 className='text-[#000] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]'>DesignHub</h1>
                    </div>
                    <div className="option_icon sm:hidden">
                        <img className='w-[25px] h-[25px]' src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png" alt="Menu_bar" />
                    </div>
                    <div className="header_menu hidden sm:flex sm:items-center  sm:gap-[15px] md:gap-[20px]">
                        <ul className='flex items-center list-none gap-[15px] md:gap-[20px]'>
                            <li><a className='text-black hover:text-slate-600 sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">Home</a></li>
                            <li><a className='text-black hover:text-slate-600 sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">About Us</a></li>
                            <li><a className='text-black hover:text-slate-600 sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">Presentation</a></li>
                            <li><a className='text-black hover:text-slate-600 sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">WorkShops</a></li>
                        </ul>
                        <button className='px-[6px] py-[3px] sm:px-[8px] sm:py-[4px] md:px-[10px] md:py-[6px] lg:px-[15px] lg:py-[8px] rounded-[4px] font-medium text-[10px] md:text-[12px] lg:text-[14px] text-[#000000] hover:text-[#fff] hover:bg-[#000] border-[1px] border-[#00000069] bg-transparent'>Contact Us</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header