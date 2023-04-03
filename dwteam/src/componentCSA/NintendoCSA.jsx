import React from 'react'
import './NintendoCSA.css'
import NInTitleCSA from './NInTitleCSA'
import { useEffect, useState } from 'react'
import WIEXE from './welcome-exe.gif'
import SAMUS from './WI-Samus-.png'
import SSBU from './WI-SSBU.webp'
import Link from './WI-Link.webp'
import MARIO from './WI-MARIO.webp'
import Alear from './WI-Alear-.png'
import Inkling from './WI-Inkling-.png'
import Kirby from './WI-Kirby.png'
import WILOGO from './logo_nin.gif'
import villager from './WI-villager.png'
import pikachu from './WI-pikachu-.png'
import { Container, Row, Col } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import axios from 'axios';


const NintendoCSA = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  // useEffect(() => {
  //   axios.get('http://localhost:3000/products')
  //     .then(response => {
  //       console.log(response);
  //     })
  // })

  return (
    <Container className='nin-wrapper'>
      {/* 임시 */}
      {/* <img src={WIEXE} alt="WELCOME" />  */}

      <Row className="nin-wi">
        {/* 웰컴이미지 - 몇가지 소프트타이틀 이미지 편집해서 생성 */}
        {/* 디자인 수정 웰컴이미지 정가운데 로고를 중심으로 독점타이틀 캐릭터들 바깥에서 */}
        {/* 축소이미지 페이드아웃 애니메이션 효과 */}
        {/* 클릭시 각 시리즈 모달 발생 */}
        {/* 모달 내용물 DB로 작성하여 API 생성 */}

        {/* 메트로이드 */}
        <img className='WELCOME-SAMUS' onClick={openModal} src={SAMUS} alt="SAMUS" />
        {/* 기타독점타이틀 */}
        <img className='WELCOME-SSBU' onClick={openModal} src={SSBU} alt="SSBU" />
        {/* 젤다 */}
        <img className='WELCOME-Link' onClick={openModal} src={Link} alt="Link" />
        {/* 마리오 */}
        <img className='WELCOME-MARIO' onClick={openModal} src={MARIO} alt="MARIO" />
        {/* 파이어엠블렘 */}
        <img className='WELCOME-Alear' onClick={openModal} src={Alear} alt="Alear" />
        {/* 스플래툰 */}
        <img className='WELCOME-Inkling' onClick={openModal} src={Inkling} alt="Inkling" />
        {/* 로고 */}
        <img className='WELCOME-Logo' src={WILOGO} alt="LOGO-NIN" />
        {/* 커비 */}
        <img className='WELCOME-Kirby' onClick={openModal} src={Kirby} alt="Kirby" />
        {/* 동숲 */}
        <img className='WELCOME-villager' onClick={openModal} src={villager} alt="villager" />
        {/* 포켓몬 */}
        <img className='WELCOME-pikachu' onClick={openModal} src={pikachu} alt="pikachu" />

        {/* 모달 */}
        {
          showModal == true ? 
          <Col className='modalback' onClick={closeModal}>
            <div className='nin-modal' onClick={e => e.stopPropagation()}>
              <NInTitleCSA/>
            </div>
          </Col> : null
        }
        
      </Row>
      {
        // DB로 돌릴 예정
        // 수정/ map함수로 모달또는 페이지 생성 DB 불러오기
        // [1,2,3,4,5,6,7,8].map((num) =>{
        //   return (
        //     <div className="nin-sw-item">
        //       <img src="https://www.nintendo.co.kr/front_images/news/1241/4a54c9f3888fa612cd0dacfcab000c97.jpg" alt="zelda" />
        //       <h2>Titie</h2>
        //     </div>
        //   )         
        // })
      }
    </Container>
  )
}

export default NintendoCSA
