"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupComponent = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSignup = async () => {
    console.log("onSignup");
    try {
      setIsLoading(true);

      console.log("user", user);
      const response = await axios.post("/api/users/signup", user);
      console.log("userff", user);

      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      console.log("nkxjvndkjn");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-hero-pattern bg-[51%_38%] relative">
      <div className="absolute w-full">{/* <CommonNavbar /> */}</div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-color-bglogin p-7 m-1 rounded-xl border border-stone-700 border-solid w-[min(450px,100%)] text-center">
          <div className="font-extrabold text-2xl text-stone-300">
            Start your remote career on the{" "}
            <Link
              href="https://twitter.com/levelsio/status/1606328087569801223?s=20&t=6snxVEs79ITic1-LwC-pSg"
              target="_blank"
              className="underline"
            >
              #1 remote work platform
            </Link>
          </div>
          <div>{isLoading ? "processing.." : ""}</div>
          {/* <form className="mt-6"> */}
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-6 block w-full mb-2 outline-none p-2 bg-white rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Create password"
            className="block w-full mb-2 outline-none p-2 bg-white rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            type="submit"
            className="w-full mt-6 px-2 py-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 transition-all ease-linear"
            onClick={onSignup}
          >
            Continue
          </button>
          {/* </form> */}

          <div className="text-stone-300 mt-6">
            Already a member?
            <Link href="/login" className="underline font-extrabold ms-2">
              Log in
            </Link>
          </div>

          <div className="text-[11px] text-stone-300 mt-4">
            By creating an account you agree to our{" "}
            <Link href="/legal" className="underline">
              terms of service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
