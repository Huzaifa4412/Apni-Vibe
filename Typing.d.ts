export interface Product {
    _id: string;
    _type: string;
    name: string;
    price: number;
    description: string;
    image: string;
    other_images?: string[];
    category: string; // ab direct string hai, object nahi
    isNew?: boolean;
    sale?: boolean;
    discountPercent?: number;
    discountedPrice: number;
    rating?: number;
    quantity?: number;
}



export interface formData {
    name: string;
    message: string;
    email: string;
    _createdAt?: string
    _id?: string
    rating?: number
}

export type ProductCard_type = {
    image: string,
    name: string,
    rating: number,
    price: number,
    discountPercent: number,
    discountedPrice: number,
    _id: string,

}
export interface Cart {
    id: string;
    title: string;
    image: string;
    qty: number;
    price: string;

}

export interface customerInfo {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    country: string,
    postalCode: string
} 