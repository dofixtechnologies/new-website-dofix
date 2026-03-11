"use client"

import Link from "next/link"
import { logoutUser } from "@/utils/auth"
import { useRouter } from "next/navigation"

export default function AccountPage(){

const router = useRouter()

const logout = ()=>{
  logoutUser()
  router.push("/")
}

const menuItems = [
  {name:"Profile Settings", link:"/account/profile"},
  {name:"About DoFix", link:"/about"},
  {name:"Privacy Policy", link:"/privacy-policy"},
  {name:"Terms & Conditions", link:"/terms"},
  {name:"Delete Account", link:"/account/delete"},
  {name:"Help & Support", link:"/support"},
]

return(

<div className="min-h-screen bg-gray-100 flex justify-center pt-55 px-4">

  <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

    <h1 className="text-2xl font-semibold text-gray-800 mb-6">
      Account
    </h1>

    <ul className="divide-y">

      {menuItems.map((item,index)=>(
        <li key={index}>
          <Link
            href={item.link}
            className="flex justify-between items-center py-4 text-gray-700 hover:text-[#3683ab] transition"
          >
            <span>{item.name}</span>
            <span className="text-gray-400">›</span>
          </Link>
        </li>
      ))}

    </ul>

    <button
      onClick={logout}
      className="mt-8 w-full border border-red-500 text-red py-3 rounded-xl hover:bg-red hover:text-white transition"
    >
      Log Out
    </button>

  </div>

</div>

)

}