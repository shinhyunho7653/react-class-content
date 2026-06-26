// ClassNameTest.jsx

import React, { useState } from 'react'

export default function ClassNameTest() {

  let [red, setred] = useState(false);

  return (
    <div>
      <h2>useState 이용한 css 디자인 설정하기</h2>
      <h3 className={red ? "red" : "title"}>안녕하세요</h3>
      <button onClick={()=>{
        setred(!red);
      }}>색 변경</button>
    </div>
  )
}
