import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../Typing";
import ProductCard from "@/components/productCard/ProductCard";
import { client } from "@/sanity/lib/client";

const getProduct = async () => {
    try {
        const Query = `*[_type == "product" && sale == true] | order(_createdAt desc){name,"image":image.asset -> url,rating, price, discountPercent,_id, "discountedPrice": select(
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
    const data = await getProduct();
    return (
        <div className="container">
            <div className="breadCrams py-4 flex gap-1 items-center">
                <Link href={"/"}>
                    <h3>Home</h3>
                </Link>
                <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
                <Link href={"/ProductsPage"}>
                    <h3>Shop</h3>
                </Link>
                <Image src={"/arrow.svg"} alt="Arrow" width={16} height={16} />
                <h3 className="font-semibold capitalize">On Sale</h3>
            </div>
            <div className="products_container flex flex-wrap mt-5 justify-center gap-[14px]">
                {data.map((product: Product) => (
                    <ProductCard key={product._id} item={product} />
                ))}
            </div>
        </div>
    );
};

export default Page;
