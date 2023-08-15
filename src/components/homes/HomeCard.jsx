import React from 'react'
import { Link } from 'react-router-dom'
import play from '../../assets/play.png'
import playButton from '../../assets/play-button.png'
function HomeCard({item:{id, name, rating, time, desc, starring, genres, tags, cover,video, date}}) {

  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="cover" />
        </div>
        <div className="content flex">
          <div className='details row '>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label> 
              <span>GP</span>
              <label>{time}</label>
            </div>
            
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div className="play-btn row">
            <Link to={`singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src={playButton} alt="play" />
                  <img src={play} alt="play" className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard