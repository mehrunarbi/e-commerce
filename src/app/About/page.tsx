import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaHooli } from "react-icons/fa";
import { FaLyft } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import Lightnavbar from "@/components/Lightnavbar";


const About = () => {
  return (
    <div>
     <div className="w-full h-[729px] bg-[#FFFFFF] mt-[100px]">
    
      <Lightnavbar/>

        <div className="w-[1050px] h-[545px] ml-[195px] flex">
          <div className="w-1/2 h-[321px] mt-[104px]">
           <h5 className="text-base font-bold font-Montserrat">ABOUT COMPANY</h5>
            <h1 className="text-[58px] font-bold font-Montsrrat pt-[30px]">ABOUT US</h1>
             <h4 className="text-xl font-normal font-Montserrat text-[#737373] w-[376px] pt-[30px]">We know how large objects will act, 
              but things on a small scale</h4>
            <button className="w-[195px] h-[52px] mt-[30px] text-sm font-bold font-Montserrat bg-[#23A6F0] text-[#FFFFFF] rounded-md text-center">Get Quote Now</button>
        </div>
        {/* Right side*/}
        <div className="w-1/2">
        <Image src={"/images/girl.svg"} alt="image" width={500} height={300}/>
        </div>
       </div>
      </div>
      {/*Left Side*/}
     <div className="w-[1440px] h-[236px] ml-[195px] flex gap=[29px]">
     <div className="w-[394px] h-[188px]">
      <p className="font-normal text-sm text-[#E74040] font-Monserrat pt-[30px]">Problems trying</p>
       <h3 className="pt-[20px] font-bold text-2xl font-Monserrat text-[#252B42] "> Met minim Mollie non desert 
         Alamo est sit cliquey dolor      
          do met sent.</h3>
        </div>
      <div className="w=[529px] h-[90px] mt-[60px] ml-[195px]">
       <p className="text-sm font-normal line height-20px text-[#737373] font-Monserrat">
         Problems trying to resolve the conflict between    
         the two major realms of</p> 
         <p className="text-sm font-normal line height-20px text-[#737373] font-Monserrat">Classical physics: Newtonian mechanics
          </p>
     </div>
    </div>
    <div className="w-[1440px] h-[264px] bg-[#FFFFFF]">
    <div className="w-[1050px] h-[264px] ml-[195px] flex gap-[90px]">
      <span>
        <h1 className="text-[58px] font-bold text-[#252B42] text-center text-Montserrat">15K</h1>
        <h5 className="text-[#737373] text-base text-center text-Montserrat">Happy Customers</h5>
      </span>

      <span>
        <h1 className="text-[58px] font-bold text-[#252B42] text-center text-Montserrat">150K</h1>
        <h5 className="text-[#737373] text-base text-center">Monthly Visitors</h5>
      </span>
      <span>
        <h1 className="text-[58px] font-bold text-[#252B42] text-center text-Montserrat">15</h1>
        <h5 className="text-[#737373] text-base text-center text-Montserrat">Countries  Worldwide</h5>
      </span>

      <span>
       <h1 className="text-[58px] font-bold text-[#252B42] text-center text-Montserrat">100+</h1>
       <h5 className="text-[#737373] text-base text-center text-Montserrat">Top Partners</h5>
      </span>
       </div>
  </div>
   {/*Vedio Section*/}
   <div className="w-[full] h-[600px] ml-[200px] bg-[#FFFFFF]">
    <Image src={"/images/video-card.svg"} alt="image"width={900} height={500}/>
   </div>
   {/*Team Section*/}
   <div className="w-full h-[650px] bg-[#FFFFFF]">
    <div className="w-[1050px] h-[819px]">
      <div className="w-[607px] h-[100px] ml-[350px] ">
        <h1 className="text-[40px] font-bold font-Montserrat text-center">Meet Our Team</h1>
        <p className="text-sm font-normal text-[#737373] text-Montserrat text-center">Problems trying to resolve the conflict between </p>
         <p className="text-sm font-normal text-[#737373] text-Montserrat text-center">the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
  
    <div className="w-[1034px] h-[389px] mt-[100px] ml-[200px]  flex gap-[30px]">
    <div className="w-[316px] h-[389px] ">
      <Image src={"/images/media.svg"} alt="sorry" width={316} height={231}/>
      <div className="[316px] -[152px] p-[30px]">
        <h5 className="text-base font-bold text-[#252B42] font-Montserrat text-center">Username</h5>
        <h6 className="text-sm font-bold text-[#737373] font-Montserrat text-center pt-[10px]">Profession</h6>
        <span className="flex gap-[15px] items-center justify-center text-blue-800 pt-[10px] ">
          <Link href={""}><FaFacebook /></Link>
         <Link href={""}><FaInstagram /></Link>
          <Link href={""}><TbBrandTwitterFilled /></Link>
        </span>
        </div>
       </div>
 
   <div className="w-[316px] h-[389px] ">
      <Image src={"/images/media-two.svg"} alt="sorry" width={316} height={231}/>
      <div className="[316px] -[152px] p-[30px]">
        <h5 className="text-base font-bold text-[#252B42] font-Montserrat text-center">Username</h5>
        <h6 className="text-sm font-bold text-[#737373] font-Montserrat text-center pt-[10px]">Profession</h6>
        <span className="flex gap-[15px] items-center justify-center text-blue-800 pt-[10px] ">
          <Link href={""}><FaFacebook /></Link>
          <Link href={""}> <FaInstagram /></Link>
          <Link href={""}><TbBrandTwitterFilled /></Link>
        </span>
        </div>
       </div>
   
   <div className="w-[316px] h-[389px] ">
      <Image src={"/images/media-three.svg"} alt="sorry" width={316} height={231}/>
      <div className="[316px] -[152px] p-[30px]">
        <h5 className="text-base font-bold text-[#252B42] font-Montserrat text-center">Username</h5>
        <h6 className="text-sm font-bold text-[#737373] font-Montserrat text-center pt-[10px]">Profession</h6>
        <span className="flex gap-[15px] items-center justify-center text-blue-800 pt-[10px] ">
          <Link href={""}><FaFacebook /></Link>
          <Link href={""}><FaInstagram /></Link> 
          <Link href={""}><TbBrandTwitterFilled /></Link>
        </span>
        </div>
       </div>
   </div>
  
  </div>
  </div>
{/*Compneies Logo Section*/}
  <div className="w-full h-[450px] bg-[#FAFAFA]">
    <div className="w-[1050px] h-[479px] ml-[195px] ">
      <div className="w-[864px] h-[120px] pt-[50px]">
        <h2 className="text-[40px] font-bold font-Montserrat text-[#252B42] text-center">Big Companies Are Here</h2>
        <p className="font-normal text-sm text-[#737373] text-center">Problems trying to resolve the conflict between</p> 
        <p className="font-normal text-sm text-[#737373] text-center"> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="w-[1054px] h-[175px] pt-[70px] pb-[50px] flex gap-[10px] items-center">
    
        <FaHooli className="w-[180px] h-[50px] text-[#737373]" />
        <FaLyft className="w-[146px] h-[59px] text-[#737373]" />
        <Image src={"/images/leaf.svg"} alt="image" width={102} height={75}/>
        <FaStripe className="w-[170px] h-[50px] text-[#737373]" />
       <FaAws className="w-[151px] h-[62px] text-[#737373]" />
       <Image src={"/images/robot.svg"} alt="image" width={60} height={50}/>
       </div>
    </div>
    </div>
    {/*WORK WITH US*/}
    <div className="w-full h-[637px] flex">
      <div className="w-[700] h-[637px] bg-[#2A7CC7]">
      <div className="w-[438px] h-[238px] ml-[100px] mt-[250px]">
        <h5 className=" text-base font-bold text-[#FFFFFF]">WORK WITH US</h5>
        <h2 className=" text-[40px] font-bold text-[#FFFFFF] font-Montserrat">Now Let’s grow Yours</h2>
        <p className=" text-sm font-normal text-[#FFFFFF] text-Monyserrat">The gradual accumulation of information about atomic</p> 
        <p className=" text-sm font-normal text-[#FFFFFF] text-Monyserrat" >and small-scale behavior during the first quarter of the 20th </p>
        <button className="w-[132px] h-[52px] mt-[10px] border-[1px] border-[#FAFAFA] rounded-md text-sm font-bold text-[#FAFAFA] py-[15px] px-[40px]">Button</button>
      </div>
      </div>
      <div className="w-[600px] h-[637px]">
      <Image src={"/images/unsplash.svg"} alt="sorry" width={590} height={640}/>
      </div>
    </div>



  </div>
  )
}

export default About;

