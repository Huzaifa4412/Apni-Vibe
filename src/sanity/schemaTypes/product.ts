import { defineType } from "sanity"

export default defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: "category",
            title: "Category",
            type: 'string',
            options: {
                list: [
                    { title: 'T-Shirt', value: 'tshirt' },
                    { title: 'Short', value: 'short' },
                    { title: 'Jeans', value: 'jeans' },
                    { title: 'Hoddie', value: 'hoodie' },
                    { title: 'Shirt', value: 'shirt' },
                ]
            }
        },
        {
            name: "discountPercent",
            title: "Discount Percent",
            type: 'number',
        },
        {
            name: "discountedPrice",
            title: "Discounted Price",
            type: 'number',
            readOnly: true,
            calculate: (obj: any) => obj.price - (obj.price * obj.discountPercent / 100),
        } as any,
        {
            name: "new",
            type: 'boolean',
            title: "New",
        },
        {
            name: "sale",
            type: 'boolean',
            title: "On Sale",
        },
        {
            name: "rating",
            type: 'number',
            title: "Rating",
            description: "Rating from 1 to 5",
        },
        {
            name: "quantity",
            type: 'number',
            title: "Quantity",
            description: "Quantity in stock",
        },

        {
            name: "colors",
            title: "Colors",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        }
    ],
})