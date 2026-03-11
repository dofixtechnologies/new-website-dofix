"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { loginUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Signin = () => {

  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [showOtp, setShowOtp] = useState(false);
  const [agree, setAgree] = useState(false);
  const [timer, setTimer] = useState(59);

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (showOtp && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showOtp, timer]);

  const handleSendOtp = async () => {

    if (mobile.length === 10 && agree) {

      await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mobile })
      });

      setShowOtp(true);
      setTimer(59);
    }
  };

  const handleOtpChange = (value: string, index: number) => {

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // ✅ VERIFY FUNCTION INSIDE COMPONENT
  const handleVerify = () => {

    const enteredOtp = otp.join("");

    if (enteredOtp.length === 4) {

      loginUser();

      router.push("/account");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray pt-44">

      <div className="w-[90%] sm:w-full max-w-md bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="p-8">

          {!showOtp && (
            <>
              <h2 className="text-2xl font-semibold text-center text-[#2e5563]">
                Login
              </h2>

              <p className="text-center text-gray-500 mb-6">
                Enter your phone number to login
              </p>

              <div className="border rounded-lg flex items-center px-4 py-3 mb-5">
                <span className="mr-2 text-gray-500">+91</span>

                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Enter your mobile number"
                  className="outline-none w-full"
                />
              </div>

              <div className="flex items-center mb-6 text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />

                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-blue underline">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <button
                onClick={handleSendOtp}
                disabled={mobile.length !== 10 || !agree}
                className="w-full bg-[#3683ab] text-white py-3 rounded-lg font-semibold disabled:bg-gray-300"
              >
                SEND OTP
              </button>
            </>
          )}

          {showOtp && (
            <>
              <h2 className="text-2xl font-semibold text-center text-[#2e5563]">
                OTP Verification
              </h2>

              <p className="text-center text-gray-500 mb-6">
                Please enter OTP shared on your mobile number
              </p>

              <div className="flex justify-center gap-4 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    ref={(el) => {
                      inputs.current[index] = el;
                    }}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, index)
                    }
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 border rounded-lg text-center text-xl focus:border-[#3683ab] outline-none"
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                className="w-full bg-[#3683ab] text-white py-3 rounded-lg font-semibold"
              >
                VERIFY
              </button>

              <p className="text-center mt-4 text-gray-600">
                Didn’t receive a code?{" "}
                {timer > 0 ? (
                  <span className="text-[#3683ab]">
                    Resend in {timer} sec
                  </span>
                ) : (
                  <span
                    className="text-[#3683ab] cursor-pointer"
                    onClick={() => setTimer(59)}
                  >
                    Resend
                  </span>
                )}
              </p>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default Signin;