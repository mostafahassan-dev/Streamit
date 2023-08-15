import React, { useState } from 'react'
import Home from '../homes/Home'
import './Trending.css'

function Trending({items}) {
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
    
  )
}

export default Trending