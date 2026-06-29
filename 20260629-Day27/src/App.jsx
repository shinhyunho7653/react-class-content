// App.jsx

import React, { useState } from 'react'

export default function App() {

  let 체크박스값 = "";

  let [checked, setchecked] = useState(false);

  return (
    <div>
      <h2>체크박스를 클릭할때마다 값을 저장</h2>

      {/* label - 글씨를 클릭해도 체크가 될수 있게 묶어주는 태그 */}
      <label>
      <input type="checkbox" 
             onChange={(이벤트정보)=> {
              setchecked(이벤트정보.target.checked);
             }}/>약관에 동의합니다
      </label>

      <h3>체크한 값 확인 : {checked + ""}</h3>
    </div>
  )
}
