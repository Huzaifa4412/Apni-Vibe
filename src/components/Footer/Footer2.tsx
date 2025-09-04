"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function AnimatedWaveFooter() {
    return (
        <footer className="relative px-10 bg-gradient-to-b from-background to-primary/10 pt-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 h-[500px] w-[1800px] animate-wave">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 1800 500"
                        xmlns="http://www.w3.org/2000/svg" f
                    >
                        <path
                            d="M0 250C200 150 400 50 600 100C800 150 1000 350 1200 300C1400 250 1600 150 1800 250V500H0V250Z"
                            fill="currentColor"
                            className="text-primary/5"
                        />
                        <path
                            d="M0 250C200 200 400 100 600 150C800 200 1000 350 1200 300C1400 250 1600 200 1800 250V500H0V250Z"
                            fill="currentColor"
                            className="text-primary/10"
                        />
                    </svg>
                </div>
            </div>
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold">Stay Connected</h2>
                        <form className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="backdrop-blur-sm"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <a
                                href="/"
                                className="block transition-colors hover:text-primary"
                            >
                                Home
                            </a>
                            <Link className="block transition-colors hover:text-primary" href={"/ProductsPage"}>All Products</Link>


                            <Link className="block transition-colors hover:text-primary" href={"/NewArrivals"}>New Arrival</Link>


                            {/* <TransitionLink href={"/"} label="On Sale" /> */}
                            <Link className="block transition-colors hover:text-primary" href={"/OnSale"}>On Sale</Link>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                        <address className="space-y-2 text-sm not-italic">

                            <p>Instagram: apni_vibes_official</p>
                            <a href="mailto:apnivibesonly@gmail.com">Email: apnivibesonly@gmail.com</a>
                        </address>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1b6ANYm7Um/" target="_blank">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Facebook className="h-4 w-4" />
                                    <span className="sr-only">Facebook</span>
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/apni_vibes_official/" target="_blank">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Instagram className="h-4 w-4" />
                                    <span className="sr-only">Instagram</span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ApniVibe. All rights reserved.
                    </p>
                </div>
            </div>
            <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
      `}</style>
        </footer>
    );
}
