import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './account/account'
import App from './App'
import Snacks from './product/snacks'
import HotandCold from './product/HotandCold'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Account/>}/>
      <Route path='/home' element={<App/>}/>
      <Route path='/snacks' element={<Snacks/>}/>
      <Route path='/hotandcold' element={<HotandCold/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
