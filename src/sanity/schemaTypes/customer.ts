import { defineType } from "sanity";

export default defineType({
    name: "customer",
    title: "Customers",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Customer Name",
            type: "string",
            readOnly: true,
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            readOnly: true,


        },
        {
            name: "city",
            title: "City",
            type: "string",
            readOnly: true,


        },
        {
            name: "country",
            title: "Country",
            type: "string",
            readOnly: true,


        },
        {
            name: "address",
            title: "Address",
            type: "string",
            readOnly: true,


        },
        {
            name: "phone",
            title: "Phone Number",
            type: "string",
            readOnly: true,

        },
        {
            name: "postalCode",
            title: "postalCode",
            type: "string",
            readOnly: true,

        },
    ],
});