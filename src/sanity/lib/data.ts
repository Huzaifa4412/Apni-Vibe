import { client } from "./client"

export const revalidate = 10;

export async function getProducts() {
    try {
        const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }`
        const products = await client.fetch(quary)
        return products
    } catch (error) {
        console.log("Error >>>", error)
        return null
    }
}

export async function getAllProducts() {
    try {
        const quary = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, sale, new ,discountPercent, discountedPrice, _id, category,colors, sizes}`;
        const products = await client.fetch(quary)
        return products
    }
    catch (error) {
        console.log("Error >>>", error)
        return null
    }
}