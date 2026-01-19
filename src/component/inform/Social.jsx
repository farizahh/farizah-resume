import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Social = () => {
    return (
        <section id="sosmed">
            <div className="w-full bg-[#DAD3BE] py-5">
                <h3 className="text-lg font-semibold text-[#254336] text-center mb-4 hidden md:block">Follow <span
                    className="text-[#8B8858]">Me</span>
                </h3>
                <div className="flex gap-16 grid-cols-3 justify-center mb-3">
                    <a href="https://www.instagram.com/farizarhn/" target="_blank">
                        <FaInstagram
                            size={32}  // ukuran pixel
                            className="relative text-[#254336]/60 hover:text-[#254336]"
                        />
                    </a>
                    <a href="https://github.com/farizahh" target="_blank">
                        <FaGithub
                            size={32}  // ukuran pixel
                            className="relative text-[#254336]/60 hover:text-[#254336]"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/farizarhn/" target="_blank">
                        <FaLinkedinIn
                            size={32}  // ukuran pixel
                            className="relative text-[#254336]/60 hover:text-[#254336]"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Social
