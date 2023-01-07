export default function LoginBox({ setIsClicked }) {
  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-xl p-9 border-black"
      style={{ height: "34rem", width: "28rem" }}
    >
      <div className="Input-container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-7">
          <h1 className="text-4xl font-demo">Login</h1>
          <p className="pt-2 opacity-60">
            Please enter your valid Credentials!
          </p>
        </div>
        <form>
          <div className="input-container flex flex-col my-5">
            <label className="my-1">EMAIL</label>
            <input
              placeholder=""
              className="h-12 bg-gray-700 rounded-sm border-black px-3"
              type="email"
            />
          </div>
          <div className="input-container flex flex-col my-5">
            <label className="my-1">PASSWORD</label>
            <input
              placeholder=""
              className="h-12 bg-gray-700 rounded-sm border-black px-3"
              type="password"
            />
          </div>
          <div className="forgot-password ">
            <p>Forgot password?</p>
          </div>
          <div className="submission-section flex flex-col mt-7">
            <p className="text-xs text-center mb-3 opacity-60">
              By logging in you are agreeing to the company user terms and
              conditions
            </p>
            <button
              className="bg-secondry px-5 py-3 rounded-sm"
              type="submit"
              onClick={handleClick}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
