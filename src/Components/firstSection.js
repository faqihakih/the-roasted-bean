import React, { Component } from 'react'

export default class firstSection extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font">
                    <div className="flex md:flex-row flex-col">
                        <div className="py-10 lg:w-1/2 lg:h-screen md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg-hijau">
                            <div class="inline-flex pb-14">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14" viewBox="0 0 512 512">
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <ul className="tracking-wider">
                                    <li>THE</li>
                                    <li>ROASTED</li>
                                    <li>BEAN</li>
                                </ul>

                            </div>
                            <p className="mb-4 leading-relaxed text-3xl">Start Your Day With Our Great Coffee</p>
                            <h1 className="text-7xl mb-4 font-medium text-gray-900">GET 25% OFF YOUR FIRST ORDER ONLINE</h1>
                            <div className="flex w-full md:justify-start justify-center items-end">
                                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                    <input type="text" placeholder="Enak!" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg lg:text-lg md:text-sm sm:text-sm">GET COUPON</button>
                            </div>
                            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                        </div>
                        <div className="lg:h-screen lg:w-1/2 md:w-1/2 w-full inline-flex lg:justify-end md:justify-end sm:justify-center pl-14 lg:pl-0 md:pl-0 sm:pl-14">
                            <div className="bg-gray-300 w-3/4 h-3/4 hidden justify-end lg:flex md:hidden sm:hidden">
                                <img className="rounded w-3/4 h-5/6" alt="hero" src="https://dummyimage.com/250x250" />
                            </div>
                            <img className="rounded lg:hidden md:block sm:block" alt="hero" src="https://dummyimage.com/320x500" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
