// CartList.jsx

import React, { useState } from 'react'

export default function CartList() {

  let [cart, setcart] = useState([]);

  return (
    <div>
      <h2>체크박스를 이용해서 물건을 담는 예제</h2>
      <p>체크 박스는 체크 상태가 바뀌었을때 실행된다</p>

      <br />

      <input 
        type="checkbox" 
        onChange={()=>{
          setcart([...cart, "새우버거"]);
        }}/>새우버거

      <br />
      
      <input 
        type="checkbox" 
        onChange={()=>{
          setcart([...cart, "감자튀김"]);
        }}/>감자튀김
      
      <br />

      <input 
        type="checkbox" 
        onChange={()=>{
          setcart([...cart, "콜라"]);
        }}/>콜라
      
      <br />

      <input 
        type="checkbox" 
        onChange={()=>{
          setcart([...cart, "불고기버거"]);
        }}/>불고기버거

        <br />
        <br />
        <hr />
        <br />

        <h3>장바구니 : {cart}</h3>
    </div>
  )
}
