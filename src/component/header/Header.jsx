import React from 'react'
import Resume from '../../assets/file/resume.pdf'
import Img from '../../assets/img/profil.png'

const Header = () => {
    return (
        <section id="header" class="md:ml-14 ml-5">
            <div className='md:grid gap-4 md:grid-cols-2'>
                <div className='md:mt-20 mt-28'>
                    <p className="text-[#254336] md:text-lg font-medium mb-3">Welcome</p>
                    <h1 className="font-semibold text-3xl md:text-5xl text-[#254336] leading-normal">
                        Hi, I am Farizah Farhana
                        <span className="inline-block">  </span>
                        <span className="text-[#8B8858]"> Web Developer</span>
                    </h1>

                    <p className="text-[#254336] md:text-lg font-medium mt-5 leading-relaxed">
                        Being part of a coder is a fun thing, and I like it when I have
                        <span className="md:inline-block">
                            to use my logic or stay in my room to complete a part in
                        </span>
                        <span className="inline-block"> my visual studio</span>
                    </p>

                    <a href={Resume} download="Resume - Farizah Farhana.pdf">
                        <button type="button"
                            className="text-white bg-[#254336] hover:underline font-medium rounded-lg md:text-xl px-4 md:px-8 py-2 md:py-4 text-center mt-6 mb-3 md:mt-10">Download
                            CV</button>
                    </a>
                </div>
                <div className="flex justify-end md:mr-10 md:mt-1">
                    <img src={Img} className="md:w-[90%] hidden md:block" />
                </div>
            </div>

        </section>
    )
}

export default Header
