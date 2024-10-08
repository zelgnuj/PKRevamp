"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./PaymentMethodsSection.module.css";

const logos = [
  { src: "/mastercard-logo.png", alt: "Mastercard" },
  { src: "/visa-logo.png", alt: "Visa" },
  { src: "/jcb-logo.png", alt: "JCB" },
  { src: "/napas-logo.png", alt: "Napas" },
  { src: "/vietqr-logo.png", alt: "VietQR" },
];

export default function PaymentMethodsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const totalWidth = scrollElement.scrollWidth / 2;
      const animationDuration = totalWidth / 15; // Adjust speed here

      scrollElement.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
    }
  }, []);

  return (
    <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className={`${styles.container}`}>
      {/* Text Content */}
      <div className={`${styles.textContent}`}>
        <h2 className="text-4xl font-bold">Chấp nhận nhiều phương thức chỉ với một cổng thanh toán</h2>
      </div>

      {/* Logos */}
      <div className="overflow-hidden relative h-full w-full">
        <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div
          ref={scrollRef}
          className={`flex items-center justify-center ${styles.logoContainer}`}
          style={
            {
              "--animation-duration": "0s",
              width: "200%",
              marginLeft: "-50%",
            } as React.CSSProperties
          }
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={75}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
