import { useRef, useState } from "react";

// useRef
// 값의 유지는 필요하되, 리랜덜잉이 발생하지 않는 변수가 필요할 때
// JSX 요소에 대한 참조가 필요할 때

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const isSubmitting = useRef(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting.current) return;

    if (!email) {
      alert("이메일을 입력해주세요");
      emailRef.current?.focus();
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      pwRef.current?.focus();
      return;
    }

    isSubmitting.current = true;
    console.log("로그인됨");
    setTimeout(() => {
      isSubmitting.current = false;
    }, 2000);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={pwRef}
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

// 화면에서 사용되는 값이면 useState로 정의해야 함.
// 내부적으로만 재호출이 안되면 됨 -> useRef
// 값이 변경되는게 유지되면서도 컴포넌트를 리랜더링할 필요없을 때
