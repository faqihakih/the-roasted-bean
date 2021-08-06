import React, { Component } from 'react'

export default class secondSection extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font bg-hijau">
                    <div className="container px-5 pt-24 pb-12 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">GREAT COFFEE IS WHAT WE DO BEST.</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Our coffee is from single-origin farms around the world it is roasted packed, and delivered straight to your doorstep.</p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 text-center">
                                <img alt="gallery" className="object-cover object-center mb-4" src="https://dummyimage.com/600x360"/>
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 tracking-wider">Vavene, Ethiopia</h2>
                                <p className="leading-relaxed text-lg mb-4">$ 16.50 <span className="line-through">22.00</span></p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 text-center">
                                <img alt="gallery" className="object-cover object-center mb-4" src="https://dummyimage.com/600x360"/>
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 tracking-wider">Vavene, Ethiopia</h2>
                                <p className="leading-relaxed text-lg mb-4">$ 16.50 <span className="line-through">22.00</span></p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 text-center">
                                <img alt="gallery" className="object-cover object-center mb-4" src="https://dummyimage.com/600x360"/>
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 tracking-wider">Vavene, Ethiopia</h2>
                                <p className="leading-relaxed text-lg mb-4">$ 16.50 <span className="line-through">22.00</span></p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 text-center">
                                <img alt="gallery" className="object-cover object-center mb-4" src="https://dummyimage.com/600x360"/>
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 tracking-wider">Vavene, Ethiopia</h2>
                                <p className="leading-relaxed text-lg mb-4">$ 16.50 <span className="line-through">22.00</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
