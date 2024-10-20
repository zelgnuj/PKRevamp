"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white shadow-md z-50">
      <div className="flex items-center space-x-4">
        <Image
          src="/Eh9fQu2OT1PZRU9BktE7g9FZ6U.png"
          alt="Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg-xl:flex space-x-6">
        {[
          "Sản phẩm",
          "Giải pháp",
          "Về Paykit",
          "Liên hệ",
          "Biểu phí",
          "Trợ giúp",
          "Blog",
        ].map((item) => (
          <a
            href="#"
            key={item}
            className="text-gray-700 hover:text-black hover:font-bold"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 hidden lg-xl:inline">
          Đăng nhập
        </Button>
        <Button className="bg-black text-white hover:bg-white hover:text-black rounded-full px-4 py-2 hidden lg-xl:inline">
          Trải nghiệm ngay
        </Button>
        <div className="lg-xl:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-8 mr-2 w-56 bg-white shadow-lg rounded-lg p-4 z-50"
            >
              {[
                "Sản phẩm",
                "Giải pháp",
                "Về Paykit",
                "Liên hệ",
                "Biểu phí",
                "Trợ giúp",
                "Blog",
                "Đăng nhập",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-black hover:font-bold"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
