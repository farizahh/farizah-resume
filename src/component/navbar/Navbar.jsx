import React from 'react'

const Navbar = () => {
    return (
        <section id="navbar" className="mx-10">
            <nav className="bg-white fixed md:relative w-full z-20 top-0 start-0 border-gray-200 my-2">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="index.html" className="flex items-center space-x-3">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Portofolio</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0">
                        <button onclick="window.location.href='mailto:farizahfarhana.work@gmail.com'"
                            className="text-white bg-[#254336] hover:underline font-medium rounded-lg text-md px-4 py-2 text-center">Contact
                            Me</button>
                        <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta">
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="index.html"
                                    className="block py-2 px-3 text-gray-700 rounded md:hover:bg-transparent hover:text-[#254336] md:p-0">Home</a>
                            </li>
                            <li>
                                <a href="#skill"
                                    className="block py-2 px-3 text-gray-700 rounded md:hover:bg-transparent hover:text-[#254336] md:p-0">Skill</a>
                            </li>
                            <li>
                                <a href="#portofolio"
                                    className="block py-2 px-3 text-gray-700 rounded md:hover:bg-transparent hover:text-[#254336] md:p-0">Portofolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
