// Hobbies.jsx

import React, { useState } from 'react'

export default function hobbies() {

  // 각각 저장
  let [soccer, setsoccer] = useState(false);
  let [baseball, setbaseball] = useState(false);
  let [jokgu, setjokgu] = useState(false);
  let [basketball, setbasketball] = useState(false);

  // 한번에 저장
  let [hobbies, sethobbies] = useState([]);

  return (
    <div>
      <h2>취미 선택</h2>

      <label>
        <input type="checkbox" onChange={(이벤트정보)=>{
          setsoccer(이벤트정보.target.checked);
        }}/>축구
      </label>

      <label>
        <input type="checkbox" onChange={(이벤트정보)=>{
          setbaseball(이벤트정보.target.checked);
        }}/>야구
      </label>

      <label>
        <input type="checkbox" onChange={(이벤트정보)=>{
          setjokgu(이벤트정보.target.checked);
        }}/>족구
      </label>

      <label>
        <input type="checkbox" onChange={(이벤트정보)=>{
          setbasketball(이벤트정보.target.checked);
        }}/>농구
      </label>

      <br /><br />

      <h3>선택한 취미</h3>
      <p>{String(soccer)}</p>
      <p>{String(baseball)}</p>
      <p>{String(jokgu)}</p>
      <p>{String(basketball)}</p>

      <br />

      <h3>선택한 취미</h3>
      <p>ture이면 태그를 보여줌</p>
      {soccer && <p>축구</p>}
      {baseball && <p>야구</p>}
      {jokgu && <p>족구</p>}
      {basketball && <p>농구</p>}
    </div>
  )
}
