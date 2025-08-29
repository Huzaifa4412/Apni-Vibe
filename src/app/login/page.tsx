"use client";

import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const session = useSession();
  console.log(session);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Logo</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to continue to your account
        </p>
        <div className="space-y-4">
          {["google", "github", "facebook"].map((provider) => (
            <motion.button
              key={provider}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => signIn(provider)}
              className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition duration-300 ${
                provider === "google"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {provider === "google" && <FaGoogle className="w-5 h-5" />}
              {provider === "github" && <FaGithub className="w-5 h-5" />}
              {provider === "facebook" && <FaFacebook className="w-5 h-5" />}
              <span>
                Continue with{" "}
                {provider.charAt(0).toUpperCase() + provider.slice(1)}
              </span>
            </motion.button>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">Don&apos;t have an account?</p>
          <a
            href="#"
            className="text-black font-medium hover:underline mt-1 inline-block"
          >
            Create an account
          </a>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>By continuing, you agree to our</p>
          <div className="mt-1 space-x-2">
            <a href="#" className="text-black hover:underline">
              Terms of Service
            </a>
            <span>and</span>
            <a href="#" className="text-black hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
