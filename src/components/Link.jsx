import React from 'react'

export default function Link({prop, link}) {
  return (
    <div className='font-bebas underline text-lg'>
        <a href={link}>
            {prop}    
        </a>
    </div>
  )
}
