import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import ProtectedRoute from './components/ProtectedRoute'
import SignIn from './components/SignIn'
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
        
    <UserAuthContextProvider>
      <Routes>
        <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Hero />
                  </ProtectedRoute>
                }
              />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </UserAuthContextProvider>
  )
}

export default App
