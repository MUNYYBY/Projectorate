import { useState, useEffect } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
export default function LoginBox({
  setIsClicked,
  setEmail,
  setPassword,
  loading,
  errorMessage,
}) {
  const [inputClassString, setInputClassString] = useState(
    "h-12 bg-gray-700 rounded-sm px-3 "
  );

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };
  useEffect(() => {
    if (errorMessage) {
      setInputClassString(inputClassString + "border-red-500 border-2");
    } else {
      setInputClassString("h-12 bg-gray-700 rounded-sm px-3 ");
    }
  }, [errorMessage]);
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
              className={inputClassString}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col my-5">
            <label className="my-1">PASSWORD</label>
            <input
              placeholder=""
              className={inputClassString}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage ? (
            <div className="error-message flex flex-row  items-center">
              <div className="error-icon mr-2">
                <RiErrorWarningLine size={28} className="text-red-500" />
              </div>
              <p className="text-red-500 text-md">{errorMessage}</p>
            </div>
          ) : (
            ""
          )}
          <div className="submission-section flex flex-col mt-5">
            <p className="text-xs text-center mb-3 opacity-60">
              By logging in you are agreeing to the company user terms and
              conditions
            </p>
            <button
              className={
                !loading
                  ? "bg-secondry px-5 py-3 rounded-sm"
                  : "bg-secondry px-5 py-3 rounded-sm opacity-60"
              }
              type="submit"
              onClick={handleClick}
              disabled={loading}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
