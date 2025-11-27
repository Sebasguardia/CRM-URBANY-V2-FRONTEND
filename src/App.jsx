import { Provider } from 'react-redux';
import { store } from './app/store';
import AppRoutes from './app/routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;