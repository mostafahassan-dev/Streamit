import React, { useState } from 'react'
import Home from '../homes/Home'
import { trending } from '../../dummyData'
import './Trending.css'

function Trending() {
  const [items, setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        <Home items={items} />
      </section>
    </>
  )
}

export default Trending