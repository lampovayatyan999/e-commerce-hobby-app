import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import { Book, BookMarked } from 'lucide-react';
import Swiper from '../components/Swiper'

function MainPage() {
    const [categories, setCategories] = useState([
        {id: 1, name: "Art"},
        {id: 2, name: "Books"},
        {id: 3, name: "Music"},
        {id: 4, name: "Sports"},
    ])

    return (
        <>
            <NavBar />
            
            <div className='pt-[100px] bg-white dark:bg-black'>
                <Swiper />
            
                <div className='bg-white w-full h-full dark:bg-black pb-8'> 
                    {/* Section Categories cards */}
                    <div className='w-[450px] mx-auto mt-8 grid grid-cols-2 justify-items-center'>
                        {categories.map((category) => (
                            <div key={category.id} className='bg-white dark:bg-white text-black p-2 m-2 rounded-lg inline-block border border-black dark:border-blue-300 w-[200px] h-[100px] text-center cursor-pointer align-center flex items-center justify-center hover:bg-gray-300 hover:scale-105 transition-transform duration-200'>
                                <h3 className='text-xl font-semibold'>{category.name}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Section all products */}
                    <div className='w-[80%] mx-auto mt-8 gap-4 text-black overflow-x-auto'>
                        <h1 className='dark:text-white mb-4'>All products</h1>
                        <div className='flex gap-4 px-4'>
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg border border-black w-[200px] h-[300px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-200'
                                >
                                    <h3 className='text-xl font-semibold pt-2 ml-4'>{category.name}</h3>
                                    <p className='items-center justify-center'>fakjfa;lkjfd;akj;</p>

                                    <BookMarked className='w-[30px] h-[30px] mt-4 ml-[150px] cursor-pointer hover:text-blue-500 transition-colors' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;