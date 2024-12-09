import Image from "next/image"
import { BsTelephone } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";





import Link from "next/link";

export default function Header() {
  return (
    <div className=" w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
           <BsTelephone />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <ImMail2 />
          <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
         <a href="" ><Image src={"/images/a.svg"} alt="next-image"width={26} height={26} /></a> 
          <Image src={"/images/y.svg"} alt="next-image"width={26} height={26} />
          <Image src={"/images/f.svg"} alt="next-image"width={26} height={26} />
          <Image src={"/images/t.svg"} alt="next-image"width={26} height={26} />
          
          </div>
        </div>
      </div>

    <div className="flex justify-between items-center w-full h-full py-[60px] bg-[#FFFFFF] ">
      {/* Left section: Contact Info */}
      <div className="flex gap-[10px] px-[38px]">
         <span className="font-Montserrat font-bold text-2xl text-[#252B42]"> Bandage</span>
      </div>
       {/* Center section: Follow Us */}
      <div className="w-[361px] h-[25px] pr-[400px]   ">
        <ul className="flex items-center justify-center gap-[20px]">
          <li className="font-bold text-sm font-Mostserrat">Home</li>
          <li className="font-bold text-sm font-Mostserrat">Shop</li>
          <li className="font-bold text-sm font-Mostserrat">About</li>
          <li className="font-bold text-sm font-Mostserrat">Blog</li>
          <li className="font-bold text-sm font-Mostserrat">Contact</li>
          <li className="font-bold text-sm font-Mostserrat">Pages</li>
        </ul>
      </div>
      <div className="w-[324px] h-[54px] flex items-center justify-center gap-[20px]">
         <Image src={"/images/vector.svg"} alt="sorry" width={12} height={12}/>
         <span className="font-bold text-sm font-Mostserrat text-[#23A6F0] ">Login / Register</span>
        <Link href={""} ><HiMagnifyingGlass className="text-[#23A6F0] " /></Link>  
          <span className="flex text-[#23A6F0]"> <Link href={""} ><BsCart className="text-[#23A6F0]" /></Link>1</span>
          <span className="flex text-[#23A6F0]"><Link href={""}><CiHeart className="text-[#23A6F0]" /></Link>1</span>
      
      
       </div>

   
   
   
   
    </div>
    </div>


  );
}



