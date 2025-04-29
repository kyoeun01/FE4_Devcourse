import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";
import RootLayout from "./Layout/RootLayout";
import Read from "./pages/Read";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트 */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 중첩 라우트  */}
          {/* 라우트 프리픽스 */}
          <Route path="my">
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
          {/* 동적 세그먼트 */}
          {/* 옵셔널 세그먼트 ? */}
          <Route path="/read/:id" element={<Read />} />
        </Route>
        {/* 스플렛 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

/*

    <Route path="/read/:id" element={<Read />} />
    <Route path="/read/*" element={<Read />} /> 

    위애서 아래로 적용돼서 처음이 적용됨.
    대신 /read/345/23/52 이렇게 된다면 아래 적용
  
 */
