"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/Eh9fQu2OT1PZRU9BktE7g9FZ6U.png" alt="Logo" width={100} height={40} />
            <p className="mt-4">Giải pháp thu tiền online cho các Shop.</p>
            <div className="flex space-x-4 mt-6">
              {["facebook-f", "instagram", "linkedin", "tiktok", "youtube"].map((icon) => (
                <a key={icon} href="#">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
            <ul>
              {["Link thanh toán", "Plugin", "Hosted page", "Paykit API", "Paykit vs (•••)"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Giải pháp</h3>
            <ul>
              {["Social commerce", "E-commerce", "Freelancer", "Gaming", "Healthcare"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Paykit</h3>
            <ul>
              {["Về Paykit", "Biểu phí", "Blog", "Liên hệ"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Pháp lý</h3>
            <ul>
              {["Điều khoản", "Bảo mật", "Quyền riêng tư"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            © Paykit là một sản phẩm của Công ty Cổ phần Công nghệ Vidiva.{" "}
            <a href="#" className="text-gray-400 underline">Giấy phép số 65/GP-NHNN</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
