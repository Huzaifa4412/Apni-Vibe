import { defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error('This field is required').max(96),
            description: "Title of the product"
        },
        {
            name: 'price',
            title: 'Actual Price',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: "other_images",
            title: "Other Images",
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: "category",
            title: "Category",
            type: 'reference',
            to: [{ type: 'categories' }]
        },

        {
            name: "isNew",
            type: 'boolean',
            title: "New Arrival",
        },
        {
            name: "sale",
            type: 'boolean',
            title: "On Sale",
        },
        {
            name: "discountPercent",
            title: "Discount Percent",
            type: 'number',
            validation: Rule => Rule.min(0).max(100),
            hidden: ({ document }) => document?.sale !== true,
        },
        {
            name: "discountedPrice",
            title: "Discounted Price",
            type: 'number',
            readOnly: true,
            description: "Auto-calculated based on price and discountPercent",
            hidden: ({ document }) => document?.sale !== true,

        },
        {
            name: "rating",
            type: 'number',
            title: "Rating",
            validation: Rule => Rule.integer().min(1).max(5),
        },
        {
            name: "quantity",
            type: 'number',
            title: "Quantity",
            validation: Rule => Rule.min(0),
        }
    ],
});
