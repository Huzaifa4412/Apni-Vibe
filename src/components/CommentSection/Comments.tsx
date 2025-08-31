"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { formData } from "../../../Typing";
// import { getComments } from "@/actions/Comments";
import { client } from "@/sanity/lib/client";
import Rating from "../Rating/Rating";

const CommentList = ({ postID }: { postID: string }) => {
  const [testimonials, setTestimonials] = useState<formData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchComment = await client.fetch(
          `*[_type == "comment" && product._ref == "${postID}"] | order(_createdAt desc)`
        );
        setTestimonials(fetchComment);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments(); // Fetch initial comments

    // Subscribe to real-time updates
    const subscription = client
      .listen<formData>(
        `*[_type == "comment" && product._ref == "${postID}"] | order(_createdAt desc)`
      )
      .subscribe((update) => {
        // console.log("Sanity Update:", update); // 🔹 Debugging: Check if updates are received
        setTestimonials((prevTestimonials) => {
          const newTestimonial = update.result;
          if (newTestimonial) {
            return [newTestimonial, ...prevTestimonials];
          }
          return prevTestimonials;
        });
      });

    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, [postID]);

  return (
    <div className="my-16">
      <nav className="grid grid-cols-1 my-12 justify-center h-max">
        <h2 className="text-center font-medium text-[20px] md:text-[20px] border-b-2 pb-3 hover:border-black duration-500">
          Rating and Review
        </h2>
      </nav>
      {loading ? (
        <h2 className="text-xl text-center font-semibold">
          Loading Reviews ...
        </h2>
      ) : (
        <div className="reviews">
          <div className="flex md:flex-row flex-col gap-3 items-center justify-center py-8">
            <h2 className="text-[24px] font-bold">
              All Reviews{" "}
              <span className="text-sm text-slate-400 font-medium">
                ({testimonials.length})
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-start w-full gap-4">
            {testimonials.map((item) => (
              <Testimonials
                key={item._id}
                item={item}
                createdData={item._createdAt!}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;

function Testimonials({
  item,
  createdData,
}: {
  item: formData;
  createdData: string;
}) {
  return (
    <div className="testimonial cursor-grab justify-center min-w-[340px] flex-shrink-0 mx-auto flex flex-col gap-3 px-[32px] py-[24px] border-2 rounded-[20px]">
      <Rating rating={Number(item.rating) || 0} />
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
        {item.message}
      </div>
      <div className="postedDate">
        <span className="text-sm text-slate-500 font-medium">
          Posted on{" "}
          {new Date(createdData).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
