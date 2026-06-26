// BgChange.jsx

import React, { useState } from 'react'

export default function BhChange() {

  let [bgcolor, setbgcolor] = useState(false);

  return (
    <div className={bgcolor ? "my-bg" : "box"}>
      <button onClick={()=>{
        setbgcolor(!bgcolor);
      }}>배경색 변경</button>
    </div>
  )
}
