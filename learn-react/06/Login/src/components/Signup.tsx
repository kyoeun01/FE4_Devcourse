import { useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";

export default function Signup() {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Sign Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form action="" className="grid gap-4">
            <Input
              type="text"
              className="input-style"
              placeholder="Enter Your Name"
            />
            <Input
              type="text"
              className="input-style"
              placeholder="someone@example.com"
            />
            <Input
              type="password"
              className="input-style"
              placeholder="Enter Password"
            />
            <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
              <span className="text-sm color-[#4f4f4f]">
                I agree with <em className="not-italic font-bold">terms</em> and{" "}
                <em className="not-italic font-bold">policies</em>.
              </span>
            </Checkbox>
            <div className="mt-4 grid gap-4">
              <Button
                type="submit"
                className="w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg"
              >
                Sign In
              </Button>
              <Button
                type="button"
                className="w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg"
              >
                Go To Login up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
