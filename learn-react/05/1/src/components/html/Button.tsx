import { twMerge } from "tailwind-merge";

// 버튼에서 사용할 수 있는 모든 props를 사용 가능
// 커스텀도 가능 &
// className,children만 구조분해할당
// 제네릭에는 모든 태그가 올수있음.
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className: "bg-[#4f4f4f]" | "bg-[#ed4848]" | "bg-[#7d48ed]";
};

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "w-[77px] h-[44px] text-sm text-white bg-[#4f4f4f] rounded-lg cursor-pointer disabled:bg-gray-300 disabled:cursor-default",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
