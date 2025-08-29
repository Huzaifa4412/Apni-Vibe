// "use client";
// import { animatePageIn } from "@/utils/animate";
// import { ReactNode, useEffect } from "react";

// export default function Template({ children }: { children: ReactNode }) {
//   useEffect(() => {
//     animatePageIn();
//   }, []);

//   return (
//     <div>
//       <div
//         id="banner-1"
//         className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-0 z-10"
//       />
//       <div
//         id="banner-2"
//         className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-1/4 z-10"
//       />
//       <div
//         id="banner-3"
//         className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-2/4 z-10"
//       />
//       <div
//         id="banner-4"
//         className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-3/4 z-10"
//       />
//       {children}
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "easeIn", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
