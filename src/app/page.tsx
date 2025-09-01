// import Brands from "@/components/Brands/Brands";
import DressStyle from "@/components/DressStyle/DressStyle";
import Hero from "@/components/HeroSection/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Testimonials from "@/components/Tesimonials/Testimonials";
import TopSelling from "@/components/TopSelling/TopSelling";
import React from "react";

const page = () => {
    return (
        <div>
            <Hero />
            {/* <Brands /> */}
            <NewArrivals />
            <TopSelling />
            <DressStyle />
            <Testimonials />
        </div>
    );
};

export default page;
