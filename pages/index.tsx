import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { logo } from "../public";

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { logIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = userInfo;
    try {
      await logIn(email, password);
      router.push("/Beranda");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="relative min-h-screen justify-center"
        style={{
          background: "linear-gradient(180deg, #4481EB 0%, #04BEFE00 100%)",
        }}
      >
        <div className="flex flex-col h-screen content-center justify-center items-center w-full">
          <Image
            src={logo}
            alt="logo"
            style={{
              width: "170px",
            }}
          />
          <h1 className="landingPageFont lgnheader1">Selamat Datang</h1>
          <h1 className="landingPageFont lgnheader2">Admin HiaceGo</h1>
          <form
            className="flex flex-col gap-4 items-center "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row form-input outline-transparent bg-[#FFFFFF] space-x-2 rounded-full h-[40px] sm:w-[450px] w-[340px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-4 text-[#3392F1]"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <input
                type="email"
                className="w-4/5 bg-transparent outline-none placeholder-black"
                placeholder="Email"
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                name="email"
              ></input>
            </div>
            <div className="flex flex-row form-input outline-transparent bg-[#FFFFFF] space-x-2 rounded-full h-[40px] sm:w-[450px] w-[340px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-4 text-[#3392F1]"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="sm:w-4/5 w-60 bg-transparent outline-none placeholder-black"
                placeholder="Kata Sandi"
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 cursor-pointer text-[#989898]"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </div>
            <div className="flex mt-3 justify-center">
              {/* <a
                href="/Beranda"
                className="flex justify-center items-center bg-[#3392F1] hover:bg-[#2c85df] btnlogin text-center"
              >
                Masuk
              </a> */}
              <button className="flex justify-center items-center bg-[#3392F1] hover:bg-[#2c85df] btnlogin text-center">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
