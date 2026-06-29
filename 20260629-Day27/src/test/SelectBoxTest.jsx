// SelectBoxTest.jsx

import React, { useState } from 'react'

export default function SelectBoxTest() {

  // select - 여러개의 항목중에 하나를 선택하는 태그
  let [과일, set과일] = useState("");
  let [menu, setmenu] = useState("");
  let [payment, setPayment] = useState("");

  return (
    <div>
      <h2>드롭다운 메뉴 selectbox</h2>
      <h3>음식 선택</h3>
      <select onChange={(이벤트정보)=>{
        setmenu(이벤트정보.target.value);
      }}>
        <option value="">선택하세요</option>
        <option value="피자">🍕</option>
        <option value="치킨">🍗</option>
        <option value="햄버거">🍔</option>
      </select>

      <h3>내가 선택한 메뉴 : {menu}</h3>

      <br />
      <hr />
      <br />

      <h3>결제 방법 선택</h3>
      <select onChange={(이벤트정보) => {
        setPayment(이벤트정보.target.value);
      }}>
        <option value="">결제방법을 선택하세요</option>
        <option value="카드결제">카드결제</option>
        <option value="계좌이체">계좌이체</option>
        <option value="카카오페이">카카오페이</option>
        <option value="네이버페이">네이버페이</option>
      </select>

      <h3>선택한 결제방법 : {payment}</h3>

      <br />
      <hr />
      <br />

      <h3>과일 선택</h3>
      <select onChange={(이벤트정보)=>{
        set과일(이벤트정보.target.value);
      }}>
        <option value="">선택하세요</option>
        <option value="사과">🍎</option>
        <option value="포도">🍇</option>
      </select>

      <h3>내가 선택한 과일 : {과일}</h3>
    </div>
  )
}
