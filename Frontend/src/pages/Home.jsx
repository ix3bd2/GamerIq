import React from 'react';

const Home = () => {
    return (
        <>
            <div className="dark:text-white container mx-auto mt-12 flex flex-col md:flex-row justify-between font-poppins">
                {/* Welcome Message and Button */}
                <div className="flex flex-col justify-center md:text-start min-[320px]:text-center min-h-screen">
                    <div className="md:w-1/1">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter"> <span className='text-logo-color'>GAMER IQ</span></h1>
                        <p className="text-2xl md:text-3xl mb-10 leading-relaxed tracking-wide">
                            Discover the best deals in gaming and hardware. Your one-stop platform for game keys, PC parts, and accessories.
                        </p>
                        <button className="bg-logo-color text-white px-8 py-3 rounded-lg hover:bg-logo-color-hover shadow-md transition-transform transform hover:scale-105 duration-300">
                            Explore More
                        </button>
                    </div>
                </div>
                {/* Cards */}
                <div className="md:w-1/1 sm:w-full mt-8 md:mt-0 grid grid-cols-1 gap-8">
                    {/* Card 1 */}
                    <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                        <img src="/src/assets/images/gameKeys.jpg" alt="GameKeys" className="w-full h-40 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">GAME KEYS</h3>
                            <p className="text-base">Best prices for pc game keys.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                        <img src="/src/assets/images/pcParts.jpg" alt="PcParts" className="w-full h-40 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl  font-bold mb-2">PC PARTS</h3>
                            <p className="text-base">Best prices for pc parts.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                        <img src="/src/assets/images/accessories.jpg" alt="Accessories" className="w-full h-40 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">ACCESSORIES</h3>
                            <p className="text-base">Best prices for accessories.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* devider */}
            <div className="flex my-12 items-center justify-center">
                <div className="border-t-2 border-gray-700 w-1/4"></div>
                <div className="bg-logo-color rounded-full h-8 w-8 mx-4"></div>
                <div className="border-t-2 border-gray-700 w-1/4"></div>
            </div>
        </>


    )
}

export default Home;
