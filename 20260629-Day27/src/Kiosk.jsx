// Kiosk.jsx

import React, { useState } from 'react'
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

export default function Kiosk() {

  let [page, setpage] = useState("first");

  return (
    <div className='wrap'>
      {page == "first" && <div className='first-box'>
        <div className='box'></div>
        <h2>회원가입</h2>
        <hr />
        <br />
        <h3>1단계. 약관 동의</h3>
        <p>회원가입을 위해 약관에 동의해주세요.</p>
        <br />
        <button onClick={()=>{
          setpage("second");
        }}>동의하고 다음</button>
      </div>
      }

      {page == "second" && <div className='first-box'>
        <div className='box'></div>
        <h2>회원가입</h2>
        <hr />
        <br />
        <h3>2단계. 정보 입력</h3>
        <input type="text" placeholder='이름'/>
        <input type="text" placeholder='아이디'/>
        <input type="text" placeholder='비밀번호'/>
        <br />
        <button onClick={()=>{
          setpage("third");
        }}>가입하기</button>
      </div>
      }

      {page == "third" && <div className='first-box'>
        <div className='box'></div>
        <h2>회원가입</h2>
        <hr />
        <br />
        <h3>가입 완료!</h3>
        <p>회원가입이 완료되었습니다.</p>
      </div>
      }
    </div>



    // <div className='wrap'>
    //   <h2>간단 키오스크</h2>
      
    //   {page == "first" && 
    //   <FirstPage setpage={setpage}/>
    //   }

    //   {page == "second" && 
    //   <SecondPage setpage={setpage}/>
    //   }

    //   {page == "third" && 
    //   <ThirdPage />
    //   }
    // </div>
  )
}
