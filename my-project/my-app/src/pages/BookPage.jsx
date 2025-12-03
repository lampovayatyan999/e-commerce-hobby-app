import NavBar from "../components/NavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import books from "../assets/images/books.png"; 
import Icon from "../assets/images/icon-book-category.svg";

import  { Navigation, Pagination }  from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
    {
        id: 1,
        title: "Book Title 1",
        img: books,
    },
    {
        id: 2,
        title: "Book Title 2",
        img: books,
    },
    {
        id: 3,
        title: "Book Title 3",
        img: books,
    },
    {
        id: 4,
        title: "Book Title 4",
        img: books,
    },
    {
        id: 5,
        title: "Book Title 5",
        img: books,
    },
    {
        id: 6,
        title: "Book Title 6",
        img: books,
    },
    {
        id: 7,
        title: "Book Title 7",
        img: books,
    },
    {
        id: 8,
        title: "Book Title 8",
        img: books,
    }
];

function BookPage() {
    return (
        <>
            <NavBar />
            
            <div className="pt-[100px] bg-white dark:bg-black h-[100%]">
                <div className="bg-white dark:bg-gray-800 text-black dark:text-white w-fit-content max-w-[1800px] mx-auto p-6 rounded-lg">
                <div className=" flex gap-4 bg-white h-[500px] w-fit-content max-w-[1800px] mx-auto p-6 dark:bg-gray-800 text-black dark:text-white">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="h-full w-full justify-center text-white"
                    >
                        <SwiperSlide>
                            <img
                                src={books}
                                alt="Books"
                                className="w-full h-full object-cover"
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

                    <div className="flex flex-col bg-white dark:bg-gray-800">
                        <div className=" flex w-[400px] h-[120px] items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg mt-6 gap-4 cursor-pointer hover:bg-blue-700 ">
                            <h2>Художественная литература</h2>
                            <img src={Icon} alt="" />
                        </div>

                        <div className=" flex w-[400px] h-[120px] items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg mt-6 gap-4 cursor-pointer hover:bg-blue-700">
                            <h2>Художественная литература</h2>
                            <img src={Icon} alt="" />
                        </div>

                        <div className="flex w-[400px] h-[120px] items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg mt-6 gap-4 cursor-pointer hover:bg-blue-700" >
                            <h2>Художественная литература</h2>
                            <img src={Icon} alt="" />
                        </div>
                    </div>

                    
                </div>

                {/* Books   */}
                <div className="w-[80%] mx-auto mt-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white mx-auto p-2">
                        Похожие книги
                    </h2>

                    <div className="flex gap-4 overflow-x-auto whitespace-nowrap p-4 bg-white dark:bg-gray-800 rounded-lg scrollbar-none">
                        {items.map((item) => (
                            <div key={item.id} className="inline-block">
                                <div className="w-[200px] h-[300px] border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="mt-2 text-black dark:text-white">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default BookPage;
