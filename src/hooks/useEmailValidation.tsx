// useEmailValidation.ts (hoặc useEmailValidation.js nếu dùng JavaScript)
import { useState } from "react";

// Custom hook để kiểm tra email hợp lệ
export const useEmailValidation = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Hàm kiểm tra tính hợp lệ của email bằng regex
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Xử lý sự kiện khi email thay đổi
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Reset lại trạng thái lỗi khi người dùng nhập email mới
  };

  // Xử lý sự kiện khi submit
  const handleEmailSubmit = () => {
    if (validateEmail(email)) {
      // Email hợp lệ, thực hiện logic tiếp theo (ví dụ gửi đến server)
      console.log("Email hợp lệ:", email);
    } else {
      // Email không hợp lệ, hiển thị thông báo lỗi
      setIsValidEmail(false);
    }
  };

  return { email, isValidEmail, handleEmailChange, handleEmailSubmit };
};
