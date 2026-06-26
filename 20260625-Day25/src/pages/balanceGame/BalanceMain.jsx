//BalanceMain.jsx

import React, { useState } from "react";
import "./StartPage.css";
import StartPage from "./StartPage";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

export default function BalanceMain() {
  // useState 여기서만 사용 가능하다!
  // 다른 페이지로 값을 전달하려고 해도 안된다.
  let [현재페이지, set현재페이지] = useState("start");
  console.log(현재페이지);

  return (
    <div className="wrap">
      {/* 우리가 버튼을 클릭하면 main안에 변수값이 바뀌면서 
      조건에 의해 현재 클릭해서 바뀐 페이지만 보인다. */}
      {현재페이지 == "start" && <StartPage set현재페이지={set현재페이지} />}
      {현재페이지 == "question1" && <Question1 set현재페이지={set현재페이지} />}
      {현재페이지 == "question2" && <Question2 set현재페이지={set현재페이지} />}
      {현재페이지 == "question3" && <Question3 set현재페이지={set현재페이지} />}
    </div>
  );
}