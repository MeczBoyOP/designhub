import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer p-[10px] bg-[#fff]">
                <div className="footer_box flex items-center justify-between">
                    <div className="logo flex items-center gap-[10px] md:gap-[20px]">
                        <img className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]' src="https://cdn-icons-png.flaticon.com/128/1319/1319561.png" alt="Logo_icon" />
                        <h1 className='text-[#000] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]'>DesignHub</h1>
                    </div>
                    <div className="footer_menu flex item-center sm:gap-[15px] md:gap-[20px]">
                        <ul className='flex items-center list-none gap-[15px] md:gap-[20px]'>
                            <li><a className='text-black hover:text-slate-600 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">Privacy & Policy</a></li>
                            <li><a className='text-black hover:text-slate-600 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium' href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="divider w-[100%] h-[1px] bg-[#d9d9dd] m-[10px_0px] md:m-[20px_0px]"></div>

                <div className="social flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[10px] items-center">
                    <h1 className='text-black text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium'>&copy; All Rights Reserved.</h1>
                    <div className="social_icons">
                        <ul className='flex items-center list-none gap-[15px] md:gap-[20px]'>
                            <li><a><img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" /></a></li>
                            <li><a><img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /></a></li>
                            <li><a><img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]' src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer