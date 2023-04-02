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
  // useEffect(() => {
  //   axios.get('http://localhost:3000/products')
  //     .then(response => {
  //       console.log(response);
  //     })
  // })

  return (
    <Container className='nin-wrapper'>
      {/* 임시 */}
      <img src={WIEXE} alt="WELCOME" />

      <Row className="nin-wi">
        {/* 웰컴이미지 - 몇가지 소프트타이틀 이미지 편집해서 생성 */}
        {/* 디자인 수정 웰컴이미지 정가운데 로고를 중심으로 독점타이틀 캐릭터들 바깥에서 */}
        {/* 안쪽으로 들어오는 애니메이션 효과 */}
        {/* 클릭시 각 시리즈 소개 화면으로 */}
        {/* 메트로이드 */}
        <img className='WELCOME-SAMUS' src={SAMUS} alt="SAMUS" />
        {/* 기타독점타이틀 */}
        <img className='WELCOME-SSBU' src={SSBU} alt="SSBU" />
        {/* 젤다 */}
        <img className='WELCOME-Link' src={Link} alt="Link" />
        {/* 마리오 */}
        <img className='WELCOME-MARIO' src={MARIO} alt="MARIO" />
        {/* 파이어엠블렘 */}
        <img className='WELCOME-Alear' src={Alear} alt="Alear" />
        {/* 스플래툰 */}
        <img className='WELCOME-Inkling' src={Inkling} alt="Inkling" />
        {/* 로고 */}
        <img className='WELCOME-Logo' src={WILOGO} alt="LOGO-NIN" />
        {/* 커비 */}
        <img className='WELCOME-Kirby' src={Kirby} alt="Kirby" />
        {/* 동숲 */}
        <img className='WELCOME-villager' src={villager} alt="villager" />
        {/* 포켓몬 */}
        <img className='WELCOME-pikachu' src={pikachu} alt="pikachu" />
        {/* <Col className='nin-modal'>
          <NInTitleCSA/>
        </Col> */}
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
      {/* 항목 박스 클릭시 모달 발생 */}
      {/* 디자인 수정으로 보류 */}
      {/* 모달에 DB */}
      {/* <div className="nin-modal">
        <img className='modal-img1' src="" alt="" />
        <img className='modal-img2' src="" alt="" />
        <img className='modal-img3' src="" alt="" />
        <h2>게임 특징설명</h2>
        <p>간단 소개문</p>
      </div> */}
    </Container>
  )
}

export default NintendoCSA
