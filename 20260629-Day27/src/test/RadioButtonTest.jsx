// RadioButtonTest.jsx

import React, { useState } from 'react'

export default function RadioButtonTest() {

  // 체크박스는 true, false 를 준다
  // 라디오버튼은 true, false 를 안준다. 값을 준다
  let [gender, setgender] = useState("");

  let [pay, setpay] = useState("");

  return (
    <div>
      <h2>라디오버튼</h2>
      <h3>여러개 중에 하나만 선택가능하다</h3>

      <br />

      <p>성별 선택</p>
      {/* name속성은 같은 그룹으로 묶어서 여러게중에 하나만 선택 */}
      <input type="radio" name="gender" onChange={(이벤트정보)=>{
        setgender("남성");
      }}/>남성
      <input type="radio" name="gender" onChange={(이벤트정보)=>{
        setgender("여성");
      }}/>여성

      <br /><br />
      <hr />
      <br />

      <p>결제 방법</p>
      <input type="radio" name="pay" onChange={(이벤트정보)=>{
        setpay("카카오페이");
      }}/>카카오페이
      <input type="radio" name="pay" onChange={(이벤트정보)=>{
        setpay("카드");
      }}/>카드
      <input type="radio" name="pay" onChange={(이벤트정보)=>{
        setpay("계좌이체");
      }}/>계좌이체

      <br /><br />
      <hr />
      <br />

      <p>배송 방법</p>
      <input type="radio" name="delivery" />일반배송
      <input type="radio" name="delivery" />새벽배송
      <input type="radio" name="delivery" />방문수령

      <br /><br />
      <hr />
      <br />

      <p>설문 조사</p>
      <h3>위에서 선택한 값들을 보이기</h3>
      <p>성별 : {gender}</p>
      <p>결제방법 : {pay}</p>
    </div>
  )
}
