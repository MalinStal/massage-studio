import React from 'react'
import massageStudio1 from '../pictures/Massage-Studio---Entry-Dawn-Landscape.jpg'
import massageRoom from '../pictures/massage-rum.jpg';
import massageStudio2 from '../pictures/Massage-Studio---Front-Desk-One-Point.jpg'
import massageRoom2 from '../pictures/Namnlös.jpg'
import massageStudio3 from '../pictures/Massage-Studio---Welcome-Scene-Angle.jpg'
import yoga1 from '../pictures/soluna-studio.webp'
import style from './slideshow.css'


export function Slideshow() {

  return (
    <div className='slider'>
      <img className='slider-img'src={massageStudio1}/>
      <img className='slider-img'src={massageStudio2}/>
      <img className='slider-img' src={massageStudio3}/>
      <img className='slider-img' src={massageRoom}/>
      <img className='slider-img' src={massageRoom2}/>
      <img className='slider-img' src={yoga1}/>
    </div>
  )
}
