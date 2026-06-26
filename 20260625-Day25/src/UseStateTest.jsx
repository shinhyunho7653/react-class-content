// UseStateTest.jsx
// 리액트에서 변수를 기억하는 방법
// 리액트에서는 변수 말고 !state를 만들어서 데이터를 저장할 수 있다

import React, { useState } from 'react'

export default function UseStateTest() {

  // 변수들은 항상 맨 위에 작성
  // let [변수명,변경함수] = useState("보관할자료");

  let [숫자, set숫자] = useState(0);
  let [문자, set문자] = useState("하하");

  // 첫번째 변수는 현재 값, 두번째 변수는 값을 바꾸는 함수
  // 기존의 값을 바꾸고 화면에 자동으오 다시 그려준다
  // 기존의 값을 바꾸고 화면에 적용한다

  let [배열, set배열] = useState([10, 20, 30]);
  let [객체, set객체] = useState({
    name: "HyunHo",
    age: 23,
  });

  return (
    <div>
      <h3>useState에 저장한 객체 값 꺼내기</h3>
      <p>{객체.name}</p>
      <p>{객체.age}</p>
      <button onClick={()=>{
        set객체({
          name: "알렉스",
          age: 20,
        })
      }}>객체변경하기</button>

      <br />

      <h3>useState에 저장한 배열 값 꺼내기</h3>
      <p>{배열[0]}</p>
      <p>{배열[1]}</p>
      <button onClick={()=>{
        set배열([1000, 2000, 3000]);
      }}>배열변경하기</button>

      <br />

      <h3>useState에 저장한 값 꺼내기</h3>
      <p>{문자}</p>
      <button onClick={()=>{
        set문자("안녕하세요");
      }}>문자변경하기</button>
      <p>{숫자}</p>
      <button onClick={()=>{
        set숫자(100);
      }}>숫자변경하기</button>
    </div>
  )
}
