import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <section id="footer">
            <div className="w-full overflow-x-hidden bg-[#254336] py-5 mt-10">
                <p className="text-[#B7B597] text-lg font-bold text-center">CONTACT ME</p>
                <h1 className="text-[#B7B597] font-semibold text-xl md:text-3xl my-1 text-center">
                    Let's Talk With Me
                </h1>
                {/* <kbd 
                className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                    get a quote
                    </kbd> */}
                <hr className=" w-[80%] h-px mx-auto my-5 bg-[#b7b597] border-0 rounded" />
                <div className="flex gap-4 md:gap-6 grid-cols-3 w-[80%] mx-auto">
                    <a href="https://www.instagram.com/farizarhn/" target="_blank">
                        <FaInstagram
                            size={32}  // ukuran pixel
                            className="relative text-[#b7b597] hover:text-[#254336]"
                        />
                    </a>
                    <a href="https://github.com/farizahh" target="_blank">
                        <FaGithub
                            size={32}  // ukuran pixel
                            className="relative text-[#b7b597] hover:text-[#254336]"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/farizarhn/" target="_blank">
                        <FaLinkedinIn
                            size={32}  // ukuran pixel
                            className="relative text-[#b7b597] hover:text-[#254336]"
                        />
                    </a>
                    <p className="text-[#b7b597] md:text-lg font-medium ml-auto">© Farizah Farhana - Portofolio</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
