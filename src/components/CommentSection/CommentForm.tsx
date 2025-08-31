"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Review from "@/components/Review/Review";

import { formData } from "../../../Typing";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Button from "../Button/Button";
import { addComments } from "@/actions/Comments";
import Select from "../ui/select";
import Heading from "../Heading/Heading";

const formScheme = z.object({
  name: z.string().min(3, { message: "Name is required" }).max(50),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(5, { message: "Review is required" }).max(500),
});

const CommentForm = ({ postID }: { postID: string }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "5", label: "⭐⭐⭐⭐⭐" },
    { value: "4", label: "⭐⭐⭐⭐" },
    { value: "3", label: "⭐⭐⭐" },
    { value: "2", label: "⭐⭐" },
    { value: "1", label: "⭐" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const [, setFormValues] = useState<formData>();
  const [loading, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(formScheme),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (
    values: formData,
    e?: React.BaseSyntheticEvent<object, EventTarget, Event> | undefined
  ) => {
    e?.preventDefault();
    startTransition(async () => {
      await addComments(values, postID, selectedValue);
    });
    setFormValues(values);

    form.reset();
  };
  return (
    <>
      <div className="mt-20 max-w-[800px] ">
        <Heading text="Leave a Review" />
        <br />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data, event) => onSubmit(data, event))}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="name" placeholder="Enter your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about experience"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="">
              <h1 className="text-2xl font-bold mb-4"> Select Rating</h1>
              <Select
                options={options}
                value={selectedValue}
                onChange={handleChange}
              />
              {selectedValue && (
                <p className="my-8">
                  Selected Value :{" "}
                  <span className="font-bold text-lg">{selectedValue}</span>
                </p>
              )}
            </div>
            <Button text={loading ? "Submitting ..." : "Submit"} dark_variant />
          </form>
        </Form>
      </div>
    </>
  );
};

export default CommentForm;
