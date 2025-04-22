import { useEffect, useState } from "react";

export default function App() {
  // API
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    const interval = setInterval(() => {}, 1000);
    const timeout = setTimeout(() => {}, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <h1>App Component</h1>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
