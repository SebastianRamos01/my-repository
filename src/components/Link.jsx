import React from 'react'

export default function Link({prop, link}) {
  return (
    <div className='font-play text-sm md:text-lg border-b hover:border-r px-2 mx-1'>
        <a href={link}>
            {prop}    
        </a>
    </div>
  )
}
