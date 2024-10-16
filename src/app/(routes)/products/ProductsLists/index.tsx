import { FC } from "react";
import SwiperCards from "@/components/SwiperCards";
import Image from "next/image";

interface ProductListsProps {
  title: string;
  description: string;
  bgImage: string;
  bgColor: string;
  product: Product[];
}

interface Product {
  image: string;
  description: string;
}

const ProductLists: FC<ProductListsProps> = ({
  title,
  description,
  bgImage,
  bgColor,
  product,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="relative w-full h-auto rounded-t-[64px] mt-[-80px]"
    >
      <div className="relative z-10 flex flex-col gap-[20px] px-[20px] md:mx-auto md:max-w-[1600px] py-[80px]">
        <h2 className="text-[26px] md:text-[36px] font-bold text-main-black">
          {title}
        </h2>
        <p className="text-[14px] md:text-[18px] font-normal text-main-black">
          {description}
        </p>
      </div>
      <div className="relative z-10 w-full pb-[160px] rounded-t-[64px]">
        <div className="flex w-full gap-[20px] md:gap-[30px] z-10 px-[20px] lg:px-[40px] 2xl:px-[180px]">
          <SwiperCards slidesPerView={3} loop={true}>
            {product.map((prod, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-[20px] bg-main-white p-[40px] rounded-[30px] min-h-[210px]"
              >
                <div className="w-auto h-[32px] aspect-auto overflow-hidden">
                  <Image
                    src={prod.image}
                    alt="product detail"
                    width={200}
                    height={32}
                    priority={true}
                    className="w-auto h-[32px] object-cover"
                  />
                </div>
                <p className="text-[16px] md:text-[18px] pb-[24px]">
                  {prod.description}
                </p>
              </div>
            ))}
          </SwiperCards>
        </div>
      </div>
      <div className="absolute right-0 top-0 flex justify-end w-full h-auto">
        <Image
          src={bgImage}
          alt="product detail bg img"
          width={822}
          height={617}
        />
      </div>
    </div>
  );
};

export default ProductLists;
