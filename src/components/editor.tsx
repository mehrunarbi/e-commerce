 import Image from "next/image";

const Editor= () => {
  return (
        <div className="w-[full] h-[770px] bg-[#FAFAFA]">

         <div className="w-[1050px] h-[770px] pt-[80px] pb-[80px] ">

           <div className="w-[607px] h-[62px] ml-[400px]">
            <h4 className="text-xl font-normal text-[#737373] font-Montserrat text-center">Featured Products</h4>
            <h3 className="font-bold text-2xl text-[#252B42] text-center">EDITOR’S PICK</h3>
            <p className="text-sm font-normal text-[#737373] font-Montserrat text-center">Problems trying to resolve the conflict between </p>
        </div>

        <div className="w-[1050px] h-[500px] mt-[50px] ml-[200px] flex gap-[10px]">
          <Image src={"/images/card-one.svg"} alt="sorry" width={500} height={500}/>
          <Image src={"/images/card-two.svg"} alt="sorry" width={240} height={500}/>
        
          <div className="flex flex-col">
          <Image src={"/images/card-three.svg"} alt="sorry" width={240} height={442}/>
          <Image src={"/images/card-four.svg"} alt="sorry" width={240} height={442}/>
        </div>
         </div>
        
       
       
       
       
       
        </div>
        </div>
    
    
  )
}

export default Editor;
