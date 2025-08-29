import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'string',
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'review',
            title: 'review',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'product',
            title: 'product',
            type: 'reference',
            to: [{ type: 'product' }],
        }),

    ],
});
