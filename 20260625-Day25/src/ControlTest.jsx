// ControlTest.jsx

import React from 'react'

// useState()
//  - 리액트에서 쓰는 변수다
//  - ControlTest 페이지가 열릴때 생성되었다가
//    ControlTest 페이지가 닫힐때까지 유지된다

// 리액트는 페이지 이동보다 상황에 따라 화면이
// 달라지는 경우가 많다 index.html 하나의 파일을
// 이용해서 태그들을 갈아 끼우는 형태

export default function ControlTest() {

  let 로그인 = true;

  let 쿠폰 = true;

  let 페이지 = true;

  return (
    <div>
      <h2>페이지도 보여줄 수 있다</h2>
      <p>FirstPage 보이기</p>
      {페이지 && <FirstPage />}

      <br />
      <hr />
      <br />

      <h2>&& - if문처럼 동작하는 조건문</h2>
      <p>앞에 조건이 맞으면(true) 뒤를 실행한다</p>
      {로그인 && <h2>환영합니다</h2>}

      <br />
      <hr />
      <br />

      {true && <p>참이면 보인다</p>}
      {false && <p>거짓이면 보인다</p>}

      <br />
      <hr />
      <br />

      <h3>쿠폰 있으면 쿠폰 받기 버튼 보이기</h3>
      {쿠폰 && <button>쿠폰받기</button>}
    </div>
  )
}
