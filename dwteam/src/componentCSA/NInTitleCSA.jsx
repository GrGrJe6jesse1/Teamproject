import React from 'react'
import './NInTitleCSA.css'
import NinGameDB from './NinGameDB.json'
import ScreenshotList from './SSlistCSA'
import ETCtitleCSA from './ETCtitleCSA'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const NInTitleCSA = () => {
  const [nintendoTitle, setNintendoTitle] = useState([]);

  useEffect(()=>{
    setNintendoTitle(NinGameDB, nintendoTitle)
  },[]);


  return (
    <Container className='title-container'>
      {NinGameDB.nintendoTitle.map((nintendoTitle, i)=>{
        return (
          <Row className='title-back' style={{position: 'relative', width: '100%', height: "100%", overflow: 'hidden', borderRadius: '10px'}}>
            {/* 백그라운드영상 또는 이미지 */}
            <img src={nintendoTitle.back} style={{width: '100%'}} alt="background" />
            {/* {nintendoTitle.back} */}
            <Col className='nin-game-title'>
              <img src={nintendoTitle.titleLogo} style={{width: '500px'}} alt="logo" />
              {nintendoTitle && <p>{nintendoTitle.intro}</p>}
            </Col>
            <Col className='nin-chara'>
              {/* 타이틀 캐릭터 이미지 */}
            </Col>
            {/* 겜스샷 또는 영상 3~4 컨텐츠 */}
            <ScreenshotList nintendoTitle={nintendoTitle}/>
            {/* 시리즈게임 */}
            <ETCtitleCSA nintendoTitle={nintendoTitle}/>
          </Row>
        )
      })}
      {/* <Row className='title-back'> */}
        {/* 백그라운드영상 또는 이미지 */}
        {/* <Col className='nin-game-title'>
          <img src={nintendoTitle.titleLogo} style={{width: '500px'}} alt="logo" />
          <p>{nintendoTitle.intro}</p>
        </Col> */}
        {/* <Col className='nin-chara'>
        타이틀 캐릭터 이미지
        </Col> */}
        {/* 겜스샷 또는 영상 3~4 컨텐츠 */}
        {/* <ScreenshotList/> */}
        {/* 시리즈게임 */}
        {/* <ETCtitleCSA/> */}
      {/* </Row> */}
    </Container>
  )
}

export default NInTitleCSA
