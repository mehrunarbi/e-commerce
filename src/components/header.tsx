"use client";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

 export default function Header() {
    return (
      <div className=" w-full h-46  bg-[#252B42]">
         <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
           <BsTelephone />
            <span className=" font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <ImMail2 />
          <span className="text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className=" font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center justify center">
          <h6 className=" text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[15px]">
           <Link href= "" ><FaInstagram className="w-[16px] h-[16px] text-white"/></Link>  
           <Link href=""><FaYoutube className="w-[16px] h-[16px] text-white" /></Link>
            <Link href=""><FaFacebook className="w-[16px] h-[16px] text-white" /></Link> 
            <Link href=""><FaTwitter className="w-[16px] h-[16px] text-white" /></Link>
       </div>
        </div>
      </div>

    <div className="flex justify-between items-center w-full h-[58px]  bg-[#FFFFFF] ">
      {/* Left section: Contact Info */}
      <div className="flex gap-[10px] px-[38px]">
         <h3 className="font-Montserrat font-bold text-2xl text-[#252B42]"> Bandage </h3>
      </div>
       {/* Center section: Follow Us */}
      <div className="w-[361px] h-[25px] pr-[400px]">
        <ul className="flex items-center justify-center gap-[20px]">
         <li className="font-bold text-sm text-[#737373]"> <Link href= "/">Home</Link></li>
          <li className="font-bold text-sm text-[#737373]"><Link href= "/shop">Shop</Link></li>
          <li className="font-bold text-sm text-[#737373]"> <Link href="/about">About</Link></li>
          <li className="font-bold text-sm text-[#737373]"><Link href= "/blog">Blog</Link></li>
          <li className="font-bold text-sm text-[#737373]"><Link href= "/contact">Contact</Link></li>
          <li className="font-bold text-sm text-[#737373]"><Link href= "/pages">Pages</Link></li>
        </ul>
      </div>
      <div className="w-[324px] h-[54px] flex items-center justify-center gap-[20px]">
         <Image src={"/images/vector.svg"} alt="sorry" width={12} height={12}/>
          <span className="font-bold text-sm font-Mostserrat text-[#23A6F0] "><Link href={""}>Login / Register </Link></span>
           <Link href={""} ><HiMagnifyingGlass className="text-[#23A6F0] " /></Link>  
          <span className="flex text-[#23A6F0]"> <Link href={""} ><BsCart className="text-[#23A6F0]" /></Link>1</span>
          <span className="flex text-[#23A6F0]"><Link href={""}><CiHeart className="text-[#23A6F0]" /></Link>1</span>
      
       </div>

   
   
   
   
    </div>
    </div>


  );
}



