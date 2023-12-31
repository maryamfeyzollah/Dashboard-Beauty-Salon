import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginIndex() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setError(false);
    console.log(phone);
    console.log(password);
    setLoading(true);
    navigate("/");
  };

  return (
    <>
      <div className="flex md:min-h-screen h-full font-inter">
        <div className="flex w-full h-full flex-col md:flex-row">
          {/* Image */}
          <div className="md:bg-violet-300  md:min-h-screen md:flex md:flex-wrap hidden md:w-1/2">
            <div className="items-center text-center flex flex-col relative justify-center mx-auto">
              <img
                src="https://i.ibb.co/cv8TxwC/otp.png"
                alt="Logo Login"
                className="md:w-96 w-72 mx-auto"
              />
              <div className="md:block hidden text-violet-950">
                <h1 className="font-semibold text-2xl pb-2">
                  ورود به پنل سالن زیبایی
                </h1>
                <span className="text-sm text-violet-950">دسترسی سریع</span>
              </div>
            </div>
          </div>
          {/* Login Section */}
          <div className="flex flex-col md:flex-1 items-center justify-center w-full h-full ">
            <div className=" flex flex-col w-full h-full lg:px-36 md:px-8 px-3 md:py-8">
              {/* Login Header Text */}
              <div className="hidden md:block font-medium text-center text-xl sm:text-3xl text-gray-800">
                خوش آمدید
              </div>

              {/* Sparator */}
              <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                    برای استفاده از خدمات سالن زیبایی وارد شوید
                  </span>
                </div>
              </div>
              <div className="md:hidden block my-4 ">
                <h1 className="text-2xl text-center text-custom-2 font-semibold">ورود</h1>
              </div>
              <div className="md:hidden block my-4  ">
                <h1 className="text-base text-violet-950 text-center  ">
                  {" "}
                  برای استفاده از خدمات سالن زیبایی وارد شوید{" "}
                </h1>
              </div>

              {/* Login Form */}
              <div className="md:mt-10 mt-4 ">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="flex flex-col mb-3">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>

                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-violet-300"
                        placeholder=" موبایل"
                      />
                    </div>
                    {error?.phone && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.phone[0]}
                      </span>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col mb-6">
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <FontAwesomeIcon icon={faLock} />
                      </div>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-pink-400"
                        placeholder="رمز عبور"
                      />
                    </div>
                    {error?.password && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {error.password[0]}
                      </span>
                    )}
                  </div>

                  {/* Forgot Password Link */}
                  <div className="flex items-center mb-6 -mt-2 md:-mt-4">
                    <div className="flex ml-auto">
                      <Link
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="inline-flex font-semibold text-xs sm:text-sm text-violet-700 hover:text-violet-800"
                      >
                        رمز خود را فراموش کردید؟
                      </Link>
                    </div>
                  </div>

                  {/* Button Login */}
                  <div className="flex w-full">
                    <button
                      disabled={loading}
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm bg-violet-300 hover:bg-violet-500 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 text-base  ">
                        {loading ? "Processing...." : "ورود"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Sparator */}
              <div className="relative mt-6 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                    OR
                  </span>
                </div>
              </div>

              {/* Social Button */}
              <div className="flex justify-between w-full mt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="mr-2 flex-1">ورود با اکانت گوگل</span>
                </button>
              </div>
              <div className="flex justify-between w-full mt-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="mr-2 flex-1">ورود با اکانت فیسبوک</span>
                </button>
              </div>
              {/* End Social Button */}

              {/* Register Link */}
              <div className="flex justify-center items-center  my-6 md:mb-0">
                <Link
                  to="/auth/register"
                  className="inline-flex items-center font-bold text-violet-700 hover:text-violet-950 text-xs text-center"
                >
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-base"> ثبت نام </span>
                </Link>
              </div>
              {/* End Register Link */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginIndex;
