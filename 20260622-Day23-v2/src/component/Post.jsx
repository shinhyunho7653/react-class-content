// Post.jsx

// import React from 'react'

export default function Post({ title, content, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  )
}