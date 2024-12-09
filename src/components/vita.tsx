import Image from "next/image";

const Vita = () => {
  return (
    <div className="w-[1440px] h-[709px] mt-[50px] bg-[#23856D]">
      <div className="w-[1049px] h-[599px] flex">
        <div className="w-[1/2] h-[599px] mt-[110px] ml-[100px] pt-[100px]">
        <h4 className="font-normal text-xl text-[#FFFFFF] font-Montserrat pt-[20px]">SUMMER 2020</h4>
        <h1 className="text-[58px] font-bold font-Montserrat text-[#FFFFFF]">Vita Classic 
            Product</h1>
        <p className="font-normal text-sm text-[#FFFFFF]">We know how large objects will act, We know how are objects will act, We know</p>
          <div className="w-[295px] h-[52px] flex gap-[34px] mt-[50px]">
             <h3 className="text-2xl font-bold text-[#FFFFFF] flex">$16.48</h3> 
             <button className=" w-[184px] h-[52px] py-[15px] px-[40px] rounded-md font-bold text-sm text-[#FFFFFF] bg-[#2DC071]">ADD TO CART</button>
            </div>
        </div>


        <div className="w-[1/2] h-[599px] flex gap-[30px] mt-[110px]">
        <Image src={"/images/man.svg"} alt="next-image" width={510} height={685}/>
        </div>
     
     
     
     
      </div>
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Vita;
