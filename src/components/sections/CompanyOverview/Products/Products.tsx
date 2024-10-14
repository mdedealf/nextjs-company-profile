import Carousel from "@/components/Carousel/Carousel";
import { PRODUCTS_LISTS } from "@/constant/productsLists";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Products: FC = () => {
  return (
    <div className="py-[40px] w-full">
      <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[40px]">
        <h2 className="text-[26px] md:text-[48px] font-semibold text-center mx-[20px]">
          We build products that nations run on
        </h2>
        <div className="bg-main-green text-main-white px-[24px] py-[12px] flex items-center justify-center rounded-[24px] font-semibold text-[18px]">
          <Link href="/products">View all products</Link>
        </div>
      </div>

      <div className="md:flex mt-[40px] w-full">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {PRODUCTS_LISTS.map((product, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: product.bgBottom }}
              className="flex flex-col sm:min-h-[410px] md:max-w-[380px] rounded-[30px]"
            >
              <div
                style={{ backgroundColor: product.bgTop }}
                className="flex flex-col items-start gap-[12px] p-[32px] rounded-[30px] min-h-[272px]"
              >
                {product.images.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={image}
                    width={120}
                    height={30}
                    className="h-[32px] w-auto"
                  />
                ))}
              </div>
              <div className="flex flex-col items-center pt-[16px] px-[16px] pb-[32px] gap-[6px]">
                <h3 className="text-[24px] font-bold text-main-white">
                  {product.title}
                </h3>
                <p className="text-[16px] font-light text-center text-main-white">
                  {product.descriptions}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
