import { defineField } from 'sanity';

export const categories = defineField(
    {
        name: "categories",
        type: "document",
        title: "Categories",
        fields: [
            {
                name: "title",
                type: "string",
                title: "Category Name"
            },
            {
                name: "image",
                type: "image",
                title: "Category Image",
            }
        ]

    }
)