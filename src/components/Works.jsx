import React, { useState } from 'react'
import Separator from './Separator'
import Work from './Work'

export default function Works() {
    return (
        <section className='relative flex flex-col items-center' id='works-section'>
            <Separator></Separator>
            <Work
                img1={'in-universe'}
                img2={'in-universe-body'}
                img3={'in-universe-footer'}
                img4={'in-universe-about'}
                title={'In-Universe'}
                description={'In-universe es una aplicacion de posteos sobre el universo, con un diseño simple con colores relacionados con el tema de la aplicacion. Desarrollado con React y Tailwind. La misma aun se encuentra en desarrollo, buscando dar mas interactividad a los usuarios'}
                prop={'Ver proyecto.'}
                link={"https://inuniverse.com.ar"}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/post-app"}
            ></Work>
            <Work
                img1={"NailStore-home"}
                img2={"NailStore-login"}
                img3={"NailStore-shop"}
                img4={"NailStore-product"}
                title={'Nailstore'}
                description={'Un e-commerce de productos de manicura. El front-end de la aplicacion fue desarrollado con HTML, CSS and JavaScript usando practicas de sitios responsive para todos los dipositivos. El back-end fue desarrollado en JavaScript con Express y Node.js, siguiendo practicas MVC. La base de datos fue diseñada con MySql, ensamblada y organizada usando Sequelize.'}
                prop={'Ver Demo.'}
                link={""}
                prop2={'Ver codigo.'}
                link2={"https://github.com/SebastianRamos01/E-commerceNailStore"}
            ></Work>
            <Work
                img1={"Captura de pantalla 2023-07-05 224711"}
                img2={"Mercado-Liebre-2"}
                img3={"Mercado-Liebre-3"}
                img4={"Mercado-Liebre-4"}
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
