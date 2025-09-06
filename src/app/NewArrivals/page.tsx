import ProductCard from "@/components/productCard/ProductCard";
import Heading from "@/components/Heading/Heading";
import { Product } from "../../../Typing";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { client } from "@/sanity/lib/client";

const getProduct = async () => {
    try {
        const Query = `*[_type == "product" && isNew == true] | order(_createdAt desc){name,"image":image.asset -> url,rating, price, discountPercent,_id, "discountedPrice": select(
      sale == true && defined(discountPercent) => price - ((price * discountPercent) / 100),
      price
    ), }`;

        const product = client.fetch(Query);
        return product;
    } catch (error) {
        console.log(error);
    }
};

const Page = async () => {
    const data = (await getProduct()) as Product[] | undefined;
    return (
        <div
            id="NewArrival"
            className={` container flex flex-col items-center justify-center gap-10`}
        >
            <Heading text="New Arrivals" />
            <div className="productsContainer flex flex-wrap justify-center  flex-shrink-0  gap-[8px]">
                {data !== undefined &&
                    data.map((product: Product) => (
                        <ProductCard key={product._id} item={product} />
                    ))}
            </div>

            <div className="w-max">
                <Link href={"/ProductsPage"}>
                    <Button text="View All" dark_variant={false} />
                </Link>
            </div>
        </div>
    );
};

export default Page;
