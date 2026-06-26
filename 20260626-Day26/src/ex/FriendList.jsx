// FriendList.jsx

import React, { useState } from 'react'

export default function FriendList() {

  let [friend, setfriend] = useState([]);

  return (
    <div>
      <h2>친구 추가하기</h2>
      <p>버튼을 클릭하면 각각 영희, 철수, 지민, 영수, 민수 추가</p>

      <button onClick={()=>{
        setfriend([...friend, "영희"]);
      }}>영희</button>

      <button onClick={()=>{
        setfriend([...friend, "철수"]);
      }}>철수</button>

      <button onClick={()=>{
        setfriend([...friend, "지민"]);
      }}>지민</button>

      <button onClick={()=>{
        setfriend([...friend, "영수"]);
      }}>영수</button>

      <button onClick={()=>{
        setfriend([...friend, "민수"]);
      }}>민수</button>

      <h3>친구목록 : {friend}</h3>
    </div>
  )
}
