import React from 'react'
import { useEffect } from 'react'

import DropdownGames from '../components/GameKeys/DropDownGames';
const gameKeys = () => {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const ViewItem = (item) => {
        return (
            <div>
                <a href="#" className="group relative block h-48 overflow-hidden rounded-t-lg bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110" />

                    <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                </a>

                <div className="flex dark:text-white items-start justify-between gap-2 rounded-b-lg bg-gray-800 p-4">
                    <div className="flex flex-col">
                        <a href="#" className="font-bold transition duration-100  lg:text-lg">Fancy Outfit</a>
                        <span className="text-sm lg:text-base">by Fancy Brand</span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="font-bold lg:text-lg">$19.99</span>
                        <span className="text-sm text-red-500 line-through">$39.99</span>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className=" py-6 sm:py-8 lg:py-12">

            <div className="dark:text-white mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className=" dark:text-white mb-10 md:mb-16">
                    <div className='grid grid-cols-2 flex-col justify-between'>
                        <div>
                            <h2 className="text-start text-2xl font-bold  lg:text-3xl">GAMES</h2>
                            <p className="mb-4 mt-2 md:mb-6 text-gray-400">Discover the best price for your favorite games</p>

                        </div>
                        {/* sort */}
                        <div className='flex justify-end mt-4'>
                           <DropdownGames/>
                        </div>
                    </div>
                    {/* devider */}
                    <div className="flex my-8 items-center justify-center">
                        <div className="border-t-2 border-gray-700 w-full"></div>
                    </div>

                    <div className="grid grid-cols-2 flex-col justify-between">
                        {/* search */}
                        <form>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />

                            </div>

                        </form>


                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {Array.from({ length: 12 }).map((_, index) => (
                        <ViewItem key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default gameKeys