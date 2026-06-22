// HomePage.jsx

// import React from 'react';

import "./HomePage.css";

function HomePage() {
  return (
      <div>

        <div className="menu">
          <h2>HyunHo</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>My work</li>
            <li>Tesimonial</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="main">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGvO6ihyU0iOtwUADtSnzG2pcnSUNrvs2SOUZq2OJEw&s=10" alt="" />
          <h1>Hello</h1>
          <h1>I'm <span className="coder">Coder</span>, HyunHo</h1>
          <button>Contact Me</button>
        </div>

      </div>
  )
}

export default HomePage;

