import React from 'react'
import Img from '../../assets/img/profil.png'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const About = () => {
    return (
        <section id="aboutme" className="ml-5">
            <div className="md:grid md:grid-cols-2 my-10">
                <div className="mx-auto">
                    <img src={Img} className="w-92.25" alt="" />
                </div>
                <div className="">
                    <p className="text-[#8B8858] text-lg font-bold mt-3 md:mt-0">ABOUT ME</p>
                    <h1 className="font-semibold text-3xl my-3 leading-normal">Introduction About Me <span
                        className="inline-block" /> Before Getting To
                        Know My Experience
                    </h1>
                    <p className="text-[#254336] font-reguler text-lg">I am interested in Design, Website Development.
                        Has internship experience at a Web Developer Company, and participated in student
                        activity organizations.
                    </p>
                    <div className="flex">
                        <a href="assets/file/resume.pdf" download="Resume - Farizah Farhana.pdf">
                            <button type="button"
                                className="text-white bg-[#254336] hover:underline font-medium rounded-lg text-md px-4 py-2 text-center mt-7">Download
                                CV</button>
                        </a>
                        <div className="flex gap-6 grid-cols-3 ml-20 mt-8">
                            <a href="https://www.instagram.com/farizarhn/" target="_blank">
                                <FaInstagram
                                    size={24}  // ukuran pixel
                                    className="relative text-[#254336]/60 hover:text-[#254336]"
                                />
                            </a>
                            <a href="https://github.com/farizahh" target="_blank">
                                <FaGithub
                                    size={24}  // ukuran pixel
                                    className="relative text-[#254336]/60 hover:text-[#254336]"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/farizarhn/" target="_blank">
                                <FaLinkedinIn
                                    size={24}  // ukuran pixel
                                    className="relative text-[#254336]/60 hover:text-[#254336]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
