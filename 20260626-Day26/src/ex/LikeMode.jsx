// LikeMode.jsx

import React, { useState } from 'react'

export default function LikeMode() {

  // 좋아요 누름 true
  // 좋아요 안누름 false
  let [like, setlike] = useState(false); 

  return (
    <div>
      <h2>좋아요 예제</h2>
      {/* ? - like가 true이면 💗를 실행하고 false이면 🤍를 실행 */}
      <h3>{like ? "💗" : "🤍"}</h3>
      <button onClick={()=>{
        setlike(!like);
      }}>좋아요</button>
    </div>
  )
}
