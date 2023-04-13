import React from 'react'
import './NInTitleCSA.css'
import NinGameDB from './NinGameDB.json'
// import ScreenshotList from './SSlistCSA'
// import ETCtitleCSA from './ETCtitleCSA'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Slider from "react-slick";

const NInTitleCSA = ({gameName}) => {
  const [nintendoTitle, setNintendoTitle] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setNintendoTitle(NinGameDB, nintendoTitle)
  },[]);

  const SSLIST = NinGameDB.nintendoTitle[gameName].SSList
  const ETCLIST = NinGameDB.nintendoTitle[gameName].ETCList

  const [viewModal, setviewModal] = useState(false);
  const SSModal = () => {
    setviewModal(true);
  }
  const closeSSModal = () => {
    setviewModal(false);
  }

  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 0,
    arrows: true,
    autoplay: false,
  });

  const [ETCmodal, setetcModal] = useState(false);
  const etcTTModal = (temp) => {
    setIndex(temp)
    setetcModal(true);
  }
  const closeetcModal = () => {
    setetcModal(false);
  }


  return (
    <Container className='title-container'>
        <Row className='title-back' style={{position: 'relative', width: '100%', height: "100%", overflow: 'hidden', borderRadius: '10px'}}>
          {/* 백그라운드 이미지 */}
          <img src={NinGameDB.nintendoTitle[gameName].back} style={{width: '100%', height: "100%"}} alt="background" />
          <Col className='nin-game-title'>
            <img src={NinGameDB.nintendoTitle[gameName].titleLogo} style={{width: '300px', animation: 'logo 1s'}} alt="logo" />
            <p className='intro'>{NinGameDB.nintendoTitle[gameName].intro}</p>
          </Col>
          <Col className='nin-chara'>
            {/* 타이틀 캐릭터 이미지 */}
          <img src={NinGameDB.nintendoTitle[gameName].chara} style={{width: '100%'}} alt="chara" />
          </Col>
          {/* 겜스샷 또는 영상 3~4 컨텐츠 */}
          {/* {nintendoTitle && <ScreenshotList nintendoTitle={nintendoTitle} gameName={index}/>} */}
          <div className='nin-Sshot'>
            {
              SSLIST.map(function(a, img){
                return(
                  <div className='nin-sw-Sshot' onClick={SSModal} key={img}>
                    {/* <h1>클릭시 스크린샷 모달 생성</h1> */}
                    <Slider {...settings}>
                      <img className='ninGameSS' src={a.img} key={img} alt="screenshot" />
                    </Slider>
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
                    <img className='LninGameSS' src={a.img} key={img} alt="zelda-screenshot" />
                  )
                })}
              </div> 
            : null }
          </div>
          {/* 시리즈게임 */}
          <div className='nin-series'>
            <div className='series-title' onClick={etcTTModal}>
            {nintendoTitle && <img src={NinGameDB.nintendoTitle[gameName].symbol} style={{width: '100%', height: "100%"}} alt="series" />}
              {/* <p>기타타이틀 모달</p> */}
            </div>
            { ETCmodal == true ? 
              <div className='SSback' onClick={closeetcModal}></div>   
            : null }
            {
              ETCmodal == true ? 
              <div className='title-modal' onClick={e => e.stopPropagation()}>
                {ETCLIST.map(function(a, img){
                  return(
                    // <div className="nin-sw-item"></div>
                    <img className="nin-sw-item" src={a.img} key={img} alt="etc" />
                  )
                })}
              </div> : null
            }
          </div>
          {/* {nintendoTitle && <ETCtitleCSA nintendoTitle={nintendoTitle} gameName={index}/>} */}
        </Row>
      
    {/* {NinGameDB.nintendoTitle.map((nintendoTitle, i)=>{
      return (
        <Row className='title-back' style={{position: 'relative', width: '100%', height: "100%", overflow: 'hidden', borderRadius: '10px'}}>
          {/* <img src={nintendoTitle.back} style={{width: '100%'}} alt="background" /> */}
          {/* {nintendoTitle.back} */}
          {/* <Col className='nin-game-title'>
            <img src={nintendoTitle.titleLogo} style={{width: '500px'}} alt="logo" />
            {nintendoTitle && <p>{nintendoTitle.intro}</p>}
          </Col>
          <Col className='nin-chara'>
          </Col>
          <ScreenshotList nintendoTitle={nintendoTitle}/>
          <ETCtitleCSA nintendoTitle={nintendoTitle}/>
        </Row>
      )
    })} */}
    </Container>
  )
}

export default NInTitleCSA
