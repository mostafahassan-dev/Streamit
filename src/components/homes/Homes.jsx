import React, { useState } from 'react'
import Home from './Home'
import { homeData } from '../../dummyData'
import './homes.css'

export default function Homes() {
  const [items, setItems] = useState(homeData)
  

  return (
    <>
      
      <section className='home'>
        <Home items={items}/>
      </section>
    
    </>
  )
}
