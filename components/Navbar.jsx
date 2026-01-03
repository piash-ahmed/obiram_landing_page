"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`lg:py-2 ${isHome ? " bg-transparent" : " bg-[#fb4814]"}`}
    >
      <nav className={`navbar w-11/12 mx-auto`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="menu menu-sm dropdown-content absolute top-full left-0 mt-3 w-80 rounded-xl bg-white shadow-lg py-2 z-10"
              tabIndex={-1}
            >
              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/store-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Easy Store Setup
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Launch your store quickly...
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/paperclip-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Inventory & Order Management
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Manage products, orders, and customers...
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/doller-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Payments & Shipping
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Accept payments and deliver orders easily...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/store-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Multi-Sales Channels
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      In-shop & Online Store selling...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/paperclip-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Analytics & Reporting
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Track sales performance and business trends...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/doller-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Apps & Integrations
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Extend your store with tools...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block px-1 py-1 text-sm">
                <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                  <Image
                    src="/icons/store-icon.png"
                    alt="Store Image"
                    width={40}
                    height={40}
                    className="dropdown-items-icon-sm p-2 rounded-lg"
                  />
                  <div className="">
                    <h3 className="text-[14px] font-medium">
                      Themes & Customization
                    </h3>
                    <p className="text-gray-500 text-[12px]">
                      Design your store, your way...
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <a className="btn bg-transparent shadow-none border-0 hover:bg-transparent">
            <Image
              src="/images/main-logo.png"
              alt="logo"
              width={38}
              height={158}
              className="w-8 md:w-8 h-auto"
            />
            <Image
              src="/images/obiram.png"
              alt="obiram"
              width={113}
              height={24}
              className="w-20 md:w-28 h-auto"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <Link
                href="/"
                className="hover:bg-transparent active:bg-transparent focus:bg-transparent focus:ring-0 hover:text-white hover:font-medium"
              >
                <motion.span
                  className="inline-block text-[#ffffffe1] font-medium cursor-pointer"
                  whileHover={{ y: -6, color: "#ffffff" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  Home
                </motion.span>
              </Link>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-white hover:font-medium">
                <motion.span
                  className="inline-block text-[#ffffffe1] font-medium cursor-pointer"
                  whileHover={{ y: -6, color: "#ffffff" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  Features
                </motion.span>
              </a>
            </li>
            <li className="bg-transparent hover:bg-transparent">
              {/* Dropdown menu */}
              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <motion.div
                  className="flex items-center gap-1 cursor-pointer font-medium
             text-[#ffffffe1]
             bg-transparent
             hover:bg-transparent
             active:bg-transparent
             focus:bg-transparent
             outline-none"
                  whileHover={{ y: -6, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <span>Products</span>

                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <FiChevronDown size={20} />
                  </motion.span>
                </motion.div>

                {/* Dropdown */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-[456px] rounded-xl bg-white shadow-lg p-2"
                    >
                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/store-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Easy Store Setup
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Launch your store quickly...
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/paperclip-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Inventory & Order Management
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Manage products, orders, and customers...
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/doller-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Payments & Shipping
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Accept payments and deliver orders easily...
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/store-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Multi-Sales Channels
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              In-shop & Online Store selling...
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/paperclip-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Analytics & Reporting
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Track sales performance and business trends...
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/doller-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Apps & Integrations
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Extend your store with tools...
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href="#" className="block px-1 py-1 text-sm">
                        <div className="dropdown-item flex items-center gap-3 w-full h-full hover:bg-gray-100 rounded-xl transition-colors duration-200 p-2">
                          <Image
                            src="/icons/store-icon.png"
                            alt="Store Image"
                            width={40}
                            height={40}
                            className="dropdown-items-icon p-2 rounded-lg"
                          />
                          <div className="">
                            <h3 className="text-[16px] font-medium">
                              Themes & Customization
                            </h3>
                            <p className="text-gray-500 text-[14px] mt-1">
                              Design your store, your way...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-white hover:font-medium">
                <motion.span
                  className="inline-block text-[#ffffffe1] font-medium cursor-pointer"
                  whileHover={{ y: -6, color: "#ffffff" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  Pricing
                </motion.span>
              </a>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:bg-transparent hover:text-white hover:font-medium"
              >
                <motion.span
                  className="inline-block text-[#ffffffe1] font-medium cursor-pointer"
                  whileHover={{ y: -6, color: "#ffffff" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  About
                </motion.span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-transparent border-none shadow-none hover:bg-transparent primary-text text-[14px] font-normal">
            Log in
          </button>
          <div className="hidden md:inline-block">
            <Button value={"Start for Free"} />
          </div>
        </div>
      </nav>
    </header>
  );
}
