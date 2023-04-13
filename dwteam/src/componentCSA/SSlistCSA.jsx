import React from 'react'
import NinGameDB from './NinGameDB.json'
import { useEffect, useState } from 'react'
import Slider from "react-slick";

const SSlistCSA = ({gameName}) => {
  const [nintendoTitle, setNintendoTitle] = useState([]);

  useEffect(()=>{
    setNintendoTitle(NinGameDB, nintendoTitle)
  },[]);


  const SSLIST = [
    
  ]
  // [
  //   // {
  //   //   img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb01.jpg"
  //   // },
  //   // {
  //   //   // img: './zeldaSS/zeldaSS2.jpg'
  //   //   img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb02.jpg"
  //   // },
  //   // {
  //   //   img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb03.jpg"
  //   // },
  //   // {
  //   //   img: "https://www.nintendo.co.kr/images/renew/software/switch/aaaaa/img_switch_aaaaa_large_thumb05.jpg"
  //   // }
  // ]
  

  const [viewModal, setviewModal] = useState(false);
  const SSModal = () => {
    setviewModal(true);
  }
  const closeSSModal = () => {
    setviewModal(false);
  }

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  return (
    <div className='nin-Sshot'>
      {
        SSLIST.map(function(a, i){
          return(
            <div className='nin-sw-Sshot' key={i}>
              {/* <h1>클릭시 스크린샷 모달 생성</h1> */}
              <Slider {...settings}>
                <img src={a.img} onClick={SSModal} alt="zelda-screenshot" />
              </Slider>
            </div>  
          )
        })
      }
      {/* <button id='SS-btn-l'>좌</button>
      <button id='SS-btn-r'>우</button> */}
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
          {/* <button id='SS-btn-l'>좌</button>
          <button id='SS-btn-r'>우</button> */}
        </div> 
      : null }
    </div>
  )
}

export default SSlistCSA
