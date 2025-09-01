import Link from "next/link";
import Styles from "./Footer.module.css";
import Image from "next/image";
import NewsLetter from "../NewsLetter/NewsLetter";

export function Footer() {
  return (
    <footer
      className="w-full h-max px-6"
      style={{ backgroundColor: "var(--light-gray)" }}
    >
      <div className="relative top-[0%] md:-translate-y-1/2 -translate-y-[30%]">
        <NewsLetter />
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr,1fr,1fr,1fr,1fr] gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href={"/"} className="order-1 sm:order-2">
              {/* <div className={`${Styles.logo} text-[32px] font-ld `}>SHOP.CO</div> */}
              <Image src={"/logo-main.svg"} alt="Logo" className="w-auto h-[70px] object-cover rounded-full" width={100} height={100} />
            </Link>
            <p className="text-sm text-[#000000]/60 mb-8 leading-relaxed">
              We have products that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" aria-label="Twitter">
                <svg
                  className="w-5 h-5 text-[#000000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook">
                <svg
                  className="w-5 h-5 text-[#000000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg
                  className="w-5 h-5 text-[#000000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>
              <Link href="#" aria-label="TikTok">
                <svg
                  className="w-5 h-5 text-[#000000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">HELP</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">FAQ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#000000]/60 hover:text-black"
                >
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-[#E4E7E9]">
          <p className="text-sm text-[#000000]/60 mb-4 md:mb-0">
            Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={"/Footer/payment.svg"}
              alt="payment"
              width={281}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
