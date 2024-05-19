
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App