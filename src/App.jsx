import './App.css';
import AuthPage from './Pages/AuthPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from './context/QuizContext';
import HomePage from './Pages/HomePage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<AuthPage/>
    },
    {
      path:'/dashboard',
      element:<HomePage/>
    }
  ])
  return (
    <div className="App">
      <Provider>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
