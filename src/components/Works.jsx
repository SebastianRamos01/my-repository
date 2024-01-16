import React, { useState } from 'react'
import Work from './Work'

export default function Works() {
    return (
        <section className='flex flex-col font-play bg-gradient-to-br from-orange-100 to-pink-100 text-blue-950 py-10' id='works-section'>
            <div className='text-[30px] md:text-[35px] mx-4 md:mx-40'>
                My Works
            </div>
            <Work
                img={'in-universe'}
                title={'In-Universe'}
                description={'In-universe is a posting application about the universe, with a simple design with colors related to the theme of the application. Developed with React and Tailwind. It is still in development, seeking to give more interactivity to users.'}
                link={"https://inuniverse.com.ar"}
                link2={"https://github.com/SebastianRamos01/post-app"}
            ></Work>
            <Work
                img={"stage-door"}
                title={'Stage-Door'}
                description={'Stage-Door is a Landing-page developed with Next.js, TypeScript and CSS.'}
                link={"https://proyecto-mercado-liebre-ypc4.onrender.com"}
                link2={"https://github.com/SebastianRamos01/stage-door"}
            ></Work>
            <Work
                img={"in-universe-dashboard"}
                title={'In-universe-Dashboard'}
                description={'In-universe Administration Dashboard to upload, edit and delete Posts. Developed with react and tailwind.css'}
                link={""}
                link2={"https://github.com/SebastianRamos01/post-dashboard"}
            ></Work>
            <Work
                img={"NailStore-home"}
                title={'Nailstore'}
                description={'An e-commerce of manicure products. The front-end of the application was developed with HTML, CSS and JavaScript using responsive site practices for all devices. The back-end was developed in JavaScript with Express and Node.js, following MVC practices. The database was designed with MySql, assembled and organized using Sequelize.'}
                link={""}
                link2={"https://github.com/SebastianRamos01/E-commerceNailStore"}
            ></Work>
            <Work
                img={"Captura de pantalla 2023-07-05 224711"}
                title={'Mercado Liebre'}
                description={'A front-end clone of Mercado Libre. Developed with HTML5, CSS and using JavaScript for functionalities.'}
                link={"https://proyecto-mercado-liebre-ypc4.onrender.com"}
                link2={"https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre"}
            ></Work>
        </section>
    )
}
