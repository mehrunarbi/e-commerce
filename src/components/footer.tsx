import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";




const Footer = () => {
  return (
    <div className="w-[full] h-[488px]">
        <div className="w-[full] h-[142px] bg-[#FAFAFA]">
            <div className="w-[1049px] h-[138px] ml-[135px] py-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-bold text-[#252B42] text-center">Bandage</h3>
             <div className="flex flex-row pl-[800px] gap-[15px]">  
              <Link href={""} ><FaFacebook className="text-blue-400 w-[24px] h-[24px]"/></Link> 
                <Link href={""}><FaInstagram className="text-blue-400 w-[24px] h-[24px]" /></Link>
                <Link href={""}><FaTwitter className="text-blue-400 w-[24px] h-[24px]" /></Link>
                </div>
                </div>
              </div>
              <div className="w-[full] h-[272px] ">
                <div className="w-[1050px] h-[270px] ml-[155px]">
                  <div className="w-[1041px] h-[170px] flex gap-[30px]">
                    
                <div className="w-[148px] h-[170px] mt-[40px]">
                <h5 className="font-bold text-base text-[#252B42]">Company Info</h5>  
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="/about">About Us</Link></p>
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Carrier</Link></p> 
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >We are hiring</Link></p>  
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Blog</Link></p> 
                 </div>

                 <div className="w-[152px] h-[170px] mt-[40px]">
                <h5 className="font-bold text-base text-[#252B42]">Legal</h5> 
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="/about">About Us</Link></p>
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Carrier</Link></p> 
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >We are hiring</Link></p>  
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Blog</Link></p> 
                 </div>

                 <div className="w-[148px] h-[170px] mt-[40px]">
                <h5 className="font-bold text-base text-[#252B42]">Features</h5>  
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="/about">Business Marketing</Link></p>
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >User Analytic</Link></p> 
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Live Chat</Link> </p>
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Unlimited Support</Link></p> 
                 </div>

                 <div className="w-[152px] h-[170px] mt-[40px]">
                 <h5 className="font-bold text-base text-[#252B42]">Resources</h5> 
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="/about">IOS & Android</Link></p>
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Watch a Demo</Link></p> 
                <p className=" pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >Customers</Link></p>  
                <p className="pt-[10px] text-sm font-bold text-[#737373]"><Link href="" >API</Link></p> 
                 </div>
                 
                 <div className="w-[321px] h-[131px] mt-[40px]">
                 <h5 className="font-bold text-base text-[#252B42]">Get In Touch</h5>
                 <div className="flex">  
                 <textarea id="email" className="boder-grey-300 p-2 w-[321] h-[40px] bg-[#E6E6E6] text-[#737373] text-xs font-normal pl-[20px] pt-[15px]" placeholder="Your Email"/>
                 <button type="submit"className="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-4">Subscribe</button>
                 </div>
                 <p className="  text-xs font-normal text-[#737373]">Lore imp sum dolor Amit</p> 
                 </div>
                 </div> 
                </div>
              </div>
      

             <div className="w-[1440px] h-[74px] pl-[155px] pt-[37px] bg-[#FAFAFA] ">
               <h6 className="text-sm font-bold text-[#737373] font-Montesrra  ">Made With Love By Finland All Right Reserved </h6>
              </div>

                




                


                
 </div>
  )
}

export default Footer
