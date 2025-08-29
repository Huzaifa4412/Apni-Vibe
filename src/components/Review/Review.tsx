import React from "react";
import Image from "next/image";
// import Button from "../Button/Button";
const Review = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      desc: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      name: "Alex K.",
      desc: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      name: "James L.",
      desc: `"James L.
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.””`,
    },
    {
      name: "James L.",
      desc: `"James L.
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.””`,
    },
  ];
  return (
    <div className="my-16">
      <nav className="grid grid-cols-1 my-12 justify-center h-max ">
        {/* <h2 className="text-center font-medium text-[16px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          Product Details
        </h2> */}
        <h2 className="text-center font-medium text-[20px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          Rating and Review
        </h2>
        {/* <h2 className="text-center font-medium text-[16px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          FAQs
        </h2> */}
      </nav>
      <div className="reviews">
        <div className="flex md:flex-row flex-col gap-3 items-center justify-between py-8">
          <h2 className="text-[24px] font-bold ">
            All Reviews{" "}
            <span className="text-sm text-slate-400 font-medium">
              ({testimonials.length})
            </span>
          </h2>
          {/* <div className="flex gap-5 items-center">
            <Button text="Latest" dark_variant={false} />
            <Button text="Write a Review" dark_variant={true} />
          </div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
          {testimonials.map((item, index) => (
            <Testimonials key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;

function Testimonials({
  item,
}: {
  item: {
    name: string;
    desc: string;
  };
}) {
  return (
    <div className="testimonial cursor-grab justify-evenly  flex-shrink-0 mx-auto flex flex-col gap-2 px-[32px] py-[24px]  border-2 rounded-[20px]">
      <Image
        src={"/Testimonials/startsFrame.svg"}
        alt="Rating"
        width={139}
        height={23}
      />
      <div className="intro flex gap-2">
        <div className="name text-xl font-semibold">{item.name}</div>
        <Image
          src={"/Testimonials/verify.svg"}
          alt="Verify"
          width={24}
          height={24}
        />
      </div>
      <div className="content text-[#000000]/60 text-[16px] font-light">
        {item.desc}
      </div>
      <div className="postedDate">
        <span className="text-sm text-slate-500 font-medium">
          Posted on Oct 15, 2022
        </span>
      </div>
    </div>
  );
}
