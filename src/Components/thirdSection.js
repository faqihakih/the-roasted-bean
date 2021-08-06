import React, { Component } from 'react'

export default class thirdSection extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font">
                    <div className="pb-24 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="lg:w-1/2 w-full">
                                <div className="h-full">
                                    <div className="bg-gray-300 w-72 h-96 hidden px-24 justify-start lg:flex md:hidden sm:hidden">
                                        <h1 className="sm:text-4xl text-2xl font-medium title-font pt-24 text-gray-900 absolute">SUSTAINABLE AND</h1>
                                        <h1 className="sm:text-4xl text-2xl font-medium title-font pt-36 text-gray-900 absolute">ETHICAL COFFEE</h1>
                                        <h1 className="sm:text-4xl text-2xl font-medium title-font pt-48 text-gray-900 absolute">PRODUCTION</h1>
                                    </div>
                                    <h1 className="sm:text-4xl mx-auto lg:text-left text-center text-2xl font-medium title-font mb-4 text-gray-900 px-20 py-8 block lg:hidden md:block sm:block">SUSTAINABLE AND ETHICAL COFFEE PRODUCTION</h1>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2 w-full">
                                <div className="h-full p-8 rounded">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
