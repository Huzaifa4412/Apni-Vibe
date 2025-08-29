export interface Product {
    _id: string;
    name: string;
    rating: number;
    discountPercent: number;
    colors: string[];
    image: string;
    category: string;
    price: string;
    sizes: string[];
    description: string;
    discountedPrice: string;
    new: boolean;
    sale: boolean
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
    p_color: string;
    p_size: string;
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