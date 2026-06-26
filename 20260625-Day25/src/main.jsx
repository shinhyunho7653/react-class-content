import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import UseStateTest from './UseStateTest.jsx'
import UseStateTest2 from './UseStateTest2.jsx'
import AdminPage from './pages/AdminPage.jsx'
import ControlTest from './ControlTest.jsx'
import ControlTest2 from './ControlTest2.jsx'
import StartPage from './pages/balanceGame/StartPage.jsx'
import BalanceMain from './pages/balanceGame/BalanceMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseStateTest /> */}
    {/* <UseStateTest2 /> */}
    {/* <AdminPage /> */}
    {/* <ControlTest /> */}
    {/* <ControlTest2 /> */}
    {/* <StartPage /> */}
    <BalanceMain />
  </StrictMode>,
)
