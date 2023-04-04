import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const SSlistCSA = () => {
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
        [1,2,3,4,5,6].map(()=>{
          return(
            <div className='nin-sw-Sshot' onClick={SSModal}>
              {/* <h1>클릭시 스크린샷 모달 생성</h1> */}
            </div>
          )
        })
      }
      { viewModal == true ? 
        <div className='SSback' onClick={closeSSModal}></div>   
      : null }
      { viewModal == true ? 
        <div className='largeSS' onClick={e => e.stopPropagation()}></div> 
      : null }
    </div>
  )
}

export default SSlistCSA
