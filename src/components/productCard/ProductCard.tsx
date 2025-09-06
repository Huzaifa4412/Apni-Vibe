import Image from "next/image";
import { Product } from "../../../Typing";
import Rating from "../Rating/Rating";
import Link from "next/link";

function ProductCard({ item }: { item: Product }) {
    const {
        image,
        name,
        rating,
        _id,
        price,
        discountPercent,
        discountedPrice,
    } = item;

    return (
        <Link href={`/ProductsPage/${_id}`}>
            <div
                id={_id}
                className="hover:shadow-xl p-2 grid justify-between overflow-hidden w-full max-w-[160px] sm:max-w-[230px]"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <Image
                    src={image}
                    alt={name}
                    width={160}
                    height={170}
                    className="mb-[5px] w-full h-[170px] sm:h-[240px] object-cover rounded-[16px] sm:rounded-[20px] object-center"
                    style={{
                        transform: "translateZ(40px)",
                    }}
                />
                <h3 className="font-bold text-[14px] sm:text-[18px] capitalize">
                    {name}
                </h3>
                <div className="rating flex gap-[6px] sm:gap-[8px]">
                    <Rating rating={rating || 5} />
                </div>
                <div className="price flex gap-[6px] sm:gap-[10px] items-center">
                    <h3 className="text-[16px] sm:text-[20px] font-bold">
                        Rs {discountedPrice || price}
                    </h3>
                    {discountPercent && discountPercent > 0 && (
                        <div className="discount flex gap-[6px] sm:gap-[10px] items-center">
                            <h3 className="text-[14px] sm:text-[20px] line-through font-bold text-[#000000]/40">
                                Rs {price}
                            </h3>
                            <div className="discountTag bg-[#FF3333]/10 py-[2px] px-[6px] sm:py-[4px] sm:px-[10px] text-[12px] sm:text-[14px] text-[#FF3333] rounded-[40px] sm:rounded-[62px]">
                                {discountPercent}%
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
