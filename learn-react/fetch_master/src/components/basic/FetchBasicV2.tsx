import { useEffect, useState } from "react";

// CRUD
// C Create - Post
// R Read - Get
// U Update - PUT/PATCH
// D Delete - DELETE

export default function FetchBasicV2() {
  // 데이터를 가져오겠다(읽어오겠다)
  // fetch는 web api 중 하나
  const [posts, setPosts] = useState([]); // 데이터를 가져올 상태
  const [loading, setLoading] = useState(true); // 로딩이 지속중이다
  const [error, setError] = useState("");

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
    } finally {
      setLoading(false);
    }
  };

  // useEffect 간소화
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
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
// 리액트
// 클라이언트에서 랜더링을 사용하는 라이브러리
// 자바스크립트가 데이터를 랜더링함
// -> 데이터 요청 전에 빈 데이터가 깜빡거리며 보임
// -> 로딩 중을 보여줌
