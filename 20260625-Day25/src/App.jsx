// App.jsx

import './App.css'

function App() {

  let number = 20;
  console.log("확인");

  let counter = 0;
  // 입력한 검색어 저장
  let search = "";

  return (
    <>
      <h1>useState?</h1>
      <p>현재 변수 number : {number}</p>

      <br />
      <hr />
      <br />

      <input type="text" onChange={(e)=>{
        console.log(e.target);
        console.log(e.target.value);
        search = e.target.value;
      }}/>
      <h3>입력한 값 : {search}</h3>

      <br />
      <br />
      <hr />
      <br />

      <h2>버튼을 클릭하면 화면에 증가하기</h2>
      <h3>{counter}</h3>
      <button onClick={()=>{
        counter = counter + 1;
        console.log("증가함 :", counter);
      }}>버튼</button>
    </>
  )
}

export default App