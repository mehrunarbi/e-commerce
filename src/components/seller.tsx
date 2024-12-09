import Image from "next/image";

const Seller = () => {
  return (
    <div className="h-[1300px] bg-[#FFFFFF]">
        <div className="w-[692px] h-[102px] ml-[400px] mt-[50px]">
            <h4 className="text-xl font-normal font-Montserrat text-center text-[#737373]">Featured Products</h4>
            <h3 className="text-bold text-2xl font-Montserrat text-center text-[#252B42]">BESTSELLER PRODUCTS</h3>
            <p className="text-sm text-normal font-Montserrat text-center text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
           
            
            <div className="w-[1049px] h-[615px] ml-[150px] flex gap-[30px]">
              <div className="w-[239px] h-[615]"> 
                 <Image src={"/images/seller-one.svg"} alt="next-image" width={239} height={247}/>
               <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
            <p className="text-center font-sm text-base font-Montserrat text-[#737373]"><a href="">English Department</a></p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
             </div>
               <div className="w-[239px] h-[615]">
                <Image src={"/images/seller-two.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
            <p className="text-center font-sm text-base font-Montserrat text-[#737373]"><a href="">English Department</a></p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
               </div>
                </div>
                <div className="w-[239px] h-[615]">
                <Image src={"/images/seller-three.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
                   <p className="text-center font-sm text-base font-Montserrat text-[#737373]"><a href="">English Department</a></p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
                </div>
                <div className="w-[239px] h-[615]">
                <Image src={"/images/seller-four.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
                   <p className="text-center font-sm text-base font-Montserrat text-[#737373]">English Department</p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
               </div>
        </div>

        <div className="w-[1049px] h-[615px] ml-[150px] flex gap-[30px]">
            <div className="w-[239px] h-[615]">
                <Image src={"/images/product-one.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
                   <p className="text-center font-sm text-base font-Montserrat text-[#737373]">English Department</p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
                </div>
                <div className="w-[239px] h-[615]">
                <Image src={"/images/product-two.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
                   <p className="text-center font-sm text-base font-Montserrat text-[#737373]">English Department</p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
                </div>

                <div className="w-[239px] h-[615]">
                <Image src={"/images/product-three.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
                 <p className="text-center font-sm text-base font-Montserrat text-[#737373]"><a href="">English Department</a></p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
                </div>

                <div className="w-[239px] h-[615]">
                <Image src={"/images/product-four.svg"} alt="next-image" width={239} height={247}/>
                <div className="w-[239px] h-[166px] pt-[25px] pb-[35px] ">  
                   <h3 className="text-center font-bold text-base font-Montserrat text-[#252B42]">Graphic Design</h3>
         <p className="text-center font-sm text-base font-Montserrat text-[#737373]"><a href="">English Department</a> </p> 
                 <p className="text-center font-bold text-base font-Montserrat text-[#23856D]">$16.48</p> 
              </div>
                </div>









        </div>
    
    </div>
  )
}

export default Seller;
