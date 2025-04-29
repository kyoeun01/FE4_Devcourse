import { Outlet } from "react-router";

// 하위 페이지들은 OUtlet에 노출됨
export default function Dashboard() {
  return (
    <>
      <h1>Dashboard Component</h1>
      <Outlet />
    </>
  );
}
