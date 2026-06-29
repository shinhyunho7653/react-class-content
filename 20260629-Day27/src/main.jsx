import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hobbies from './test/Hobbies.jsx'
import RadioButtonTest from './test/RadioButtonTest.jsx'
import SelectBoxTest from './test/SelectBoxTest.jsx'
import DateTest from './test/DateTest.jsx'
import Signup from './signup.jsx'
import UseStateRouter from './UseStateRouter.jsx'
import Kiosk from './Kiosk.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
)
