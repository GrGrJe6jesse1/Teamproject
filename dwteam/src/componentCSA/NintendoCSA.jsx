import React from 'react'
import './NintendoCSA.css'
import NInTitleCSA from './NInTitleCSA'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const NintendoCSA = () => {
  const [productList, setProductList] = useState(null);

  // const getProducts = async () => {
  //   let url = "http://localhost:5000/nintendoTitle"
  //   let reponse = await fetch(url);
  //   let data = await reponse.json();
  //   console.log(data);

  //   setProductList(data)
  // }

  // useEffect(()=> {
  //   getProducts()
  // }, []);


  useEffect(() => {
    fetch("http://localhost:5000/nintendoTitle")
      .then(reponse => {
        return reponse.json();
      })
      .then(data => {
        setProductList(data);
      });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  

  return (
    <Container className='nin-wrapper'>
      <Row className="nin-wi">
        {/* 웰컴이미지 - 몇가지 소프트타이틀 이미지 편집해서 생성 */}
        {/* 디자인 수정 웰컴이미지 정가운데 로고를 중심으로 독점타이틀 캐릭터들 바깥에서 */}
        {/* 축소이미지 페이드아웃 애니메이션 효과 */}
        {/* 클릭시 각 시리즈 모달 발생 */}
        {/* 모달 내용물 DB로 작성하여 API 생성 */}

        {/* 메트로이드 */}
        <Col className='WELCOME-SAMUS' onClick={openModal}></Col>
        {/* 기타독점타이틀 */}
        <Col className='WELCOME-SSBU' onClick={openModal}></Col>
        {/* 젤다 */}
        <Col className='WELCOME-Link' onClick={openModal}></Col>
        {/* 마리오 */}
        <Col className='WELCOME-MARIO' onClick={openModal}></Col>
        {/* 파이어엠블렘 */}
        <Col className='WELCOME-Alear' onClick={openModal}></Col>
        {/* 스플래툰 */}
        <Col className='WELCOME-Inkling' onClick={openModal}></Col>
        {/* 로고 */}
        <Col className='WELCOME-Logo'></Col>
        {/* 커비 */}
        <Col className='WELCOME-Kirby' onClick={openModal}></Col>
        {/* 동숲 */}
        <Col className='WELCOME-villager' onClick={openModal}></Col>
        {/* 포켓몬 */}
        <Col className='WELCOME-pikachu' onClick={openModal}></Col>

        {/* 모달 */}
        {
          showModal == true ? 
          <div className='modalback' onClick={closeModal}>
            {productList.map((menu, i) => {
              return (
                <Col className='nin-modal' onClick={e => e.stopPropagation()} key={i}>
                  {productList && <NInTitleCSA menu={menu}/>}
                  <button id='btn-left'>좌</button>
                  <button id='btn-right'>우</button>
                </Col>
              )
            })}
          </div> : null
        }
      </Row>
    </Container>
  )
}

export default NintendoCSA
