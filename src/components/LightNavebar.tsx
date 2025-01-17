import React from 'react'

import { LuMoveRight } from "react-icons/lu";
import Link from "next/link"

const LightNavbar = () => {
  return (
   <div>
    { /*navbar-light*/}
     <div className="w-[1322px] h-[91px]  flex items-center justify-center">
     <span className=" container w-[187px] h-[58px] ml-[50px] pt-[16px]"> <h3 className="  text-2xl font-bold text-[#252B42]">Bandage</h3></span>
          <span className=" container w-[275px] h-[24px] mt-[16px] pl-[40px]">
          <ul className="flex gap-[21px]  ">
         <li className="text-sm font-bold text-[#737373] text-center "><Link href="/">Home</Link> </li>
          <li className="text-sm font-bold text-[#737373] text-center"><Link href="/product">Product</Link></li>
          <li className="text-sm font-bold text-[#737373] text-center"><Link href="/pricing">Pricing</Link></li>
         <li className="text-sm font-bold text-[#737373] text-center"><Link href="/contact">Contact</Link></li>
       </ul>
       </span>
       <span className="w-[300px] h-[52px] ml-[220px] mt-[3px] flex gap-[45px]">
         <button className="w-[41px] h-[22px] text-sm font-bold text-[#23A6F0] pt-[20px]">Login</button>
         <button className="w-[214px] h-[52px] bg-[#23A6F0] py-[15px] px-[15px] text-sm font-bold text-[#FFFFFF] rounded-md flex gap-[15px]">Become a member 
           <LuMoveRight  className="w-[15px] h-[20px] pt-[2px]" /></button>
       </span>      
     </div>
     </div>

  )
}

export default LightNavbar;


