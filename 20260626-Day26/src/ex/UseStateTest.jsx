// UseStateTest.jsx

import React, { useState } from 'react'

export default function UseStateTest() {

  let [숫자, set숫자] = useState(0);

  return (
    <div>
      <h2>useState?</h2>
      <p>리액트 화면에 보이는 변수</p>
      <p>고정된 값을 보여주고 싶으면 자바스크립트 변수</p>
      <p>화면이 기억하고 바뀌면서 다시 그리는 변수</p>

      <br />
      <hr />
      <br />

      <h3>실제 useState 실행 동작</h3>
      <p>현재숫자 : {숫자}</p>
      <p><button onClick={()=>{
        set숫자(숫자 + 1);
      }}>버튼</button></p>
    </div>
  )
}
