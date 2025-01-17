import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";



const Featured = () => {
  return (
    <div className="w-[full] h-[750px] bg-[#FFFFFF] ">
      <div className="w-[1050px] h-[1044px] py-[112px]">
        <div className="w-[692px] h-[134px] ml-[300px]">
            <h6 className="text-sm font-bold text-[#23A6F0] text-center">Practice Advice</h6>
            <h2 className="font-bold text-[40px] text-[#252B42] text-center">Featured Posts</h2>
            <p className="text-sm font-normal text-[#737373] text-center">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
      
      <div className="w-[1045px] h-[606px] mt-[50px] flex gap-[15px]">

        <div className="w-[328px] h-[606px] pl-[100px]">
         <Image src={"/images/scene-one.svg"} alt="sorry" width={400} height={300}/>
         <div className="w-[348px] h-[306px] pr-[50px]">
            <span className="w-[159px] h-[16px] text-[#737373] text-xs font-normal">Google Trending New</span>
            <h4 className="font-normal text-xl text-[#252B42]">Loudest à la Madison #1 
            (L'integral)</h4>
            <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<div className="w=[298px] h-[46px] flex gap-[8px]">
 <span className="flex "><LuAlarmClock /> 22 April 2021</span>
 <span className=" flex"><FaChartArea />
 10 comments</span>

</div>   
 </div>
</div>

<div className="w-[328px] h-[606px] pl-[100px]">
         <Image src={"/images/scene-two.svg"} alt="sorry" width={400} height={300}/>
         <div className="w-[348px] h-[306px] pr-[50px]">
            <span className="w-[159px] h-[16px] text-[#737373] text-xs font-normal">Google Trending New</span>
            <h4 className="font-normal text-xl text-[#252B42]">Loudest à la Madison #1 
            (L'integral)</h4>
            <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<div className="w=[298px] h-[46px] flex gap-[8px]">
 <span className="flex "><LuAlarmClock /> 22 April 2021</span>
 <span className=" flex"><FaChartArea />
 10 comments</span>

</div>   
 </div>
</div>

<div className="w-[328px] h-[606px] pl-[100px]">
         <Image src={"/images/scene-three.svg"} alt="sorry" width={400} height={300}/>
         <div className="w-[348px] h-[306px] pr-[50px]">
            <span className="w-[159px] h-[16px] text-[#737373] text-xs font-normal">Google Trending New</span>
            <h4 className="font-normal text-xl text-[#252B42]">Loudest à la Madison #1 
            (L'integral)</h4>
            <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<div className="w=[298px] h-[46px] flex gap-[2px]">
 <span className="flex "><LuAlarmClock /> 22 April 2021</span>
 <span className=" flex"><FaChartArea />
 10 comments</span>

</div>   
 </div>
</div>
<div className="w-[328px] h-[606px] pl-[100px]">
         <Image src={"/images/scene-four.svg"} alt="sorry" width={400} height={300}/>
         <div className="w-[348px] h-[306px] pr-[50px]">
            <span className="w-[159px] h-[16px] text-[#737373] text-xs font-normal">Google Trending New</span>
            <h4 className="font-normal text-xl text-[#252B42]">Loudest à la Madison #1 
            (L'integral)</h4>
            <p>We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</p>
<div className="w=[298px] h-[46px] flex gap-[8px]">
 <span className="flex "><LuAlarmClock /> 22 April 2021</span>
 <span className=" flex"><FaChartArea />
 10 comments</span>

</div>   
 </div>
</div>



     
     
     
     
     
     
     
     
     
     
     
     
      </div>
    
    
    
    
    
    
    
    
    </div>
    </div>
  )
}

export default Featured;
