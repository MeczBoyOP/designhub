import React from 'react'

function Events() {
    return (
        <section className="event">
            <div className="event p-[10px] bg-[#fff]">
                <div className="event_box flex flex-col item-start gap-[10px]">
                    <h1 className='text-[#000] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[44px]'>Moments From Our Events</h1>
                    <p className='w-3/4 text-[#747474] text-[11px] sm:text-[12px] md:text-[15px] lg:text-[18px]'>Relive the magic with "Moments from our events." Capturing the essence of each experience, these photos tell the stories of inspiration, connection, and creativity shared at our gatherings.</p>
                    <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[10px] md:gap-[15px] lg:gap-[20px]">
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?semt=ais_incoming" alt="" />
                        </div>
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/close-up-set-table-some-romantic-place_8353-9906.jpg?semt=ais_incoming" alt="" />
                        </div>
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/vintage-candlestick-holiday-table_8353-9571.jpg?semt=ais_incoming" alt="" />
                        </div>
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/vintage-candlestick-holiday-table_8353-9571.jpg?semt=ais_incoming" alt="" />
                        </div>
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?semt=ais_incoming" alt="" />
                        </div>
                        <div className="gallery_image">
                            <img className='w-[100%] rounded-[5px] sm:rounded-[10px] h-[160px] sm:h-[190px] md:-h-[230px] lg:h-[280px] object-cover object-center' src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?semt=ais_incoming" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events