import { Link } from 'react-router'
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined'
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonIcon from '@mui/icons-material/Person'

import useStore from '../../../store'

const Header = () => {
  const { access_token } = useStore()

  return (
    <>
      <header className='px-2 py-2'>
        <div className='flex px-8 py-3 items-center rounded-lg shadow-md justify-between text-slate-900 bg-cyan-300'>
          <div>
            <Link className='gap-3 flex items-center justify-center' to='..'>
              <ShopTwoOutlinedIcon
                sx={{ width: '2.3rem', height: '2.3rem', color: '#141313' }}
              />
              <span className='text-slate-900 text-2xl capitalize font-bold'>
                digital market
              </span>
            </Link>
          </div>
          <div className='px-6 gap-3 flex items-center'>
            <Link to='/account'>
              <PersonPinOutlinedIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  paddingRight: '1rem',
                  color: '#141313',
                }}
              />
            </Link>
            <Link to='/connect'>
              <PhoneEnabledOutlinedIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  paddingRight: '1rem',
                  color: '#141313',
                }}
              />
            </Link>
            <Link to='/cart'>
              <ShoppingCartOutlinedIcon
                sx={{
                  width: '3rem',
                  height: '3rem',
                  paddingRight: '1rem',
                  color: '#141313',
                }}
              />
            </Link>
            <Link
              to={`${
                access_token != null && access_token != undefined
                  ? '/account'
                  : '/login'
              }`}
              className='outline-none flex items-center capitalize rounded-md px-1'
            >
              {access_token != null && access_token != undefined ? (
                <div className='flex gap-2 text-slate-500 px-3 rounded-md py-2 bg-slate-50'>
                  <AccountCircleIcon className='animate-pulse' />
                  <span className='animate-pulse'>Dashboard</span>
                </div>
              ) : (
                <LoginOutlinedIcon
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    paddingRight: '1rem',
                    color: '#141313',
                  }}
                />
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
