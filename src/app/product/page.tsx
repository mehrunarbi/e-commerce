import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-[92px] py-[24px] px-[35px] bg-[#FAFAFA] flex gap-[15px]">
        <Link className="text-sm font-bold " href="">
          Home
        </Link>
        <h6 className="text-[#BDBDBD] text-sm font-bold">Shop</h6>
      </div>
      <div className="w-full h-[1086px] bg-[#FAFAFA]">
        <div className="w-[1124px] h-[1086px] ml-[195px] py-[48px]">
          <h3 className="text-2xl font-bold text-[#252B42] texy-center">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-[1049px] h-[442px] mt-[10px] flex gap-[30px]">
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-one.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-two.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/fixed-height.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-three.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
          </div>

          <div className="w-[1049px] h-[442px] mt-[20px] flex gap-[30px]">
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-four.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-five.svg"}
                alt="sorry"
                width={239}
                height={280}
              />

              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>

            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-six.svg"}
                alt="sorry"
                width={239}
                height={280}
              />
              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
            <div className="w-[238px] h-[442px]">
              <Image
                src={"/images/pcover-seven.svg"}
                alt="sorry"
                width={239}
                height={280}
              />
              <div className="w-[239px] h-[162px] bg-white">
                <h5 className="text-base font-bold text-[#252B42] pt-[10px] pl-[20px]">
                  Graphic Design
                </h5>
                <Link
                  href=""
                  className="text-sm font-bold text-[#737373]  pt-[10px] pl-[20px]"
                >
                  English Department
                </Link>
                <h5 className="text-base font-bold text-[#23856D]  pt-[10px] pl-[20px]">
                  $16.48
                </h5>
              </div>
            </div>
          
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Product;
