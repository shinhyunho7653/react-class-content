// GameCharList.jsx

import React, { useState } from 'react'

export default function GameCharList() {

  let [char, setchar] = useState([]);
  let [price, setprice] = useState(0);
  
  return (
    <div>
      <h2>귀여운 캐릭터 저장하기</h2>

      <div className='list'>
        <div className='card'>
          <img 
            src="/짱구.jpg" 
            alt="" 
            onClick={()=>{
              setchar([...char, "짱구 - 1000원", <br/>]);
              setprice(price + 1000);
            }}/>
          <h3>짱구</h3>
          <p>1000원</p>
        </div>

        <div className='card'>
          <img 
            src="/맹구.jpg" 
            alt="" 
            onClick={()=>{
              setchar([...char, "맹구 - 2000원", <br/>]);
              setprice(price + 2000);
            }}/>
          <h3>맹구</h3>
          <p>2000원</p>
        </div>

        <div className='card'>
          <img 
            src="/훈이.jpg" 
            alt="" 
            onClick={()=>{
              setchar([...char, "훈이 - 3000원", <br/>]);
              setprice(price + 3000);
            }}/>
          <h3>훈이</h3>
          <p>3000원</p>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <h2>선택한 캐릭터</h2>
      <br />
      <p>{char}</p>

      <br />
      <hr />
      <br />

      <h2>총 구매액 : {price} 원</h2>
    </div>
  )
}
