// FirstPage.jsx

import React from 'react'

export default function FirstPage({setpage}) {
  return (
    <div className='first-box'>
        <h2>1단계</h2>
        <p>햄버거 고르기</p>
        <button onClick={()=>{
          setpage("second");
        }}>다음</button>
      </div>
  )
}
