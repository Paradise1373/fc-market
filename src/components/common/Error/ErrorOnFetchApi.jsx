const ErrorOnFetchApi = ({ message = null }) => {
  return (
    <div className="p-4 text-slate-50 bg-red-600 text-center capitalize rounded-lg shadow-md">
      <p>{message ? message : 'Something goes wrong, try again later!'}</p>
    </div>
  )
}

export default ErrorOnFetchApi
