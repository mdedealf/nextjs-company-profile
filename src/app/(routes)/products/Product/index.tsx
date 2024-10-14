import Carousel from "@/components/Carousel/Carousel";
import { PRODUCTS_LISTS } from "@/constant/productsLists";
import Image from "next/image";
import { FC } from "react";

const Product: FC = () => {
  return (
    <div className="md:flex mt-[80px] mb-[140px] w-full md:px-[180px]">
      <Carousel autoSlide={true} autoSlideInterval={8000}>
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
  );
};

export default Product;
