// SecondPage.jsx

import React from 'react'

export default function SecondPage({setpage}) {
  return (
    <div className='first-box'>
        <h2>2단계</h2>
        <p>콜라 고르기</p>
        <button onClick={()=>{
          setpage("third");
        }}>다음</button>
      </div>
  )
}
