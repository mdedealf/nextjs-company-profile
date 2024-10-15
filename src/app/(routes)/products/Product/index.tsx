// import Carousel from "@/components/Carousel/Carousel";
import SwiperCards from "@/components/ui/SwiperCards";
import { PRODUCTS_LISTS } from "@/constant/productsLists";
import Image from "next/image";
import { FC } from "react";

const Product: FC = () => {
  return (
    <div className="flex mt-[80px] mb-[180px] w-full px-[20px] lg:px-[40px] 2xl:px-[180px]">
      <SwiperCards>
        {PRODUCTS_LISTS.map((product, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: product.bgBottom }}
            className="flex flex-col min-h-[440px] min-w-auto max-w-auto md:max-w-auto rounded-[30px]"
          >
            <div
              style={{ backgroundColor: product.bgTop }}
              className="flex flex-col items-start gap-[12px] p-[32px] rounded-[30px] min-h-[272px]"
            >
              {product.images.map((image) => (
                <div key={image} className="h-[32px] w-auto">
                  <Image
                    src={image}
                    alt={image}
                    width={100}
                    height={32}
                    className="h-[32px] w-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center pt-[16px] pb-[32px] gap-[6px]">
              <h3 className="text-[24px] font-bold text-main-white">
                {product.title}
              </h3>
              <p className="text-[16px] font-light text-center text-main-white px-[20px]">
                {product.descriptions}
              </p>
            </div>
          </div>
        ))}
      </SwiperCards>
    </div>
  );
};

export default Product;
