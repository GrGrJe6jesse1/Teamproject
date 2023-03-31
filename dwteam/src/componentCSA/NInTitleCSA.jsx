import React from 'react'
import './NInTitleCSA.css'
import zeldalogo from './zelda_logo.webp'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NInTitleCSA = () => {
  return (
    <Container className='title-container'>
      <Row className='title-back'>
        {/* 백그라운드영상 또는 이미지 */}
        <Col className='nin-game-title'>
        <img src={zeldalogo} style={{width: '500px'}} alt="logo" />
        <p>소개글</p>
        </Col>
        <Col className='nin-chara'>
        {/* 타이틀 캐릭터 이미지 */}
        </Col>
        <Col className='nin-Sshot'>
        {/* 겜스샷 또는 영상 3~4 컨텐츠 */}
          {[1,2,3,4,4,5,6].map(function(){
            return(
              <div className="nin-sw-Sshot"></div>
            )
          })}
        </Col>
        <Col className='nin-series'>
        {/* 시리즈게임 */}
          {[1,2,3,4].map(function(){
              return(
                <div className="nin-sw-item"></div>
              )
            })}
        </Col>
      </Row>
    </Container>
  )
}

export default NInTitleCSA
