import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ETCtitleCSA = () => {
  const [ETCmodal, setetcModal] = useState(false);
  const etcTTModal = () => {
    setetcModal(true);
  }
  const closeetcModal = () => {
    setetcModal(false);
  }

  return (
    <div className='nin-series'>
      <div className='series-title' onClick={etcTTModal}>
        {/* <p>기타독점타이틀 모달</p> */}
      </div>
      { ETCmodal == true ? 
        <div className='SSback' onClick={closeetcModal}></div>   
      : null }
      {
        ETCmodal == true ? 
        <div className='title-modal' onClick={e => e.stopPropagation()}>
          {[1,2,3,4].map(function(){
            return(
              <div className="nin-sw-item"></div>
            )
          })}
        </div> : null
      }
    </div>
  )
}

export default ETCtitleCSA
