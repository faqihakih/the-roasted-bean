import React, { Component } from 'react'
import FirstSection from '../Components/firstSection'
import SecondSection from '../Components/secondSection'
import ThirdSection from '../Components/thirdSection'

export default class Home extends Component {
    render() {
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <ThirdSection/>
            </div>
        )
    }
}
