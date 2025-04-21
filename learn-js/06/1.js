// 가상화 기법
// 실제로는 스크롤 할때마다 60개 정도 그려줌
// 화면에 보이는 요소만 렌더링하는 가상 스크롤 구현
const list = document.getElementById("my-list");
const totalItems = 999000;
const itemHeight = 30; // 각 항목의 높이 (픽셀)
const visibleItems = Math.ceil(window.innerHeight / itemHeight);

list.style.height = `${totalItems * itemHeight}px`;
let startIndex = 0;

function renderVisibleItems() {
  // 기존 항목 제거
  list.innerHTML = "";

  // 현재 스크롤 위치 기반으로 보여줄 항목 계산
  startIndex = Math.floor(window.scrollY / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems * 2, totalItems);

  // 화면에 표시될 항목과 약간의 버퍼만 렌더링
  const fragment = document.createDocumentFragment();
  for (let i = startIndex; i < endIndex; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    li.style.position = "absolute";
    li.style.top = `${i * itemHeight}px`;
    li.style.height = `${itemHeight}px`;
    fragment.appendChild(li);
  }
  list.appendChild(fragment);
}

window.addEventListener("scroll", renderVisibleItems);
renderVisibleItems(); // 초기 렌더링
