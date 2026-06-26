// PasswordMode.jsx

import React, { useState } from 'react'

export default function PasswordMode() {

  let [show, setshow] = useState(false);

  return (
    <div>
      <h2>비밀번호 보이기 / 안보이기 예제</h2>
      <h3>{show ? "보기" : "숨기기"}</h3>
      <input type={show ? "test" : "password"} />
      <button onClick={()=>{
        setshow(!show);
      }}>비밀번호</button>
    </div>
  )
}
