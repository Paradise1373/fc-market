import SignupForm from '../../common/Form/SignupForm/SignupForm'
const Signup = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col gap-4 bg-slate-100 items-center justify-center'>
      <h1 className='font-bold text-xl'>Signup</h1>
      <SignupForm />
    </div>
  )
}

export default Signup
