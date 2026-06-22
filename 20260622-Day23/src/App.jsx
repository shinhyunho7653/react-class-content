// link태그 rel =stylesheet href=""이거를 한 단어로 줄였다.
// 리액트에서 파일을 포함할 떄는 import하나만 쓰면 된다.
import "./App.css";
import Drink from "./component/Drink";

function App() {
  return (
    <>
      <h1>리액트를 사용하게 된 이유!</h1>
      <h2>첫번째 이유는 html태그들이 중복이 많이 된다.</h2>
      {/* class css에는 섰는데 리액트는 className써야된다 */}
      <Drink />
      <Drink />

      <div className="drink-menus">
        <img
          src="https://www.ediya.com/files/menu/IMG_1780021002320.png"
          alt=""
        />
        <p>블루베리</p>
        <p>좋아요</p>
        <button>선물하기</button>
      </div>

      <div className="drink-menus">
        <img
          src="https://www.ediya.com/files/menu/IMG_1780021002320.png"
          alt=""
        />
        <p>블루베리</p>
        <p>좋아요</p>
        <button>선물하기</button>
      </div>
      <div className="drink-menus">
        <img
          src="https://www.ediya.com/files/menu/IMG_1780021002320.png"
          alt=""
        />
        <p>블루베리</p>
        <p>좋아요</p>
        <button>선물하기</button>
      </div>
    </>
  );
}

export default App;

// 리액트를 사용하는 이유 중에 HTML 코드로 물건을 디자인하면 HTMl 코드들이 중복된다.

// 유지보수시에 불편하다. 그래서 리액트를 사용한다.

// HTML에 없는 리액트의 새로운 기능 : 내가 직접 태그를 만들 수 있다.
// h2, p, img 등