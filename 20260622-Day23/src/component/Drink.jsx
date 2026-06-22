// Drink.jsx
// - 반복되는 HTML태그들을 리액트의 기능을 이용해서
//   새로운 태그를 만들어서 쓸 수 있다.
// 리액트는 자바스크립트 안에서 HTML을 사용할 수 있다.

export default function Drink() {
  return (
    <div className="drink-menus">
      <img
        src="https://www.ediya.com/files/menu/IMG_1780021002320.png"
        alt=""
      />
      <p>블루베리</p>
      <p>좋아요</p>
      <button>선물하기</button>
    </div>
  );
}