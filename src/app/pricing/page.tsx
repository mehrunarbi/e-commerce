import Lightnavbar from '@/components/Lightnavbar';
import Link from 'next/link';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoEllipse } from "react-icons/io5";
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '@/components/Footer';








const Pricing = () => {
  return (
  
       <div>
        <div className="w-[1440px] h-[1162px] bg-[#FAFAFA]">
        <div className="w-[1050px] h-[1600px]  ml-[195px] ">
        
         <div className="w-[1440px] h-[352px] bg-[#FFFFFF80]">
          <Lightnavbar/>
           <div className="w-[870px] h-[280px]  ml-[285px] mt-[104px]">
            <div className="w-[427px] h-[180px]">
            <h5 className="text-base font-bold text-[#737373] font-Montserrat text-center">PRICING</h5>
            <h1 className="text-[55px] font-bold text-[#252B42] text-Montserrat   ">Simple Pricing</h1>
             <span className="w-[134px] h-[44px] ml-[150px] flex gap-[15px]">
                <p className="text-sm font-bold text-[#252B42] text-center"><Link href="/">Home</Link></p>
                 <p className="pt-[5px]"><MdOutlineArrowForwardIos className="text-[#BDBDBD]" /></p> 
               <h6 className="text-base font-bold text-[#737373] text-Montserrat text- center">Pricing</h6>
                </span>   
                 </div>
                 </div>
                 </div>
            
                           
                              
           <div className="w-[633px] h-[100px] ml-[180px] mt-[20px]">
            <h2 className=" text-[40px] font-bold text-[#252B42] text-center ">Pricing</h2>
            <p className="pl-[150px] font-normal text-sm text-[#737373] font=Montserrat">Problems trying to resolve the conflict between</p>
            <p className="pl-[100px] font-normal text-sm text-[#737373] font=Montserrat">the two major realms of Classical physics: Newtonian mechanics </p>
            </div> 
            <div className="w-[311px] h-[44px] ml-[400px] mt-[40px] flex flex-row gap-[5px]">
               <h5 className="text-base font-bold text-[#252B42] font- Montserrat">Monthly</h5>
             <span className="pt-[5px]"><Image src={"/images/form-input.svg"} alt="sorry" width={25} height={25}/></span>
               <h5 className="text-base font-bold text-[#252B42] font=Montserrat">Yearly</h5>
               <button className="w-[80px] h-[24px] rounded-full border-2 text-base font-bold text-[#23A6F0]">Save25%</button>  
            </div>
                    {/*Cards*/}
                    
           <div className="w-[985px] h-[704px] ml-[40px]  flex">
            <div className="flex flex-row">
            <div className="w-[327px] h-[300px] mt-[60px] border-2 border-blue-500 bg-[#FFFFFF] rounded-lg  ">
              <span className="w-[64px] h-[32px]">
                <h3 className=" pl-[120px] pt-[50px] text-2xl font-bold text-[#252B42]">FREE</h3>
                </span>
                <span>
                <h5 className="pl-[80px] pt-[20px] text-base font-bold text-[#737373] font-Montserrat">Organize across all </h5>
              <h5 className="pl-[100px] text-base font-bold text-[#737373] font-Montserrat ">apps by hand</h5>
              </span>
                 <div className="flex "><h2 className=" pl-[100px] text-[40px] font-bold font-Montserrat text-[#23A6F0]">0</h2>
                <span className="w-[76px] h-[56px] pl-[10px] ">
                  <h3 className="text-2xl font-bold text-[#23A6F0] font-Montserrat">$</h3>
                  <h6 className="text-base font-bold text-[#8EC2F2] text-Montserrat ">PerMonth</h6>
                  </span>
                  </div>
                  <div className="w-[247px] h-[32px] pt-[40px] pl-[10px] flex items-center justify-center gap-[8px] ">
                  <FaCheckCircle  className="w-[30px] h-[30px] text-[#2DC071]"/>
                  <h6 className="text-sm font-bold text-[#252B42]">Unlimited product updates </h6>
                </div>
             </div>
                           {/*second card*/}
              <div className="w-[327px] h-[350px] mt-[20px] bg-[#252B42] border-2 border-blue-500 rounded-lg ">
              <span className="w-[139px] h-[32px]"><h3 className=" pl-[90px] pt-[50px] text-2xl font-bold text-[#FFFFFF]">STANDARD</h3>
                </span>
                <span>
                <h5 className="pl-[80px] pt-[20px] text-base font-bold text-[#FFFFFF] font-Montserrat">Organize across all </h5>
              <h5 className="pl-[100px] text-base font-bold text-[#FFFFFF] font-Montserrat ">apps by hand</h5>
              </span>
                 <div className="flex "><h3 className=" pl-[100px] pt-[20px] text-[40px] font-bold font-Montserrat text-[#23A6F0]">9.99</h3>
                <span className="w-[76px] h-[56px] pl-[8px] pt-[20px] ">
                  <h3 className="text-2xl font-bold text-[#23A6F0] font-Montserrat">$</h3>
                  <h6 className="text-base font-bold text-[#8EC2F2] text-Montserrat ">PerMonth</h6>
                  </span>
                  </div>
                  <div className="w-[247px] h-[32px] pt-[40px] pl-[10px] flex items-center justify-center gap-[8px] ">
                  <FaCheckCircle  className="w-[30px] h-[30px] text-[#2DC071]"/>
                  <h6 className="text-sm font-bold text-[#FFFFFF]">Unlimited product updates </h6>
                  </div>
                  <div className="w-[274px] h-[32px] mt-[40px] pl-[10px] flex items-center justify-center gap-[8px]">
                  <FaCheckCircle  className="w-[30px] h-[30px] text-[#2DC071]"/>
                  <h6 className="text-sm font-bold text-[#FFFFFF]">Unlimited product updates </h6>
                </div>
                </div>
            
                      {/*third Card*/}
             <div className="w-[327px] h-[300px] mt-[70px] border-2 border-blue-500 bg-[#FFFFFF] rounded-lg">
              <span className="w-[64px] h-[32px]">
                <h3 className=" pl-[120px] pt-[50px] text-2xl font-bold text-[#252B42]">FREE</h3>
                </span>
                <span>
                <h5 className="pl-[80px] pt-[20px] text-base font-bold text-[#737373] font-Montserrat">Organize across all </h5>
              <h5 className="pl-[100px] text-base font-bold text-[#737373] font-Montserrat ">apps by hand</h5>
              </span>
                 <div className="flex "><h2 className=" pl-[100px] text-[40px] font-bold font-Montserrat text-[#23A6F0]">0</h2>
                <span className="w-[76px] h-[56px] pl-[10px] ">
                  <h3 className="text-2xl font-bold text-[#23A6F0] font-Montserrat">$</h3>
                  <h6 className="text-base font-bold text-[#8EC2F2] text-Montserrat ">PerMonth</h6>
                  </span>
                  </div>
                  <div className="w-[247px] h-[32px] pt-[40px] pl-[10px] flex items-center justify-center  ">
                  <FaCheckCircle  className="w-[30px] h-[30px] text-[#2DC071]"/>
                  <h6 className="text-sm font-bold text-[#252B42]">Unlimited product updates </h6>
                </div>
             </div>
            </div>
            </div>
            </div>
        
          
            
          
           { /* <div className="w-[1440px] h-[365px] bg-[#FAFAFA] ">
              <div className="w-[1050px] h-[365px] ml-[195px] py-[80px]">
              <h4 className="text-normal text-xl font-Montserrat text-[#252B42] text-center">Trusted By Over 4000 Big Companies</h4>
                   <ul className=" py-[50px] flex gap-[30px]">  
                 <li><FaHooli className="w-[180px] h-[50px] text-[#737373]" /></li>     
                  <li><FaLyft className="w-[146px] h-[59px] text-[#737373]" /></li>     
                   <li><Image src={"/images/leaf.svg"} alt="image" width={102} height={75}/></li>    
                   <li> <FaStripe className="w-[170px] h-[50px] text-[#737373]" /></li>   
                   <li><FaAws className="w-[151px] h-[62px] text-[#737373]" /></li>   
                    <li><Image src={"/images/robot.svg"} alt="image" width={60} height={50}/></li>  
                      </ul>
                  </div>
             </div>
          */}
         </div>
        
          <div className="w-[1056px] h-[1037px] ml-[192px] py-[80px] bg-[#FFFFFF]">
            <div className="w-[1050px] h-[210px] py-[45px]">
           <span className="w-[262px] h-[50px]"><h2 className="text-[40px] font-bold text-[#252B42] font-Monterrat text-center">Pricing FAQs</h2></span>
           <span className="w-[552px] h-[60px]"><h4 className="text-xl font-nprmal text-[#737373] text-center">Problems trying to resolve the conflict between </h4>
               <h4 className="text-xl font-nprmal text-[#737373] text-center"> the two major realms of Classical physics</h4></span>  
              </div>
             
              <div className="w-[1056px] h-[159px] mt-[50px] flex">
                <div className="w-[491px] h-[159px] p-[25px] ">
              <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                </span>
                <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                   dolor do met sent. RELIT official consequent door ENIM 
                   RELIT Mollie. Excitation venial consequent sent 
                     nostrum met.
                     </p>
                 </div>
                 <div className="w-[535px] h-[139px] mt-[20px]">
                 <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                 <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                 </span>
                 <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                   dolor do met sent. RELIT official consequent door ENIM 
                   RELIT Mollie. Excitation venial consequent sent 
                     nostrum met.</p>
                    </div>
                    </div>
                     <div className="w-[1056px] h-[159px]  flex">
                    <div className="w-[491px] h-[159px] p-[25px] ">
                    <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                      <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                      </span>
                     <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                       dolor do met sent. RELIT official consequent door ENIM 
                        RELIT Mollie. Excitation venial consequent sent 
                         nostrum met.</p>
                 </div>
                 <div className="w-[535px] h-[139px] p-[25px]">
                   <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                   <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                   </span>
                     <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                   dolor do met sent. RELIT official consequent door ENIM 
                   RELIT Mollie. Excitation venial consequent sent 
                     nostrum met.</p>
                 </div>
               </div>
            

               <div className="w-[1056px] h-[159px]  flex">
                <div className="w-[491px] h-[159px] p-[25px] ">
              <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                </span>
                <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                   dolor do met sent. RELIT official consequent door ENIM 
                   RELIT Mollie. Excitation venial consequent sent 
                     nostrum met.
                     </p>
                 </div>
                 <div className="w-[535px] h-[139px] mt-[20px]">
                 <span className="flex gap-[10px]"> <MdOutlineArrowForwardIos className="w-[9px] h-[16px] text-[#23A6F0]" />
                 <h5 className="text-base font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                 </span>
                 <p className="text-sm font-normal text-[#737373] pl-[20px]">Met minim Mollie non desert Alamo est sit cliquey 
                   dolor do met sent. RELIT official consequent door ENIM 
                   RELIT Mollie. Excitation venial consequent sent 
                     nostrum met.</p>
                    </div>
                    </div>
                  <h4 className="text-xl font-normal text-[#737373] text-center">Haven’t got your answer? Contact our support</h4>
               </div> 
            
          
             <div className="w-[1050px] h-[602px] ml-[400px]">
              <div className="w-[607px] h-[282px]">
             <h2 className="text-xl font-bold text-center text-[#252B42]">Start your 14 days free trial</h2>
            <p className="text-sm font-normal text-[#737373] text-center pt-[30px]">Met minim Mollie non desert Alamo est sit cliquey dolor </p>
             <p className="text-sm font-normal text-[#737373] text-center"> do met sent. RELIT official consequent.</p>
             <button className="w-[186px] h-[52px] py-[15px] px-[40px] bg-[#23A6F0] ml-[200px] mt-[30px] text-sm font-bold text-[#FFFFFF]">Try it free now</button>
             <div className="w-[242px] h-[50px] ml-[170px] p-[10px] flex gap-[30px]">
             <FaTwitter className="w-[30px] h-[24px] text-blue-400" />
             <BiLogoFacebookSquare className="w-[30px] h-[30px] text-blue-950" />
             <IoLogoInstagram className="w-[30px] h-[30px]" />
             <FaLinkedin className="w-[30px] h-[30px] text-blue-700" />
       </div>
         </div>
            </div>

             <Footer/>
          
              
                
             
                          
  
      
          
  
</div>

  )
}

export default Pricing;
