 import Image from "next/image"

const Summer = () => {
  return (
    <div className="w-[1439px] h-[500px] flex">
        <div className="w-[704px] h-[682px] pl-[100px]">
         <Image src={"/images/hero-cover.svg"} alt="sorry" width={704} height={682}/>

        </div>
        <div className="w-[1/2] h-[682px] mr-[200px] mt-[200px] ml-[80px]">
        <h5 className="text-base font-bold text-[#BDBDBD]">SUMMER 2020</h5>
        <h2 className="font-bold text-[48px] font-Montserrat text-[#252B42]">Part of the Neur                              
            Universe</h2>
            <h4 className="font-normal text-xl text-[#737373]">We know how large objects will act, 
            but things on a small scale.</h4>
            <div className="w-[339px] h-[52px] flex gap-[30px] mt-[20px]">
                <button className="w-[152px] h-[50px] text-sm font-bold text-[#FFFFFF] bg-[#2DC071] rounded-md">BUY NOW</button>
                <button className="w-[173px] h-[52px] border-[1px] text-[#2DC071] text-sm font-bold rounded-md">READ MORE</button>
            </div>
        </div>
      
   
   
   
    </div>
  )
}

export default Summer
