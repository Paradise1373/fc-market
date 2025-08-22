import LoginForm from '../../common/Form/LoginForm/LoginForm'

const Login = () => {
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex flex-col gap-4 bg-slate-100 items-center justify-center'>
        <h3 className='font-extrabold text-xl'>Login</h3>
        <LoginForm />
      </div>
    </>
  )
}

export default Login
