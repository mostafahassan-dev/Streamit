import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcoming from '../components/upcoming/Upcoming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'

function HomePages() {
  const [Upcome, setItems] = useState(upcome)
  const [Latest, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcoming items={Upcome} title='Upcomming Movies' />
      <Upcoming items={Latest} title='Latest Movies' />
      {/* <Trending /> */}
      <Upcoming items={rec} title='Recommended Movies' />
    </>
  )
}

export default HomePages