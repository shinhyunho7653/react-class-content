// UseObjectList.jsx

import React, { useState } from 'react'

export default function UseObjectList() {

  let [students, setstudents] = useState([]);

  return (
    <div>
      <h2>실무에서 가장 많이 사용하는 객체와 배열 함께 사용하기</h2>

      <button
        onClick={() => {
          setstudents([
            ...students,
            {
            name: "이완",
            age: 30,
        }]);
        }}
      >
        학생 추가
      </button>

      <button
        onClick={() => {
          setstudents([
            ...students,
            {
            name: "희주",
            age: 25,
          }]);
        }}
      >
        학생 추가
      </button>

      <h2>학생 정보 : {JSON.stringify(students)}</h2>
    </div>
  )
}
