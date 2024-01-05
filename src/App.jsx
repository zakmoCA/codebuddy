import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Files from './pages/Files'
import Editor from './pages/Editor'




const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/files" element={<Files />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App