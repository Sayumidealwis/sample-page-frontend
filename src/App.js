import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import ListTaskPage from './Pages/ListTaskPage'
import EditTaskPage from './Pages/EditTaskPage'
import AddTaskPage from './Pages/AddTaskPage'
import ViewTaskPage from './Pages/ViewTaskPage'
import HistoryTaskPage from './Pages/HistoryTaskPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasklist" element={<ListTaskPage />} />
            <Route path="/taskview/:taskid" element={<ViewTaskPage />} />
            <Route path="/taskadd" element={<AddTaskPage />} />
            <Route path="/taskedit" element={<EditTaskPage />} />
            <Route path="/taskhistory" element={<HistoryTaskPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
