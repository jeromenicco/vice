import React from 'react'
import { radioList } from '../data'
import { Link } from 'react-router-dom'
import './RadioMenu.css'

function RadioMenu({ visible }) {

  return (
    <div className='menu-container'>
      <ul
        className={
          visible
          ? 'menu-items-visible'
          : 'menu-items-hidden'
        }
      >
        
        {
          radioList.map((item, index) => 
            <li key={index}>
              <Link to={item.path} >
                <p className='menu-items'>{item.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default RadioMenu