// DarkMode.jsx

import React, { useState } from 'react'

export default function DarkMode() {

  let [dark, setdark] = useState(false);
  console.log("현재 값 :", dark);

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <h2>웹페이지</h2>
      <p>다크모드 또는 라이트모드 전환 예제</p>
      <button onClick={()=>{
        setdark(!dark);
      }}>{dark ? "🌙" : "🌞"}</button>

      <h3>{dark ? "🌙 다크모드" : "🌞 라이트모드"}</h3>
    </div>
  )
}
