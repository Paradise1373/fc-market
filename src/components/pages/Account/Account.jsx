import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import LogoutIcon from '@mui/icons-material/Logout'
import { toast } from 'react-toastify'

import useStore from '../../../store'

import { getUserInfoWithTokenApi } from '../../../utils/apis/users/GetUserInfoWithTokenApi'
import { removeCookie } from '../../../utils/helpers/cookies'

import Header from '../../common/Header/Header'
import ErrorOnFetchApi from '../../common/Error/ErrorOnFetchApi'

const Account = () => {
  const { access_token, removeState } = useStore()

  const navigate = useNavigate()

  const { isPending, error, data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfoWithTokenApi(),
    enabled: access_token !== null && access_token !== undefined,
  })

  const handleLogout = () => {
    removeCookie('credential')
    removeState()

    toast.warn('Logged out is successfully , redirecting to login page... ')
    setTimeout(() => navigate('/login'), 2000)
  }

  return (
    <div>
      <Header />
      <p className='text-center cursor-progress text-xl pt-9 p-3 mx-auto rounded-full bg-slate-300 animate-pulse text-slate-900 w-[33%]'>
        Your Information Data
      </p>
      <div className='cursor-grab items-center justify-center p-4 mx-auto w-[45%] bg-green-200 rounded-xl pl-120'>
        {access_token !== null && access_token !== undefined ? (
          <>
            {error && <ErrorOnFetchApi />}
            {data && (
              <>
                <ListItem className='mt-5' alignItems='flex-start'>
                  <div className='w-[10rem] pe-4'>
                    <img
                      alt='profile image'
                      className='rounded-full object-fit-cover'
                      src={data?.data?.avatar}
                    />
                  </div>
                  <ListItemText
                    primary={
                      <p className='font-bold'>{`Welcome, ${data?.data?.email} !`}</p>
                    }
                    secondary={
                      <div className='flex flex-col gap-4 mt-4'>
                        <div>
                          <Typography
                            component='span'
                            variant='body2'
                            sx={{ color: 'text-primary', display: 'inline' }}
                          >
                            Name&nbsp; : &nbsp;
                          </Typography>
                          {data?.data?.name}
                        </div>
                        <div>
                          <Typography
                            component='span'
                            variant='body2'
                            sx={{ color: 'text-primary', display: 'inline' }}
                          >
                            Role&nbsp; : &nbsp;
                          </Typography>
                          {data?.data?.role}
                        </div>
                        <div>
                          <Typography
                            component='span'
                            variant='body2'
                            sx={{ color: 'text-primary', display: 'inline' }}
                          >
                            Password&nbsp; : &nbsp;
                          </Typography>
                          {data?.data?.password}
                        </div>
                      </div>
                    }
                  />
                </ListItem>
                <>
                  <button
                    onClick={handleLogout}
                    className='flex items-center gap-2 bg-slate-50 text-red-700 rounded-md shadow-lg px-4 py-2 mx-4'
                  >
                    <span>Logout</span>
                    <LogoutIcon />
                  </button>
                </>
              </>
            )}
          </>
        ) : (
          <Link
            className='flex font-stretch-50% underline text-xl p-[2rem] items-center justify-center'
            to='/login'
          >
            <p className='rounded-md capitalize px-4 py-2 my-16 bg-slate-500 text-slate-50 text-xl '>
              only logged in users can access to account ...
            </p>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Account
