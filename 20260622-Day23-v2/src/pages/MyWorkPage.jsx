// MyWorkPage.jsx

// import React from 'react'

export default function MyWorkPage() {
  return (
    <div className="my-work-box">
      <div className="my-work-content-box">
        <h2>My Work</h2>
        <p>Projects</p>

        <ul>
          <li>All<span>8</span></li>
          <li>Front-End<span>3</span></li>
          <li>Back-End<span>3</span></li>
          <li>Mobile<span>2</span></li>
        </ul>

        <div className="projects">
          <div className="project-meta">
            <img src="/project1.webp" alt="" />
            <img src="/project2.webp" alt="" />
            <img src="/project3.webp" alt="" />
            <img src="/project4.webp" alt="" />
          </div>

          <div className="project-meta">
            <img src="/project5.webp" alt="" />
            <img src="/project6.webp" alt="" />
            <img src="/project7.webp" alt="" />
            <img src="/project8.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
