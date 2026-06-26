import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PostPage from './pages/PostPage'
// import App5 from './App5'
// import App3 from './App3'
// import App2 from './App2'
// import App from './App.jsx'
// import HotTopic from './pages/HotTopic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HotTopic /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App5 /> */}
    <PostPage />
  </StrictMode>,
)
