import React from 'react'

export default function Link({prop, link}) {
  return (
    <div className='font-play text-sm md:text-lg px-2 mx-1'>
        <a href={link}>
            {prop}    
        </a>
    </div>
  )
}
