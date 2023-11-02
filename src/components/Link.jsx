import React from 'react'

export default function Link({prop, link}) {
  return (
    <div className='font-play text-lg border-b hover:border-r px-3 mx-1'>
        <a href={link}>
            {prop}    
        </a>
    </div>
  )
}
