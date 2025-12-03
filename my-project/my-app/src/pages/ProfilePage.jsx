import ProfileImage from '../assets/images/ProfileImage.png';
import NavBar from '../components/NavBar';

function ProfilePage() {
    return (
        <>
            <NavBar />

            <div className="w-[100%] mx-auto pt-[100px] bg-white dark:bg-black">
                <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
                <div className='flex '>
                    <img src={ProfileImage} alt="" />

                    <div className='ml-8'>
                        <h2 className='mb-4'>Name</h2>

                        <p>Привязать карту</p>
                        <p>Адрес</p>
                    </div>
                </div>


                {/* Favorites*/}
                <div className='mt-8'>
                    <h2 className='text-2xl font-bold mb-4'>Favorites</h2>
                    <div className='flex gap-4 overflow-x-auto'>
                        {/* Example favorite item */}
                        <div className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg border border-black w-[200px] h-[300px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-200'>
                            <h3 className='text-xl font-semibold pt-2 ml-4'>Favorite Item 1</h3>
                            <p className='items-center justify-center'>Description of favorite item 1.</p>
                        </div>
                        <div className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg border border-black w-[200px] h-[300px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-200'></div>
                    </div>
                </div>


            {/* Basket*/}
                <div className='mt-8'>
                    <h2 className='text-2xl font-bold mb-4'>Basket</h2>
                    <div className='flex gap-4 overflow-x-auto'>
                        {/* Example favorite item */}
                        <div className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg border border-black w-[200px] h-[300px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-200'>
                            <h3 className='text-xl font-semibold pt-2 ml-4'>Favorite Item 1</h3>
                            <p className='items-center justify-center'>Description of favorite item 1.</p>
                        </div>
                        <div className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-lg border border-black w-[200px] h-[300px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-200'></div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default ProfilePage;