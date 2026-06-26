// UseStateTest2.jsx

import React, { useState } from 'react'

export default function UseStateTest2() {

  let [아이디, set아이디] = useState("");
  let [비밀번호, set비밀번호] = useState("");

  let [숫자, set숫자] = useState(0);

  let [이미지, set이미지] = useState(1);

  return (
    <div>
      <h2>버튼을 클릭하면 이미지가 변경되게 실습</h2>
      <img src={`/project${이미지}.webp`} alt="" onClick={()=>{
        set이미지(이미지 + 1);
      }}/>

      <br />
      <hr />
      <br />

      <h2>버튼 클릭 시 1씩 증가</h2>
      <button onClick={()=>{
        set숫자(숫자 + 1);
      }}>1씩 증가</button>
      <h3>변경된 숫자 : {숫자}</h3>

      <br />
      <hr />
      <br />

      <h2>아이디를 입력하세요</h2>
      <input type="text" onChange={(이벤트)=>{
        set아이디(이벤트.target.value);
      }}/>
      <h2>비밀번호를 입력하세요</h2>
      <input type="text" onChange={(이벤트)=>{
        set비밀번호(이벤트.target.value);
      }}/>
      <h3>입력한 값 : {아이디}</h3>
      <h3>입력한 비밀번호 : {비밀번호}</h3>
    </div>
  )
}
