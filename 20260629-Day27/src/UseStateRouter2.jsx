// UseStateRouter2.jsx

import React, { useState } from "react";

export default function UseStateRouter2() {
  //현재 메뉴를 저장하는 변수!
  let [menu, setMenu] = useState("best");
  return (
    <div>
      <h2>쇼핑몰 메뉴</h2>
      <p>메뉴를 클릭하면 화면이 변경됩니다.</p>

      <button
        onClick={() => {
          setMenu("best");
        }}
      >
        best
      </button>

      <button
        onClick={() => {
          setMenu("new");
        }}
      >
        신상품
      </button>

      <button
        onClick={() => {
          setMenu("sale");
        }}
      >
        할인상품
      </button>

      <button
        onClick={() => {
          setMenu("cart");
        }}
      >
        장바구니
      </button>
    </div>
  );
}