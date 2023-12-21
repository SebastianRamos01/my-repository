import React, { useState } from 'react'
import Work from './Work'

export default function Works() {
    return (
        <section className='flex flex-col font-play' id='works-section'>
            <div className='text-[30px] md:text-[35px] mx-10'>
                My Works
            </div>
            <Work
                img={'in-universe'}
                title={'In-Universe'}
                description={'In-universe es una aplicacion de posteos sobre el universo, con un diseño simple con colores relacionados con el tema de la aplicacion. Desarrollado con React y Tailwind. La misma aun se encuentra en desarrollo, buscando dar mas interactividad a los usuarios'}
                prop={'Ver proyecto.'}
                link={"https://inuniverse.com.ar"}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/post-app"}
            ></Work>
            <Work
                img={"stage-door"}
                title={'Stage-Door'}
                description={'Landing-page desarrollada con Next.js, TypeScript y Css.'}
                prop={'Ver Demo.'}
                link={"https://proyecto-mercado-liebre-ypc4.onrender.com"}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/stage-door"}
            ></Work>
            <Work
                img={"in-universe-dashboard"}
                title={'Mercado Liebre'}
                description={'Dashboard de Administracion de In-universe para subir, editar y eliminar Posteos. Desarrollado con react y tailwind.css'}
                prop={'Ver Demo.'}
                link={""}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/post-dashboard"}
            ></Work>
            <Work
                img={"NailStore-home"}
                title={'Nailstore'}
                description={'Un e-commerce de productos de manicura. El front-end de la aplicacion fue desarrollado con HTML, CSS and JavaScript usando practicas de sitios responsive para todos los dipositivos. El back-end fue desarrollado en JavaScript con Express y Node.js, siguiendo practicas MVC. La base de datos fue diseñada con MySql, ensamblada y organizada usando Sequelize.'}
                prop={'Ver Demo.'}
                link={""}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/E-commerceNailStore"}
            ></Work>
            <Work
                img={"Captura de pantalla 2023-07-05 224711"}
                title={'Mercado Liebre'}
                description={'Un clon front-end de mercado libre. Desarrollado con HTML5, CSS y usando JavaScript para funcionalidades.'}
                prop={'Ver Demo.'}
                link={"https://proyecto-mercado-liebre-ypc4.onrender.com"}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre"}
            ></Work>
        </section>
    )
}
