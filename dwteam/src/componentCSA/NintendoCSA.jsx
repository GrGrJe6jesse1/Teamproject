import React from 'react'
import './NintendoCSA.css'
import { useState } from 'react'
import poke from './poDLC.png'


const nintendoCSA = () => {
  return (
    <section className='nin-wrapper'>
      <div className="nin-wi">
        <img className='WELCOME' src={poke} alt="WELCOME" />
      </div>
      {
        [1,2,3,4,5,6,7,8].map((num) =>{
          return (
            <div className="nin-sw-item">
              <img src="https://www.nintendo.co.kr/front_images/news/1241/4a54c9f3888fa612cd0dacfcab000c97.jpg" alt="zelda" />
              <h2>Titie</h2>
            </div>
          )         
        })
      }
      <div className="nin-modal">
        <img className='modal-img1' src="" alt="" />
        <img className='modal-img2' src="" alt="" />
        <img className='modal-img3' src="" alt="" />
        <h2>게임 특징설명</h2>
        <p></p>
      </div>
    </section>
  )
}

export default nintendoCSA
