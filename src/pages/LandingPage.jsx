import React from 'react'
// import Test from '../component/Test'
import Navbar from '../component/navbar/Navbar'
import Header from '../component/header/Header'
import Social from '../component/inform/Social'
import About from '../component/inform/About'
import Skill from '../component/inform/Skill'
import Latar from '../component/inform/Latar'
import Project from '../component/project/Project'
import Footer from '../component/footer/Footer'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Social />
            <About />
            <Skill />
            <Latar />
            <Project />
            <Footer />
        </>
    )
}

export default LandingPage
