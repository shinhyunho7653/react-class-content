// AdminPage.jsx

import React, { useState } from 'react'

export default function AdminPage() {

  let [이름, set이름] = useState("");
  let [전화번호, set전화번호]= useState("");
  let [주소, set주소]= useState("");

  return (
    <div className='user-group max-container'>
      <h2>관리자 페이지</h2>
      <hr />
      <h3>고객 정보 추가</h3>
      
      <input type="text"
             placeholder='이름 입력'
             onChange={(이벤트)=>{
              set이름(이벤트.target.value);
             }}/><br />
      <input type="text"
             placeholder='전화번호 입력'
             onChange={(이벤트)=>{
              set전화번호(이벤트.target.value);
             }}/><br />
      <input type="text" 
             placeholder='주소 입력'
             onChange={(이벤트)=>{
              set주소(이벤트.target.value);
             }}/><br />
      
      <h3>고객 목록</h3>
      <div>
        <h3>첫번째 고객</h3>
        <p>이름 : {이름}</p>
        <p>전화번호 : {전화번호}</p>
        <p>주소 : {주소}</p>
      </div>
    </div>
  )
}
