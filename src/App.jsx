import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes/AppRoutes';
import ProfileRoutes from './app/routes/ProfileRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
        <ProfileRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App