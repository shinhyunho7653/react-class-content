// App2.jsx

// import React from 'react'
import Post from "./component/Post";

export default function App2() {
  return (
    <div>
      <h2>Props?</h2>
      <p>컴포넌트로 나누면 각각의 데이터를 넘겨줘야 된다.</p>

      <Post title="첫번째 프로젝트"
            content="첫번째 프로젝트"
            image="project1.webp"/>

      <Post title="두번째 프로젝트"
            content="두번째 프로젝트"
            image="project2.webp"/>

      <Post title="세번째 프로젝트"
            content="세번째 프로젝트"
            image="project3.webp"/>
    </div>  
  )
}