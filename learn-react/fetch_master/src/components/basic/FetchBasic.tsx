import { useEffect, useState } from "react";

// CRUD
// C Create - Post
// R Read - Get
// U Update - PUT/PATCH
// D Delete - DELETE

// GET 방식
export default function FetchBasic() {
  // 데이터를 가져오겠다(읽어오겠다)
  // fetch는 web api 중 하나
  const [posts, setPosts] = useState([]); // 데이터를 가져올 상태
  const [loading, setLoading] = useState(true); // 로딩이 지속중이다
  const [error, setError] = useState("");
  // 에러발생
  // 1. 주소가 유효하지 않을때 -> ok:false 데이터요청 성공적이지 않음
  // 2. 올바른 리소스를 찾지 못할때

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // 응답에 대한 여러가지 정보가 담김
      .then((response) => {
        if (!response.ok) throw new Error("Network respones was not ok"); // ok:false
        return response.json(); // json 정보를 가져옴
      })
      .then((result) => {
        console.log(result); // 데이터 요청
        setPosts(result); // 데이터 갱신
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false); // 로딩 끝  *
      });
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
