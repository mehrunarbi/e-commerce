import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";




const Footer = () => {
  return (
    <div className="w-[full] h-[488px] bg-[#FAFAFA]">
        <div className="w-[full] h-[142px]">
            <div className="w-[1049px] h-[58px] py-[40px] pl-[100px] flex">
                <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
             <div className="flex flex-row pl-[800px] gap-[15px] items-center justify-left">  
              <Link href={""} ><CiFacebook className="text-blue-600 w-[24px] h-[24px]"/></Link> 
                <Link href={""}><FaInstagram className="text-blue-600 w-[24px] h-[24px]" /></Link>
                <Link href={""}><FiTwitter className="text-blue-600 w-[24px] h-[24px]" /></Link>
                </div>
                </div>
              </div>
              <div className="w-[1440px] h-[272px] pl-[100px]">
                <div className="w-[148px] h-[170px]">
                <a href="" > <h5 className="font-bold text-base text-[#252B42]">Company Info</h5></a>  
                <a href="" ><p className="text-sm font-bold text-[#737373]">About Us</p></a>
                <a href="" ><p className="text-sm font-bold text-[#737373]">Carrier</p></a> 
                <a href="" ><p className="text-sm font-bold text-[#737373]">We are hiring</p></a>  
                <a href="" ><p className="text-sm font-bold text-[#737373]">Blog</p></a>  
                </div>-
              </div>
      
 </div>
  )
}

export default Footer
