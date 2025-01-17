import Image from 'next/image';

const Hero = () => {
  return (

  


    <div className="relative ">
      <Image
        src="/images/hero-product.svg"
        alt="Image "
        width={800}
        height={500}
        objectFit="cover"  // Ensure the image maintains the aspect ratio
        className="w-full h-full object-cover"
      />
    </div>











  )
}

export default Hero;


