import { client } from "./client"

export const revalidate = 10;

export async function getProducts() {
    try {
        const query = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }`
        const products = await client.fetch(query)
        return products
    } catch (error) {
        console.log("Error >>>", error)
        return null
    }
}

export async function getAllProducts() {
    try {
        const query = `*[_type == "product"]{
    _id,
    _type,
    name,
    price,
    description,
    "image": image.asset->url,
    "other_images": other_images[].asset->url,
    "category":category->title,
    isNew,
    sale,
    top_selling,
    discountPercent,
    "discountedPrice": select(
      sale == true && defined(discountPercent) => price - ((price * discountPercent) / 100),
      price
    ),
    rating,
    quantity
  }
`;


        const products = await client.fetch(query);
        return products;
    } catch (error) {
        console.error("Error fetching products >>>", error);
        return null;
    }
}
