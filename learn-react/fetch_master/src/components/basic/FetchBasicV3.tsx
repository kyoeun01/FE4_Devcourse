import { useEffect, useState, useTransition } from "react";

// CRUD
// C Create - Post
// R Read - Get
// U Update - PUT/PATCH
// D Delete - DELETE

export default function FetchBasicV3() {
  // 데이터를 가져오겠다(읽어오겠다)
  // fetch는 web api 중 하나
  const [posts, setPosts] = useState([]); // 데이터를 가져올 상태
  const [error, setError] = useState("");
  const [ispending, startTransition] = useTransition(); // 참고사항. 리액트보다 next.js에서 쓰이는 방식
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network respones was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "unknown Error");
    }
  };

  // useEffect 간소화
  useEffect(() => {
    startTransition(async () => {
      await fetchPosts(); // 여기가 끝날때까지
    });
  }, []);

  if (ispending) {
    return <h1>Loading..</h1>;
  } // 여기를 이쁘게 꾸며도 됨.

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
