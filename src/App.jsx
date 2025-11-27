import AppRoutes from './app/routes/AppRoutes'
import { AuthProvider } from './app/providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AuthProvider>
  )
}

export default App