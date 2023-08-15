import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcoming from '../components/upcoming/Upcoming'
import { latest, recommended, trending, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'

function HomePages() {
  const [Upcome, setUpcome] = useState(upcome)
  const [Latest, setItem] = useState(latest)
  const [Rec, setRec] = useState(recommended)
  const [Trend, setTrend] = useState(trending)
  return (
    <>
      <Homes />
      <Upcoming items={Upcome} title='Upcomming Movies' />
      <Upcoming items={Latest} title='Latest Movies' />
      <Trending items={Trend} />
      <Upcoming items={Rec} title='Recommended Movies' />
    </>
  )
}

export default HomePages