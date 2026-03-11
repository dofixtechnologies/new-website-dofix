"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage(){

const router = useRouter()

const [profileImage,setProfileImage] = useState<string | null>(null)

const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

const file = e.target.files?.[0]

if(file){
const imageUrl = URL.createObjectURL(file)
setProfileImage(imageUrl)
}

}

return(

<div className="min-h-screen bg-gray-100 flex justify-center pt-55 pb-20 px-4">

  <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">

    {/* Header */}

    <div className="flex items-center mb-8">

      <button
        onClick={()=>router.back()}
        className="w-10 h-10 flex items-center justify-center rounded-lg border mr-3 hover:bg-gray-50"
      >
        ←
      </button>

      <h2 className="text-xl font-semibold text-gray-800">
        Profile Settings
      </h2>

    </div>

    {/* Avatar */}

    <div className="flex justify-center mb-10">

      <div className="relative">

        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">

          {profileImage ? (
            <img
              src={profileImage}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray"></div>
          )}

        </div>

        <label className="absolute bottom-2 right-2 bg-[#3683ab] text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow">

          ✎

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

        </label>

      </div>

    </div>

    {/* Form */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      <div>
        <label className="text-sm text-gray-600">
          First Name
        </label>

        <input
          className="w-full border border-gray-300 p-3 rounded-lg mt-1 focus:ring-2 focus:ring-[#3683ab]"
          defaultValue="Roshan"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">
          Last Name
        </label>

        <input
          className="w-full border border-gray-300 p-3 rounded-lg mt-1 focus:ring-2 focus:ring-[#3683ab]"
          defaultValue="Ali"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">
          Phone Number
        </label>

        <input
          className="w-full border border-gray-300 p-3 rounded-lg mt-1 bg-gray-100"
          defaultValue="+918595882771"
          disabled
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">
          Email
        </label>

        <input
          className="w-full border border-gray-300 p-3 rounded-lg mt-1 focus:ring-2 focus:ring-[#3683ab]"
          defaultValue="roshanali88802@gmail.com"
        />
      </div>

    </div>

    {/* Buttons */}

    <div className="flex flex-col md:flex-row gap-4 mt-10">

      <button
        onClick={()=>router.back()}
        className="w-full border border-[#3683ab] text-[#3683ab] py-3 rounded-lg hover:bg-blue-50 transition"
      >
        Cancel
      </button>

      <button
        className="w-full bg-[#3683ab] text-white py-3 rounded-lg hover:bg-[#2c6d8f] transition"
      >
        Save Changes
      </button>

    </div>

  </div>

</div>

)

}