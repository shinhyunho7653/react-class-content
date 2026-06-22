// AboutPage.jsx

import StackCard from "../component/StackCard";

// import React from 'react'

export default function AboutPage() {
  return (
    <div className="about-me-box">
      <h2>About Me</h2>
      <p className="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque labore perspiciatis deserunt earum fuga sapiente soluta quas voluptate, magnam, recusandae similique itaque iure atque porro ad ipsum dignissimos voluptatibus culpa!</p>
      
      <div className="my-stacks">

        <StackCard />
        <StackCard />
        <StackCard />

      </div>
    </div>
  )
}
