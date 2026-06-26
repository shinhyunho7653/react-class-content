import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index2.css'
import GameCharList from './GameCharList'
// import UseObjectList from './UseObjectList'
// import UseObjectTest from './UseObjectTest'
// import FriendList from './ex/FriendList'
// import MovieList from './MovieList'
// import CartList from './CartList'
// import SearchArray from './SearchArray'
// import UseStateInput from './UseStateInput'
// import Lab1 from './lab/Lab1'
// import BgChange from './BgChange'
// import ClassNameTest from './ClassNameTest'
// import PasswordMode from './ex/PasswordMode'
// import LikeMode from './LikeMode'
// import DarkMode from './ex/DarkMode'
// import UseStateTest from './UseStateTest.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseStateTest /> */}
    {/* <DarkMode /> */}
    {/* <LikeMode /> */}
    {/* <PasswordMode /> */}
    {/* <ClassNameTest /> */}
    {/* <BgChange /> */}
    {/* <Lab1 /> */}
    {/* <UseStateInput /> */}
    {/* <SearchArray /> */}
    {/* <CartList /> */}
    {/* <MovieList /> */}
    {/* <FriendList /> */}
    {/* <UseObjectTest /> */}
    {/* <UseObjectList /> */}
    <GameCharList />
  </StrictMode>,
)
