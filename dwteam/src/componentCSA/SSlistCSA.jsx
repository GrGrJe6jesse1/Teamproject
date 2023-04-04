import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const SSlistCSA = () => {
  const SSLIST = [
    {
      img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb01.jpg"
    },
    {
      // img: './zeldaSS/zeldaSS2.jpg'
      img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb02.jpg"
    },
    {
      img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb03.jpg"
    },
    {
      img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb05.jpg"
    }
  ]

  const [viewModal, setviewModal] = useState(false);
  const SSModal = () => {
    setviewModal(true);
  }
  const closeSSModal = () => {
    setviewModal(false);
  }

  return (
    <div className='nin-Sshot'>
      {
        SSLIST.map(function(a, img){
          return(
            <div className='nin-sw-Sshot' key={img}>
              {/* <h1>클릭시 스크린샷 모달 생성</h1> */}
              <img src={a.img} onClick={SSModal} alt="zelda-screenshot" />
            </div>
          )
        })
      }
      { viewModal == true ? 
        <div className='SSback' onClick={closeSSModal}></div>   
      : null }
      { viewModal == true ? 
        <div className='largeSS' onClick={e => e.stopPropagation()}>
          {SSLIST.map(function(a, img){
            return(
              <img src={a.img} key={img} alt="zelda-screenshot" />
            )
          })}
          <button id='SS-btn-l'>좌</button>
          <button id='SS-btn-r'>우</button>
        </div> 
      : null }
    </div>
  )
}

export default SSlistCSA
