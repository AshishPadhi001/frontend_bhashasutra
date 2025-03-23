import { BrowserRouter, useRoutes, Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { File } from './pages/file';
import { Raw } from './pages/raw';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { PrivateRoute } from './components/private-route';
import { AuthProvider } from './contexts/AuthContext';

const Root = () => {
  return (
    <PrivateRoute>
      <Navbar />
      <Outlet />
    </PrivateRoute>
  );
}


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/file', element: <File /> },
        { path: '/raw', element: <Raw /> },
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {routes}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;