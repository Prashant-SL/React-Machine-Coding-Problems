import React, { useEffect, useRef } from "react";
import "./OTPComponent.css";

const OTPComponent = ({
  count = 4,
  otp,
  onChange,
  focus,
  onKeyChange,
  onPaste,
}) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (focus >= 0) {
      inputRefs.current[focus]?.focus();
    }
  }, [focus]);

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text/plain").trim();

    if (!pastedData) return;

    const newOtp = [...otp];

    for (let i = 0; i < count; i++) {
      if (pastedData[i]) {
        newOtp[i] = pastedData[i];
      }
    }

    onPaste(newOtp);

    const nextFocus = Math.min(pastedData.length, count - 1);
    inputRefs.current[nextFocus]?.focus();
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length === count) {
      alert("OTP Verified");
      // Reset inputs
      setOtp(new Array(count).fill(""));
      setActiveIndex(0);
      inputRefs.current[0]?.focus();
    } else {
      alert("Please enter complete OTP");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-inputs-wrapper" onPaste={handlePaste}>
        {otp.map((input, index) => {
          return (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="otp-input"
              onChange={(e) => onChange(index, e.target.value)}
              value={input}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code" // its for mobile, it will detect the recent OTPs
              maxLength={1}
              onKeyDown={(e) => onKeyChange(index, e.key, e.target.value)}
            />
          );
        })}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit OTP
      </button>
    </div>
  );
};

export default OTPComponent;
