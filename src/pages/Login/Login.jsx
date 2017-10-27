export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Login</h2>
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-2 rounded mb-3 focus:outline-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-2 rounded mb-3 focus:outline-blue-500"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
