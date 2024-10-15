import Image from "next/image";
import { FC } from "react";

interface ProductListsProps {
  key: number;
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
  key,
  title,
  description,
  bgImage,
  bgColor,
  product,
}) => {
  return (
    <div
      key={key}
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
        <div className="flex flex-col gap-[20px] px-[20px] md:grid md:grid-cols-4 md:gap-[30px] md:mx-auto md:max-w-[1600px] z-10">
          {product.map((prod, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-[20px] bg-main-white p-[40px] rounded-[30px] min-h-[210px]"
            >
              <div className="w-auto h-[32px]">
                <Image
                  src={prod.image}
                  alt="product detail 1"
                  width={200}
                  height={32}
                  className="w-auto h-[32px]"
                />
              </div>
              <p className="text-[16px] md:text-[18px] pb-[24px]">
                {prod.description}
              </p>
            </div>
          ))}
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
