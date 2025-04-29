import { useEffect } from "react";
import CountDisplay from "./components/CountDisplay";
import CountButtons from "./components/CountButtons";
import { useCountStore } from "./stores/countStore";

export default function App() {
  // const count = useEffect((state) => state.count);
  useEffect(() => {
    const unsubscribe = useCountStore.subscribe(
      (state) => state.count,
      (newCount) => {
        console.log("New Count", newCount);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
