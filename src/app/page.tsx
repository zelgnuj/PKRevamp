"use client";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PaymentMethodsSection from "./payment-methods-section";
import Header from "./Header";
import Footer from "./Footer";

export default function LandingPage() {
  const { email, isValidEmail, handleEmailChange, handleEmailSubmit } =
    useEmailValidation();

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
          <Header />
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

          {/* Hero Video */}
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
          <p className="text-center text-xl mb-8 mt-5 text-gray-600 max-w-5xl mx-auto">
            &quot;Vượt qua nhiều đề cử cùng hạng mục, Paykit nhận giải thưởng Sao
            Khuê 2024 nhờ tính sáng tạo, hiệu quả kinh tế và khả năng ứng dụng
            công nghệ để tạo ra tác động xã hội thông qua việc giải quyết các
            điểm nghẽn về thanh toán cho nhà bán hàng trực tuyến.&quot;
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
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
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
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
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
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7l3-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Đạt giải Sao khuê 2024
              </h3>
              <p className="text-gray-600">
                Paykit được phát triển bởi Công ty cổ phần Công nghệ Vidiva nhận
                giải thưởng ở hạng mục &quot;Đổi mới sáng tạo&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold mb-12 text-center">
            Chốt đơn hiệu quả cùng <br /> Link thanh toán Paykit
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
                &quot;Dịch vụ thanh toán này đã giúp chúng tôi tăng doanh số bán hàng
                một cách đáng kể. Rất dễ sử dụng và đáng tin cậy.&quot;
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
                &quot;Chúng tôi đã thử nhiều giải pháp khác nhau, nhưng đây là dịch
                vụ tốt nhất mà chúng tôi từng sử dụng. Khách hàng của chúng tôi
                rất hài lòng.&quot;
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
                &quot;Dịch vụ khách hàng tuyệt vời và tính năng đa dạng. Chúng tôi đã
                tăng hiệu quả kinh doanh nhờ giải pháp thanh toán này.&quot;
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
      <section className="w-full bg-gradient-to-b from-white via-green-200 to-yellow-200 text-black flex items-center justify-center py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-12">
          {/* Phần mô tả và Input Email */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Thu tiền đơn giản chỉ với một giải pháp
            </h2>
            <p className="text-lg mb-8">
              Trải nghiệm Paykit miễn phí ngay hôm nay
            </p>

            {/* Input và Button */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 p-4 rounded-lg">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Nhập email của bạn"
                className={`w-full lg:w-64 p-2 border ${
                  isValidEmail ? "border-black" : "border-red-500"
                } rounded-lg gbg-transparent focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-black text-black`}
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-gradient-to-t from-gray-800 to-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Đăng ký
              </button>
            </div>

            {/* Thông báo lỗi */}
            {!isValidEmail && (
              <p className="text-red-500 text-sm mt-2">Email không hợp lệ</p>
            )}
          </div>

          {/* Hình ảnh mô tả sản phẩm */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative flex items-center">
              {/* Hình ảnh điện thoại (nhỏ hơn so với dashboard, căn chỉnh với cạnh trái của dashboard) */}
              <Image
                src="/bj0BRpY6Hzx8Se5cgRa6lgMxM0.avif"
                alt="Mobile App"
                width={500}
                height={500}
                className="absolute z-10 left-0 lg:-left-8 shadow-lg"
              />
              {/* Hình ảnh dashboard (to hơn nhiều so với điện thoại và nằm bên phải) */}
              <Image
                src="/0cOBJcVJJKfVvDQm4zZpFjRm1Bg.avif"
                alt="Dashboard"
                width={500}
                height={500}
                className="rounded-lg shadow-lg ml-16 lg:ml-24"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
