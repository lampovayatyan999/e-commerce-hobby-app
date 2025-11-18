// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import books from "../assets/images/books.png"; 
// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <div className='w-[60%] mx-auto mt-4 bg-white dark:bg-gray-800 rounded-lg p-6 border border-black'>
            <div className="flex gap-4 ">
                {/* Big Swiper on the Left */}
                <div className="w-2/3 h-[300px]">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        className="h-full border border-black border-[5px] rounded-lg"
                    >
                        <SwiperSlide>
                            <img
                                src={books}
                                alt="Books"
                                className="w-full h-full object-cover rounded-lg"
                            />    
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={books}
                                alt="Books"
                                className="w-full h-full object-cover rounded-lg"
                            />    
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Two Small Swipers on the Right */}
                <div className="w-1/3 flex flex-col gap-5">
                    {/* First Small Swiper - Horizontal */}
                    <div className="h-[140px]">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            className="h-full border border-black border-[5px] rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Second Small Swiper - Horizontal */}
                    <div className="h-[140px]">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            className="h-full border border-black border-[5px] rounded-lg"
                        >
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={books}
                                    alt="Books"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}