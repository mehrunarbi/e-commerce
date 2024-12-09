import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div className="h-[716px] mt-[100px]">

        <Image src={"/images/hero-product.svg"} alt="sorry" width={1360} height={716}/>
      
    </div>
  )
}

export default Hero;


