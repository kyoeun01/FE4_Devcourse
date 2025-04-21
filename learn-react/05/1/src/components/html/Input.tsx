import { twMerge } from "tailwind-merge";

type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;
// Omit : type만 제거
// Exclude 어떤걸 제거하고싶은데
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};
export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <>
      <input
        type=" "
        className={twMerge("w-[240px] h-[44px]", className)}
        {...rest}
      />
    </>
  );
}
// type=" " -> 없어도된다는거??
