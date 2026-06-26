// Lab1.jsx

import React, { useState } from 'react'
import SettingItem from '../componenet/SettingItem';

export default function Lab1() {

  let [dark, setdark] = useState(false);
  let [alarm, setalarm] = useState(true);
  let [wifi, setwifi] = useState(true);

  return (
    <div className={dark ? "page darkPage" : "page"}>
      <div className={dark ? "phone darkPhone" : "phone"}>
        <h2>📱 설정</h2>
        <p>오늘 배운 useState 복습</p>

        <SettingItem
          icon="🌙"
          title="다크모드"
          value={dark}
          setValue={setdark}
        />

        <SettingItem 
          icon="🔔" 
          title="알림" 
          value={alarm} 
          setValue={setalarm} />

        <SettingItem
          icon="📶"
          title="와이파이"
          value={wifi}
          setValue={setwifi}
        />

        {/* <div className='item'>
          <p>🌙 다크모드</p>
          <button onClick={()=>{
            setdark(!dark);
          }}>{dark ? "ON" : "OFF"}</button>
        </div>

        <div className='item'>
          <p>🔔 알림</p>
          <button onClick={()=>{
            setsound(!alarm);
          }}>{alarm ? "ON" : "OFF"}</button>
        </div>

        <div className='item'>
          <p>📶 와이파이</p>
          <button onClick={()=>{
            setwifi(!wifi);
          }}>{wifi ? "ON" : "OFF"}</button>
        </div> */}

        <div className='result'>
          <h3>현재상태</h3>
          <p>다크모드 : {dark ? "켜짐" : "꺼짐"}</p>
          <p>알림 : {alarm ? "켜짐" : "꺼짐"}</p>
          <p>와이파이 : {wifi ? "켜짐" : "꺼짐"}</p>
        </div>
      </div>
    </div>
  )
}
