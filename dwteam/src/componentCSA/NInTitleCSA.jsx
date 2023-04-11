import React from 'react'
import './NInTitleCSA.css'
import ScreenshotList from './SSlistCSA'
import ETCtitleCSA from './ETCtitleCSA'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const NInTitleCSA = () => {
  const [product, setProduct] = useState(null)

  // const getProductDetail = async () => {
  //   let url = `http://localhost:5000/nintendoTitle`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data)
  //   setProduct(data)
  // }

  // useEffect(() => {
  //   getProductDetail()
  // }, [])

  useEffect(() => {
    fetch("http://localhost:5000/nintendoTitle")
      .then(reponse => {
        return reponse.json();
      })
      .then(data => {
        setProduct(data);
      });
  }, []);


  return (
    <Container className='title-container'>
      <Row className='title-back'>
        {/* 백그라운드영상 또는 이미지 */}
        <Col className='nin-game-title'>
        <img src={product?.titleLogo} style={{width: '500px'}} alt="logo" />
        <p>{product?.intro}</p>
        </Col>
        <Col className='nin-chara'>
        {/* 타이틀 캐릭터 이미지 */}
        </Col>
        {/* 겜스샷 또는 영상 3~4 컨텐츠 */}
        <ScreenshotList/>
        {/* 시리즈게임 */}
        <ETCtitleCSA/>
      </Row>
    </Container>
  )
}

export default NInTitleCSA
