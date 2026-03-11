"use client";

import { useState } from "react";
import { loginUser } from "@/utils/auth";

const OtpScreen = () => {

const [otp,setOtp] = useState(["","","",""])

const handleVerify = () => {

const enteredOtp = otp.join("")

if(enteredOtp.length === 4){

loginUser()

window.location.href="/account"

}

}

return(

<div className="flex flex-col items-center gap-6 pt-44 bg-gray">

<div className="flex gap-4">

{otp.map((digit,index)=>(
<input
key={index}
maxLength={1}
className="w-12 h-12 border text-center"
/>
))}

</div>

<button
onClick={handleVerify}
className="bg-[#3683ab] text-white px-6 py-2 rounded"
>

VERIFY

</button>

</div>

)

}

export default OtpScreen