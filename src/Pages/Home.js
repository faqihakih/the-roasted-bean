import React, { Component } from 'react'
import FirstSection from '../Components/firstSection'
import FourthSection from '../Components/fourthSection'
import SecondSection from '../Components/secondSection'
import ThirdSection from '../Components/thirdSection'
import Footer from '../Components/footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <ThirdSection/>
                <FourthSection />
                <Footer />
            </div>
        )
    }
}
