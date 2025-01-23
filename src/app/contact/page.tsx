import Lightnavbar from '@/components/Lightnavbar'
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import { LuPhone } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import Footer from '@/components/Footer';


const Contact = () => {
  return (
  <div className="h-screen">
    <div className="w-full h-[800px] bg-[#FFFFFF]">
     <Lightnavbar/> 

     <div className="w-[1050px] h-[742px] ml-[195px] flex">
               <div className="w-1/2 h-[321px] mt-[104px]">
                <h5 className="text-base font-bold font-Montserrat text-[#252B42]">CONTACT US</h5>
                 <h1 className="text-[58px] font-bold text-[#252B42] font-Montserrat pt-[30px]">Get in touch 
                 today!</h1>
                  <h4 className="text-xl font-normal font-Montserrat text-[#737373] w-[376px] pt-[30px]">We know how large objects will act, 
                   but things on a small scale</h4>
                   <h3 className=" pt-[20px] text-xl font-bold text-[#252B42] text-Montserrat ">Phone ; +451 215 215 </h3>
                <h3 className="pt-[20px] text-xl font-bold text-[#252B42] text-Montserrat ">Fax : +451 215 215</h3>
                <span className="w-[242px] h-[50px]  pt-[10px] flex gap-[30px]">
              <Link href=""><FaTwitter className="w-[30px] h-[24.29px]" /></Link>    
             <Link href=""><FaFacebook className="w-[30px] h-[30px]" /></Link>   
             <Link href="" ><FaInstagram className="w-[30px] h-[30px]" /></Link>   
             <Link href="" ><FaLinkedin className="w-[30px] h-[29.88px]" /></Link>  
           </span>
             </div>
             {/* Right side*/}
             <div className="w-1/2">
             <Image src={"/images/none.svg"} alt="image" width={500} height={300}/>
             </div>
    </div>
    </div>
    <div className="w-full h-[800px] bg-[#FFFFFF]">
     <div className="w-[1050px] h-[841px] ">
       <div className="w-[633px] h-[134px] ml-[400px] py-[80px]">
         <h6 className="text-sm font-bold font-Montserrat text-center text-[#252B42]">VISIT OUR OFFICE</h6>
         <h2 className="font-bold text-[40px] font-Montserrat text-[#252B42] text-center">We help small businesses</h2> 
          <h2 className="font-bold text-[40px] font-Montserrat text-[#252B42] text-center"> with big ideas</h2>
       </div>
       <div className="w-[985px] h-[403px]  flex">
         <div className="w-[327px] h-[343px] mt-[200px] ml-[300px] bg-[#FFFFFF]">
         <LuPhone className="w-[72px] h-[72px] ml-[30px] text-[#23A6F0]"/>
         <div className="w-[216px] h-[48px] mt-[10px] mr-[50px] ">
         <h6 className="text-sm font-bold text-[#252B42] font-Montserrat text-center">georgia.young@example.com</h6>
         <h6 className="text-sm font-bold text-[#252B42] font-Montserrat text-center">georgia.young@ple.com</h6>
          <h5 className=" text-sm font-bold text-center font-Montserrat text-[#252B42] pt-[10px] ">Get Support</h5>
          </div>
         <button type="submit" className="w-[189px] h-[54px] mt-[30px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] hover:bg-blue-700 rounded-full">
             <h6 className="text-xs font-bold text-[#23A6F0] text-center font- Montserrat">Submit Request</h6></button>
         </div>

         <div className="w-[328px] h-[403px] mt-[100px] py-[50px] px-[40px] bg-[#252B42]">
         <FaLocationDot className="w-[51px] h-[67px] mt-[50px] ml-[90px] text-[#23A6F0]" />
         <div className="w-[216px] h-[48px] mt-[20px] ml-[20px] ">
         <h6 className="text-sm font-bold text-[#FFFFFF] font-Montserrat text-center">georgia.young@example.com</h6>
         <h6 className="text-sm font-bold text-[#FFFFFF] font-Montserrat text-center">georgia.young@ple.com</h6>
          <h5 className=" text-sm font-bold text-center font-Montserrat text-[#FFFFFF] pt-[10px] ">Get Support</h5>
          </div>
         <button type="submit" className="w-[189px] h-[54px] ml-[30px] mt-[30px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] hover:bg-white rounded-full">
             <h6 className="text-xs font-bold text-[#23A6F0] text-center font- Montserrat">Submit Request</h6></button>
         </div>
         
         
         <div className="w-[328px] h-[343px] mt-[200px] ml-[50px] bg-[#FFFFFF]">
         <IoIosMail className="w-[72px] h-[55px] ml-[80px] mt-[9px] text-[#23A6F0]" />
         <div className="w-[216px] h-[48px] mt-[10px] ml-[10px] ">
         <h6 className="text-sm font-bold text-[#252B42] font-Montserrat text-center">georgia.young@example.com</h6>
         <h6 className="text-sm font-bold text-[#252B42] font-Montserrat text-center">georgia.young@ple.com</h6>
          <h5 className=" text-sm font-bold text-center font-Montserrat text-[#252B42] pt-[10px] ">Get Support</h5>
          </div>
         <button type="submit" className="w-[189px] h-[54px] ml-[30px] mt-[30px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] hover:bg-blue-700 rounded-full">
             <h6 className="text-xs font-bold text-[#23A6F0] text-center font- Montserrat">Submit Request</h6></button>
         </div>
     </div>
   </div>
     </div>

     <div className="w-full h-[250px]   bg-[#FFFFFF]">
      <div className="w-[1050px] h-[348px] ml-[400px]">
      <PiArrowBendRightDownLight className="w-[100px] h-[70px] ml-[240px]   text-[#23A6F0]" />
      <div className="w-[607px] h-[188px]">
       <h5 className="text-base font-bold text-[#252B42] text-center font-Montserrst">WE Can't WAIT TO MEET YOU</h5>
       <h1 className="text-[58px] font-bold text-[#252B42] text-center font-Montserrat">Let’s Talk</h1>
       <button className="w-[186px] h-[52px] ml-[220px] py-[15px] px-[40px] bg-[#23A6F0] text-sm font-bold text-white">Try it free now</button>
       </div>
   </div>
   <Footer/>

     </div>




    </div>








  )
}

export default Contact;
