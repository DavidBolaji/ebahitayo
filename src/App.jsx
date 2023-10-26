import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/RootPage';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
