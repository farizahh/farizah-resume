import React from 'react'
import { FaDesktop, FaLaptopCode, FaObjectUngroup } from "react-icons/fa6";

const Skill = () => {
    return (
        <section id="skill" className="mx-auto">
            <div className="mx-10 mt-20">
                <p className="text-[#8B8858] text-lg font-bold text-center">SKILLSET</p>
                <h1 className="font-semibold text-xl md:text-3xl my-1 text-center">
                    Creative and Professional Skills Experience
                </h1>
                <div className="grid md:grid-cols-3 gap-4 my-10">
                    <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-400 hover:bg-gray-100">
                        <div className="mr-5 bg-[#DAD3BE] p-5 rounded-full">
                            <FaDesktop size={32} className=" text-[#254336]" />
                        </div>
                        <div>
                            <h5 className="mb-2 text-xl font-semibold tracking-tight">Web Development</h5>
                            <p className="text-sm text-[#BBBBBB]">Control PHP, JavaScript, React.</p>
                        </div>
                    </div>
                    <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-400 hover:bg-gray-100">
                        <div className="mr-5 bg-[#DAD3BE] p-5 rounded-full">
                            <FaLaptopCode size={32} className="text-[#254336]" />
                        </div>

                        <div>
                            <h5 className="mb-2 text-xl font-semibold tracking-tight">Frontend Developer</h5>
                            <p className="text-sm font-reguler text-[#BBBBBB]">Use Tailwind Framework.</p>
                        </div>
                    </div>
                    <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-400 hover:bg-gray-100">
                        <div className="mr-5 bg-[#DAD3BE] p-5 rounded-full">
                            <FaObjectUngroup size={32} className=" text-[#254336]" />
                        </div>
                        <div>
                            <h5 className="mb-2 text-xl font-semibold tracking-tight">UI/UX Designer</h5>
                            <p className="text-sm font-reguler text-[#BBBBBB]">Understanding Design Thinking</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
