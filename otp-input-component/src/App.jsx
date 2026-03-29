import { use, useState } from "react";
import "./App.css";
import OTPComponent from "./components/OTPComponent.jsx";

// Requirements:
// *) OTP length can be 4 or 6 or any number - Done
// *) By default/on page load, 1st input box should be active/highlighted - Done (we have to use useRef here, instead of autoFocus)
// *) After entering one value in any input box, the Auto-focus should move to next input box. - Done
// *) If its last the, Auto-focus should stop displaying - WIP
// *) If user clicks BackSpace, it should delete the number in that input. - Done
// *) If user clicks BackSpace again, Auto-focus should go back to previous input box - Done
// *) Show Submit button, which will show as OTP verification successful alert.

function App() {
  const OTPCount = 6;
  const [otp, setOtp] = useState(Array.from({ length: OTPCount }).fill(""));
  const [focus, setFocus] = useState(0);

  const handleInputChange = (index, value) => {
    if (value == "") return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setFocus(() => {
      if (index == otp.length - 1) {
        return false;
      } else if (value != "") {
        return index + 1;
      }
    });
  };

  const handleKeyChange = (index, key, value) => {
    console.log("key", key);
    if (key == "Backspace") {
      otp[index] = "";
      setFocus(() => index >= 0 && index - 1);
      setOtp(() => otp);
      return;
    } else {
      console.log("key", key);
    }
  };

  const onPaste = (value) => {
    setOtp(value);
  };

  return (
    <div>
      <h2 className="otp-header">Enter OTP</h2>
      <OTPComponent
        otp={otp}
        focus={focus}
        onChange={handleInputChange}
        count={OTPCount}
        onPaste={onPaste}
        onKeyChange={handleKeyChange}
      />
    </div>
  );
}

export default App;
