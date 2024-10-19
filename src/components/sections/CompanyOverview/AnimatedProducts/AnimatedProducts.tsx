import Button from "@/components/ui/Button";
import { PRODUCTS_LISTS } from "@/constant/productsLists";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const AnimatedProducts: FC = () => {
  return (
    <div className="hidden md:block banner bg-main-white">
      <div
        className="slider"
        style={
          {
            "--quantity": PRODUCTS_LISTS.length,
          } as CSSProperties
        }
      >
        {PRODUCTS_LISTS.map((product, idx) => (
          <div
            key={idx}
            className="item"
            style={
              {
                backgroundColor: product.bgBottom,
                "--position": idx + 1,
              } as CSSProperties
            }
          >
            <div
              style={{
                backgroundColor: product.bgTop,
              }}
              className="flex flex-col items-start gap-[8px] p-[22px] rounded-[30px] min-h-[150px]"
            >
              {product.images.map((image) => (
                <div key={image} className="h-[16px] w-auto">
                  <Image
                    src={image}
                    alt={image}
                    width={160}
                    height={16}
                    priority={true}
                    className="h-[16px] w-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center pt-[6px] pb-[32px] gap-[6px]">
              <h3 className="text-[16px] font-bold text-main-white">
                {product.title}
              </h3>
              <p className="text-[12px] font-light text-center text-main-white px-[20px]">
                {product.descriptions}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="content">
        <div className="flex flex-col w-full items-center gap-[12px] pt-[40px] md:pt-[80px] pb-[60px]">
          <h2 className="text-[26px] md:text-[48px] font-bold text-center mx-[20px] text-main-black">
            We build products that runs nation
          </h2>
          <Button>
            <Link href="/about-us">See more products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProducts;
