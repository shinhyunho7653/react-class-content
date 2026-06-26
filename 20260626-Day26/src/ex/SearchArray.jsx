// SearchArray.jsx

import React, { useState } from 'react'

export default function SearchArray() {

  let [search, setsearch] = useState("");

  let [history, sethistory] = useState([]);
  
  return (
    <div>
      <h2>검색 기록 저장</h2>
      <p>검색 기록은 여러개 저장해야하므로 배열을 사용한다</p>

      <input 
        type="text" 
        placeholder='검색어 입력'
        onChange={(이벤트정보)=>{
          setsearch(이벤트정보.target.value);
        }}/>

      <button onClick={()=>{
        sethistory([...history, search]);
      }}>검색</button>

      <h3>검색기록 : {history}</h3>
    </div>
  )
}
