import React from 'react'



const Home = () => {
    return (
        <>
            <div className=" dark:text-white container mx-auto mt-16 flex flex-col md:flex-row items-center justify-between font-poppins">
                {/* Welcome Message and Button */}
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">Welcome to <span className='text-logo-color'>GAMER IQ</span></h1>
                    <p className="text-2xl md:text-3xl mb-10 leading-relaxed tracking-wide">
                        Discover the best deals in gaming and hardware. Your one-stop platform for game keys, PC parts, and accessories.
                    </p>
                    <button className="bg-logo-color text-white px-8 py-3 rounded-lg hover:bg-logo-color-hover shadow-md transition-transform transform hover:scale-105 duration-300">
                        Explore More
                    </button>
                </div>

                {/* PNG Image */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src="/src/assets/images/gameKeys.jpg" alt="Description of Image" className="w-full h-auto" />
                </div>

            </div>
            {/* devider */}
            <div className="my-16 flex items-center justify-center">
                <div className="border-t-2 border-gray-700 w-1/4"></div>
                <div className="bg-logo-color rounded-full h-8 w-8 mx-4"></div>
                <div className="border-t-2 border-gray-700 w-1/4"></div>
            </div>

            {/* section 2 */}
            <div className="container mx-auto mt-16 text-center dark:text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">What are you looking for?</h2>
            </div>
            <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-white mb-12">
                {/* Card 1 */}
                <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/src/assets/images/gameKeys.jpg" alt="GameKeys" className="w-full h-56 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">GAME KEYS</h3>
                        <p className="text-lg">In here you can find where to get the best prices for pc game keys.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/src/assets/images/pcParts.jpg" alt="PcParts" className="w-full h-56 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">PC PARTS</h3>
                        <p className="text-lg">In here you can find where to get the best prices for pc game keys.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="transition-transform transform hover:scale-105 duration-300 hover:shadow-xl bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/src/assets/images/accessories.jpg" alt="Accessories" className="w-full h-56 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">ACCESSORIES</h3>
                        <p className="text-lg">In here you can find where to get the best prices for pc game keys.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home