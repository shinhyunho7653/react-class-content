// MovieList.jsx

import React, { useState } from 'react'

export default function MovieList() {

  let [movie, setmovie] = useState([]);

  return (
    <div>
      <h2>좋아하는 영화 담기</h2>

      <button onClick={()=>{
        setmovie([...movie,"❤️ 어벤져스"]);
      }}>❤️ 어벤져스</button><br />

      <button onClick={()=>{
        setmovie([...movie,"❤️ 범죄도시"]);
      }}>❤️ 범죄도시</button><br />

      <button onClick={()=>{
        setmovie([...movie,"❤️ 검사외전"]);
      }}>❤️ 검사외전</button><br />

      <button onClick={()=>{
        setmovie([...movie,"❤️ 설국열차"]);
      }}>❤️ 설국열차</button><br />

      <button onClick={()=>{
        setmovie([...movie,"❤️ 겨울왕국"]);
      }}>❤️ 겨울왕국</button><br />

      <br />
      <hr />
      <br />

      <h3>{movie}</h3>
    </div>
  )
}
