import React from 'react'
import { projects } from '../../data/project'

const Project = () => {
    return (
        <section id="portofolio" className="mx-10 mt-10">
            <p className="text-[#8B8858] text-lg font-bold text-center">PORTOFOLIO</p>
            <h1 className="font-semibold text-2xl md:text-3xl my-1 text-center">
                Some of My Recent Work
            </h1>

            <div className="grid md:grid-cols-3 gap-4 my-10">
                {projects.map((project, idx) => (
                    <div key={idx} className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img className="rounded-t-2xl p-3" src={project.image} alt={project.title} />
                        </a>
                        <div className="p-5">
                            <div className="grid grid-cols-3 gap-1">
                                {project.tags.map((tag, i) => (
                                    <p key={i} className="bg-yellow-300 p-1 rounded-full text-xs text-center">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
                                    {project.title}
                                </h5>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project
