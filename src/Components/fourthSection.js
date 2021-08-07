import React, { Component } from 'react'

export default class fourthSection extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font">
                    <div className="flex lg:flex-row flex-col">
                        <div className="w-full lg:w-1/3 md:w-full sm:w-full p-10 lg:p-0">
                            <img className="w-full" alt="hero" src="https://dummyimage.com/700x900" />
                        </div>
                        <div className="w-full lg:w-2/3 md:w-full sm:w-full pt-20 pb-7 sm:pb-7 md:pb-7 lg:pb-0 px-4">
                            <div className="lg:pl-36 lg:pr-64 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <p className="mb-4 leading-relaxed text-3xl">Don't Fall Asleep, Get it Today!</p>
                                <h1 className="text-6xl mb-4 font-medium text-gray-900">GET 25% OFF YOUR FIRST ORDER AND SEIZE THE DAY</h1>
                                <p className="text-sm mt-2 text-gray-500 w-full">Neutra shabby chic ramps, viral fixie happy.</p>
                                <p className="text-sm text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                                <div className="flex w-full md:justify-start justify-center items-end">
                                    <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                        <input type="text" placeholder="Enak!" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-gray-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg lg:text-lg md:text-sm sm:text-sm">GET COUPON</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
