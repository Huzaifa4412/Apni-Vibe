// import { client } from "./client"


// export async function getProducts() {
//     try {
//         const query = `*[_type == "product"]{name,"image":image.asset -> url,rating, price, discountPercent,_id, discountedPrice }`
//         const products = await client.fetch(query)
//         return products
//     } catch (error) {
//         console.log("Error >>>", error)
//         return null
//     }
// }

// export async function getAllProducts() {
//     try {
//         const query = `*[_type == "product"] | order(_createdAt desc){
//   _id,
//   name,
//   price,
//   discountPercent,
//   sale,
//   description,
//   "image": image.asset->url + "?w=400&h=400&auto=format",
//   "other_images": other_images[].asset->url + "?w=400&h=400&auto=format",
//   "category": category->title,
//   isNew,
//   top_selling,
//   rating,
//   quantity
// }

// `;


//         const products = await client.fetch(query, {}, { timeout: 60000 });
//         return products;
//     } catch (error) {
//         console.error("Error fetching products >>>", error);
//         return null;
//     }
// }
