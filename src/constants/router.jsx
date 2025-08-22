import { createBrowserRouter } from 'react-router-dom'

import Root from '../components/pages/Root/Root'
import Header from '../components/common/Header/Header'
import Account from '../components/pages/Account'
import Cart from '../components/pages/Cart'
import Connect from '../components/pages/Connect'
import Login from '../components/pages/Login'
import Footer from '../components/common/Footer/Footer'
import Product from '../components/pages/Product'
import Signup from '../components/pages/Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/header',
    element: <Header />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/cart/:id?',
    element: <Cart />,
  },
  {
    path: '/connect',
    element: <Connect />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
  {
    path: '/footer',
    element: <Footer />,
  },
])

export default router
