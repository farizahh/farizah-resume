import React from 'react'
import Education from '../latar/Education'
import Experience from '../latar/Experience'

const Latar = () => {
    return (
        <section id="my" class="mx-10">
            <div class="grid md:grid-cols-2">
                <Education />
                <Experience />
            </div>
        </section>
    )
}

export default Latar
