// import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

// axios.get
// axios.post
// axios.put
// axios.patch
// axios.delete

export default function AxiosBasic() {
  const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ispending, startTransition] = useTransition();

  const fetchPosts = async () => {
    try {
      const { data } = await axiosInstance.get("/post");
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown Error");
    }
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts") //
    //   .then((result) => {
    //     setPosts(result.data);
    //   });
    // fetchPosts();
    startTransition(async () => {
      await fetchPosts(); // 여기가 끝날때까지
    });
  }, []);

  if (ispending) {
    return <h1>Loading..</h1>;
  }

  //   if (loading) {
  //     return <h1>Loading..</h1>;
  //   }

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
