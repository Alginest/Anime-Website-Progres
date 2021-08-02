import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import '../css/sidebar.css'
import personUno from '../Images/person-1.jpg'
import { FaWindowClose } from 'react-icons/fa'
import { animeGenre } from '../data'
const Sidebar = () => {
  const { toggleSidebar, sidebar } = useGlobalContext()
  const displayBorder = (e) => {
    const target = e.target
    const className = e.target.classList.contains('active')
    console.log(className)
    if (target) {
      target.classList.add('active')
    }
    if (target && className) {
      target.classList.remove('active')
    }
  }
  return (
    <section className={sidebar ? 'sidebar active' : 'sidebar'}>
      <div className='clip-it'>
        <span onClick={toggleSidebar}>
          <FaWindowClose className='close-side' />
        </span>
        <div className='sidebar-profile'>
          <img src={personUno} alt='discord anime' />
          <h3>Razor_67</h3>
          <p>New York,USA</p>
        </div>
        <div className='underline'></div>
        <div className='sidebar-ratio'>
          <div className='sidebar-ratio-numbers'>
            <h1>892</h1>
            <p>Posts</p>
          </div>
          <div className='sidebar-ratio-numbers'>
            <h1>22.5k</h1>
            <p>Followers</p>
          </div>
          <div className='sidebar-ratio-numbers'>
            <h1>150</h1>
            <p>Following</p>
          </div>
        </div>
        <div className='underline'></div>
        <div className='sidebar-buttons'>
          <Link to='' className='btn-side active' onClick={displayBorder}>
            Action
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Relife
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Shounen
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Slice of Life
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Yaoi
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Romance
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Fantasy
          </Link>
          <Link to='' className='btn-side' onClick={displayBorder}>
            Miku
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
