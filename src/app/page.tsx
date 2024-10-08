"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import PaymentMethodsSection from './payment-methods-section'

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Định kiểu cho dropdownRef
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Định kiểu cho buttonRef

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Kiểm tra nếu click nằm ngoài dropdown hoặc nút hamburger
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Đóng menu
      }
    };

    // Thêm sự kiện click khi menu đang mở
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup sự kiện khi component bị hủy hoặc menu đóng
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Paykit - Giải pháp thu tiền đơn giản cho các shop</title>
        <meta
          name="description"
          content="Paykit là giải pháp thanh toán trực tuyến giúp các shop thu tiền một cách nhanh chóng và dễ dàng mà không cần website."
        />
        <meta
          name="keywords"
          content="Paykit, thanh toán trực tuyến, giải pháp thu tiền, shop online, thanh toán không cần website"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Paykit - Giải pháp thu tiền đơn giản cho các shop"
        />
        <meta
          property="og:description"
          content="Trải nghiệm Paykit - Giải pháp thanh toán trực tuyến cho các shop bán hàng online."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://paykit.vn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Paykit - Giải pháp thu tiền đơn giản"
        />
        <meta
          name="twitter:description"
          content="Trải nghiệm giải pháp thanh toán trực tuyến Paykit ngay hôm nay!"
        />
        <meta name="twitter:image" content="/path-to-image.jpg" />
      </Head>
      {/* Header and Hero Section */}
      <div className="bg-gradient-to-b from-yellow-200 via-green-200 to-white pt-6 pb-24">
        <div className="container mx-auto px-4">
          <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-white shadow-md z-50">
            {/* Logo ở bên trái */}
            <div className="flex items-center space-x-4">
              <Image
                src="/Eh9fQu2OT1PZRU9BktE7g9FZ6U.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Menu chính hiển thị trên màn hình lớn (ẩn khi nhỏ hơn lg) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg-xl:flex space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Sản phẩm
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Giải pháp
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Về Paykit
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Liên hệ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Biểu phí
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Trợ giúp
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black hover:font-bold"
              >
                Blog
              </a>
            </div>

            {/* Button và Hamburger menu */}
            <div className="flex items-center space-x-4 relative">
              {/* Nút hiển thị trên màn hình lớn */}
              <Button
                variant="outline"
                className="bg-white text-black rounded-full px-4 py-2 hidden lg-xl:inline hover:bg-gray-100 hover:border-gray border-gray"
              >
                Đăng nhập
              </Button>
              <Button
                variant="outline"
                className="bg-black text-white rounded-full px-4 py-2 hidden lg-xl:inline hover:bg-white hover:text-black hover:border-black border-white"
              >
                Trải nghiệm ngay
              </Button>

              {/* Nút Hamburger hiển thị trên màn hình nhỏ hơn lg */}
              <div className="lg-xl:hidden">
                <button
                  ref={buttonRef}
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-black focus:outline-none"
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
                    ></path>
                  </svg>
                </button>

                {/* Menu thả xuống cho Hamburger */}
                {isOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 top-full mt-8 mr-2 w-56 bg-white shadow-lg rounded-lg p-4 z-50"
                  >
                    <div className="flex flex-col space-y-4">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Sản phẩm
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Giải pháp
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Về Paykit
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Liên hệ
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Biểu phí
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Trợ giúp
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black hover:font-bold"
                      >
                        Đăng nhập
                      </a>
                      <Button
                        variant="outline"
                        className="bg-black text-white rounded-full px-4 py-2 hidden lg-xl:inline hover:bg-white hover:text-black hover:border-black border-white"
                      >
                        Trải nghiệm ngay
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
          {/* Hero Content */}
          <div className="text-center mb-12 pt-24">
            <h1 className="font-bold mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Giải pháp thu tiền
              <br />
              online cho các Shop
            </h1>

            <p className="text-2xl mb-8 mt-8 text-gray-600">
              Không cần Website, không cần lập trình, bán hàng online dễ dàng
              cùng Link thanh toán Paykit.
            </p>
            <Button className="bg-black hover:bg-white text-white hover:text-black px-8 py-7 rounded-full text-2xl border-white">
              Trải nghiệm ngay
            </Button>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-auto">
              <source src="/video/demo 6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <PaymentMethodsSection />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Giải pháp cổng thanh toán tin cậy và uy tín hàng đầu
          </h2>
          <p className="text-center text-xl mb-8 mt-5 text-gray-600">
            “Vượt qua nhiều đề cử cùng hạng mục, Paykit nhận giải thưởng Sao
            Khuê 2024 nhờ tính sáng tạo, hiệu quả kinh tế và khả năng ứng dụng
            công nghệ để tạo ra tác động xã hội thông qua việc giải quyết các
            điểm nghẽn về thanh toán cho nhà bán hàng trực tuyến.”
          </p>
          <div className="flex w-full justify-center pb-6">
            <Image
              src="/Ked9mQfmdCPZVbNd8jZPd0j0dLg.png"
              alt="author"
              width={2560}
              height={478}
              className="w-[250px] h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Được cấp phép bởi Ngân hàng Nhà Nước Việt Nam
              </h3>
              <p className="text-gray-600">
                Giấy phép số 65/GP-NHNN về hoạt động cung ứng dịch vụ trung gian
                thanh toán.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Đạt chứng chỉ PCI DSS
              </h3>
              <p className="text-gray-600">
                Tiêu chuẩn bảo mật quan trọng trong lĩnh vực thương mại điện tử,
                giúp bảo vệ thông tin tài chính của khách hàng.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Đạt giải Sao khuê 2024
              </h3>
              <p className="text-gray-600">
                Paykit được phát triển bởi Công ty cổ phần Công nghệ Vidiva nhận
                giải thưởng ở hạng mục "Đổi mới sáng tạo".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Chỉ 3 bước thanh toán đơn giản
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-black font-bold text-2xl mb-2">Bước 1</div>
              <h3 className="text-lg font-semibold mb-2">
                Tạo link trong tíc tắc
              </h3>
              <p className="text-gray-600">
                Mô tả chi tiết về cách tạo link thanh toán và các tùy chọn có
                sẵn.
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto mt-3"
              >
                <source src="/video/taolink.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-black font-bold text-2xl mb-2">Bước 2</div>
              <h3 className="text-lg font-semibold mb-2">
                Gửi link cho khách hàng
              </h3>
              <p className="text-gray-600">
                Hướng dẫn cách gửi link thanh toán cho khách hàng qua các kênh
                khác nhau.
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto mt-3"
              >
                <source src="/video/chiaselink.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-black font-bold text-2xl mb-2">Bước 3</div>
              <h3 className="text-lg font-semibold mb-2">
                Nhận tiền về tài khoản
              </h3>
              <p className="text-gray-600">
                Giải thích quy trình nhận tiền và các tùy chọn rút tiền có sẵn.
              </p>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto mt-3"
              >
                <source src="/video/nhantien.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-black font-bold mb-12 text-center">
            Khách hàng nói gì về chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Dịch vụ thanh toán này đã giúp chúng tôi tăng doanh số bán hàng
                một cách đáng kể. Rất dễ sử dụng và đáng tin cậy."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Nguyễn Văn A</h4>
                  <p className="text-gray-500">CEO, Công ty XYZ</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Chúng tôi đã thử nhiều giải pháp khác nhau, nhưng đây là dịch
                vụ tốt nhất mà chúng tôi từng sử dụng. Khách hàng của chúng tôi
                rất hài lòng."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Trần Thị B</h4>
                  <p className="text-gray-500">Chủ cửa hàng online</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Dịch vụ khách hàng tuyệt vời và tính năng đa dạng. Chúng tôi đã
                tăng hiệu quả kinh doanh nhờ giải pháp thanh toán này."
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Lê Văn C</h4>
                  <p className="text-gray-500">Giám đốc tài chính, Startup D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-white via-green-200 to-yellow-200 text-white flex items-center justify-center py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-12">
          {/* Phần mô tả và Input Email */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl text-black font-bold mb-4">
              Thu tiền đơn giản chỉ với một giải pháp
            </h2>
            <p className="text-lg mb-8 text-black">
              Trải nghiệm Paykit miễn phí ngay hôm nay
            </p>
            {/* Thay QR code bằng input email */}
            <div className=" text-white inline-flex items-center p-4 rounded-lg">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-grow p-2 border border-gray-400 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-black text-white"
              />
              <button className="bg-gradient-to-t from-gray-800 to-black text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-700">
                Đăng ký
              </button>
            </div>
          </div>

          {/* Hình ảnh mô tả sản phẩm */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative flex items-center">
              {/* Hình ảnh điện thoại (nhỏ hơn so với dashboard, căn chỉnh với cạnh trái của dashboard) */}
              <img
                src="/bj0BRpY6Hzx8Se5cgRa6lgMxM0.avif"
                alt="Mobile App"
                className="w-32 lg:w-40 absolute z-10 left-0 lg:-left-8 shadow-lg"
              />
              {/* Hình ảnh dashboard (to hơn nhiều so với điện thoại và nằm bên phải) */}
              <img
                src="/0cOBJcVJJKfVvDQm4zZpFjRm1Bg.avif"
                alt="Dashboard"
                className="w-200 lg:w-240 rounded-lg shadow-lg ml-16 lg:ml-24"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
            {/* Cột Logo và mô tả */}
            <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
              <Image
                src="/Eh9fQu2OT1PZRU9BktE7g9FZ6U.png"
                alt="Logo"
                width={100}
                height={40}
              />
              <p className="mt-4">Giải pháp thu tiền online cho các Shop.</p>
              <div className="flex space-x-4 mt-6">
                {/* Thêm các icon mạng xã hội */}
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Cột sản phẩm */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Link thanh toán
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Plugin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Hosted page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Paykit API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Paykit vs (•••)
                  </a>
                </li>
              </ul>
            </div>

            {/* Cột giải pháp */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Giải pháp</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Social commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Freelancer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Gaming
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Healthcare
                  </a>
                </li>
              </ul>
            </div>

            {/* Cột về Paykit */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Paykit</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Về Paykit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Biểu phí
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Cột pháp lý */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pháp lý</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Điều khoản
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Quyền riêng tư
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Phần bản quyền và thông tin giấy phép */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>
              © Paykit là một sản phẩm của Công ty Cổ phần Công nghệ Vidiva
              (MST: 0314570723) được cấp phép bởi Ngân hàng Nhà Nước Việt Nam.{" "}
              <a href="#" className="text-gray-400 underline">
                Giấy phép số 65/GP-NHNN ngày 09/09/2020
              </a>{" "}
              về hoạt động cung ứng dịch vụ trung gian thanh toán.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
